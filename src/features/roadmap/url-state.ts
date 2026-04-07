import { validTopicIds, validTrackIds, type RoadmapFilterInput } from './filtering';
import type { TopicLevel } from '../../data/roadmap';

export type RoadmapUrlState = RoadmapFilterInput & {
  topicId: string | null;
};

const allowedLevels = new Set<TopicLevel>(['ابدأ', 'أساسي', 'عملي', 'متقدم', '2026']);

export function parseRoadmapUrlState(search: string): RoadmapUrlState {
  const params = new URLSearchParams(search);
  const topicId = params.get('topic');
  const trackId = params.get('track') ?? '';
  const levelParam = params.get('level') ?? '';
  const beginnerMode = params.get('beginner') === '1';

  return {
    topicId: topicId && validTopicIds.has(topicId) ? topicId : null,
    activeTrackId: trackId && validTrackIds.has(trackId) ? trackId : '',
    activeLevel: allowedLevels.has(levelParam as TopicLevel) ? (levelParam as TopicLevel) : '',
    beginnerMode,
  };
}

export function buildRoadmapUrlSearch({
  topicId,
  activeTrackId,
  activeLevel,
  beginnerMode,
}: RoadmapUrlState) {
  const params = new URLSearchParams();

  if (activeTrackId) {
    params.set('track', activeTrackId);
  }

  if (activeLevel) {
    params.set('level', activeLevel);
  }

  if (beginnerMode) {
    params.set('beginner', '1');
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
