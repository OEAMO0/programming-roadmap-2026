import { roadmapSections, topicCatalog, type TopicLevel } from '../../data/roadmap';

type RoadmapTopic = (typeof topicCatalog)[string];

export type RoadmapFilterInput = {
  activeTrackId: string;
  activeLevel: TopicLevel | '';
  beginnerMode: boolean;
};

export type RoadmapFilterState = {
  hasActiveFilters: boolean;
  directlyMatchedIds: Set<string>;
  contextualIds: Set<string>;
  resultCount: number;
};

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

function isBeginnerFriendly(topic: RoadmapTopic) {
  return topic.level === 'ابدأ' || topic.level === 'أساسي';
}

export function buildRoadmapFilterState({
  activeTrackId,
  activeLevel,
  beginnerMode,
}: RoadmapFilterInput): RoadmapFilterState {
  const hasActiveFilters = Boolean(activeTrackId || activeLevel || beginnerMode);

  if (!hasActiveFilters) {
    return {
      hasActiveFilters: false,
      directlyMatchedIds: new Set<string>(),
      contextualIds: new Set<string>(),
      resultCount: 0,
    };
  }

  const directlyMatchedIds = new Set<string>();
  const contextualIds = new Set<string>();

  for (const topic of Object.values(topicCatalog)) {
    if (sectionIds.has(topic.id)) {
      continue;
    }

    const trackId = trackIdByTopicId.get(topic.id) ?? topic.id;
    const matchesTrack = !activeTrackId || trackId === activeTrackId;
    const matchesLevel = !activeLevel || topic.level === activeLevel;
    const matchesBeginnerMode = !beginnerMode || isBeginnerFriendly(topic);

    if (!matchesTrack || !matchesLevel || !matchesBeginnerMode) {
      continue;
    }

    directlyMatchedIds.add(topic.id);
    contextualIds.add(topic.id);
    contextualIds.add(trackId);
  }

  if (activeTrackId) {
    contextualIds.add(activeTrackId);
  }

  return {
    hasActiveFilters: true,
    directlyMatchedIds,
    contextualIds,
    resultCount: directlyMatchedIds.size,
  };
}
