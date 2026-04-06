import { roadmapSections, topicCatalog, type TopicLevel } from '../../data/roadmap';

type RoadmapTopic = (typeof topicCatalog)[string];

export type RoadmapFilterInput = {
  searchQuery: string;
  activeTrackId: string;
  activeLevel: TopicLevel | '';
};

export type RoadmapFilterState = {
  hasActiveFilters: boolean;
  directlyMatchedIds: Set<string>;
  contextualIds: Set<string>;
  resultCount: number;
  normalizedQuery: string;
  queryTokens: string[];
};

export type QuickSearchResult = {
  id: string;
  title: string;
  category: string;
  level: TopicLevel;
  trackId: string;
  trackTitle: string;
  summary: string;
};

const arabicDiacriticsPattern = /[\u064b-\u065f\u0670\u06d6-\u06ed]/g;
const nonSearchCharactersPattern = /[^\p{L}\p{N}]+/gu;

export const levelOptions: TopicLevel[] = ['ابدأ', 'أساسي', 'عملي', 'متقدم', '2026'];

export const trackOptions = roadmapSections.map((section) => ({
  id: section.id,
  title: topicCatalog[section.id]?.title ?? section.id,
}));

export const validTrackIds = new Set(trackOptions.map((track) => track.id));
export const validTopicIds = new Set(Object.keys(topicCatalog));
const sectionIds = new Set(roadmapSections.map((section) => section.id));

export const trackIdByTopicId = new Map<string, string>();

for (const section of roadmapSections) {
  trackIdByTopicId.set(section.id, section.id);

  for (const topicId of [...section.right, ...section.left]) {
    trackIdByTopicId.set(topicId, section.id);
  }
}

export function normalizeSearchText(value: string) {
  return value
    .normalize('NFKD')
    .replace(arabicDiacriticsPattern, '')
    .replace(/[ـ]/g, '')
    .toLowerCase()
    .replace(nonSearchCharactersPattern, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildTopicSearchDocument(topic: RoadmapTopic, trackTitle: string) {
  return normalizeSearchText(
    [
      topic.title,
      topic.category,
      topic.level,
      trackTitle,
      topic.summary,
      topic.note2026 ?? '',
      ...topic.learn,
      ...topic.build,
      ...topic.tags,
      ...(topic.searchKeywords ?? []),
      ...topic.resources.flatMap((resource) => [resource.label, resource.url]),
    ].join(' '),
  );
}

export const topicSearchDocumentById = new Map<string, string>();

for (const topic of Object.values(topicCatalog)) {
  const trackId = trackIdByTopicId.get(topic.id) ?? topic.id;
  const trackTitle = topicCatalog[trackId]?.title ?? '';
  topicSearchDocumentById.set(topic.id, buildTopicSearchDocument(topic, trackTitle));
}

export function buildRoadmapFilterState({
  searchQuery,
  activeTrackId,
  activeLevel,
}: RoadmapFilterInput): RoadmapFilterState {
  const normalizedQuery = normalizeSearchText(searchQuery);
  const queryTokens = normalizedQuery ? normalizedQuery.split(' ') : [];
  const hasActiveFilters = Boolean(queryTokens.length || activeTrackId || activeLevel);

  if (!hasActiveFilters) {
    return {
      hasActiveFilters: false,
      directlyMatchedIds: new Set<string>(),
      contextualIds: new Set<string>(),
      resultCount: 0,
      normalizedQuery,
      queryTokens,
    };
  }

  const directlyMatchedIds = new Set<string>();
  const contextualIds = new Set<string>();

  for (const topic of Object.values(topicCatalog)) {
    const trackId = trackIdByTopicId.get(topic.id) ?? topic.id;
    const searchDocument = topicSearchDocumentById.get(topic.id) ?? '';
    const matchesTrack = !activeTrackId || trackId === activeTrackId;
    const matchesLevel = !activeLevel || topic.level === activeLevel;
    const matchesQuery = !queryTokens.length || queryTokens.every((token) => searchDocument.includes(token));

    if (!matchesTrack || !matchesLevel || !matchesQuery) {
      continue;
    }

    directlyMatchedIds.add(topic.id);
    contextualIds.add(topic.id);
    contextualIds.add(trackId);
  }

  if (activeTrackId) {
    contextualIds.add(activeTrackId);
  }

  const topicMatches = [...directlyMatchedIds].filter((topicId) => !sectionIds.has(topicId) && topicCatalog[topicId]).length;

  return {
    hasActiveFilters: true,
    directlyMatchedIds,
    contextualIds,
    resultCount: topicMatches,
    normalizedQuery,
    queryTokens,
  };
}

function getSearchResultScore(topic: RoadmapTopic, filterState: RoadmapFilterState) {
  const title = normalizeSearchText(topic.title);
  const summary = normalizeSearchText(topic.summary);
  const searchDocument = topicSearchDocumentById.get(topic.id) ?? '';

  if (!filterState.queryTokens.length) {
    return 40;
  }

  let score = 0;

  if (title === filterState.normalizedQuery) {
    score += 120;
  }

  if (title.startsWith(filterState.normalizedQuery)) {
    score += 80;
  }

  if (filterState.queryTokens.every((token) => title.includes(token))) {
    score += 52;
  }

  if (filterState.queryTokens.every((token) => summary.includes(token))) {
    score += 24;
  }

  if (filterState.queryTokens.every((token) => searchDocument.includes(token))) {
    score += 16;
  }

  score += Math.max(0, 20 - topic.title.length / 6);

  return score;
}

export function getQuickSearchResults(filterState: RoadmapFilterState, limit = 6): QuickSearchResult[] {
  if (!filterState.hasActiveFilters) {
    return [];
  }

  return [...filterState.directlyMatchedIds]
    .map((topicId) => topicCatalog[topicId])
    .filter((topic): topic is RoadmapTopic => Boolean(topic) && trackIdByTopicId.has(topic.id) && !sectionIds.has(topic.id))
    .sort((left, right) => {
      const scoreDifference = getSearchResultScore(right, filterState) - getSearchResultScore(left, filterState);

      if (scoreDifference !== 0) {
        return scoreDifference;
      }

      return left.title.localeCompare(right.title, 'ar');
    })
    .slice(0, limit)
    .map((topic) => {
      const trackId = trackIdByTopicId.get(topic.id) ?? topic.id;

      return {
        id: topic.id,
        title: topic.title,
        category: topic.category,
        level: topic.level,
        trackId,
        trackTitle: topicCatalog[trackId]?.title ?? trackId,
        summary: topic.summary,
      };
    });
}
