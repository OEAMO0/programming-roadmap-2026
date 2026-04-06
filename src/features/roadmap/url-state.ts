import { validTopicIds, validTrackIds, type RoadmapFilterInput } from './filtering';
import type { TopicLevel } from '../../data/roadmap';

export type RoadmapUrlState = RoadmapFilterInput & {
  topicId: string | null;
};

const allowedLevels = new Set<TopicLevel>(['ابدأ', 'أساسي', 'عملي', 'متقدم', '2026']);

export function parseRoadmapUrlState(search: string): RoadmapUrlState {
  const params = new URLSearchParams(search);
  const topicId = params.get('topic');
  const searchQuery = params.get('q')?.trim() ?? '';
  const trackId = params.get('track') ?? '';
  const levelParam = params.get('level') ?? '';

  return {
    topicId: topicId && validTopicIds.has(topicId) ? topicId : null,
    searchQuery,
    activeTrackId: trackId && validTrackIds.has(trackId) ? trackId : '',
    activeLevel: allowedLevels.has(levelParam as TopicLevel) ? (levelParam as TopicLevel) : '',
  };
}

export function buildRoadmapUrlSearch({
  topicId,
  searchQuery,
  activeTrackId,
  activeLevel,
}: RoadmapUrlState) {
  const params = new URLSearchParams();

  if (searchQuery.trim()) {
    params.set('q', searchQuery.trim());
  }

  if (activeTrackId) {
    params.set('track', activeTrackId);
  }

  if (activeLevel) {
    params.set('level', activeLevel);
  }

  if (topicId) {
    params.set('topic', topicId);
  }

  const nextSearch = params.toString();

  return nextSearch ? `?${nextSearch}` : '';
}

export function buildRoadmapShareUrl(state: RoadmapUrlState, baseHref: string) {
  const url = new URL(baseHref);
  url.search = buildRoadmapUrlSearch(state);
  return url.toString();
}
