import { describe, expect, it } from 'vitest';
import { buildRoadmapShareUrl, buildRoadmapUrlSearch, parseRoadmapUrlState } from './url-state';

describe('roadmap url state helpers', () => {
  it('parses a valid shared state from the URL', () => {
    const state = parseRoadmapUrlState('?q=NumPy&track=python-engineering&level=%D9%85%D8%AA%D9%82%D8%AF%D9%85&topic=python-math-computing');

    expect(state.searchQuery).toBe('NumPy');
    expect(state.activeTrackId).toBe('python-engineering');
    expect(state.activeLevel).toBe('متقدم');
    expect(state.topicId).toBe('python-math-computing');
  });

  it('ignores invalid topic and filter values', () => {
    const state = parseRoadmapUrlState('?track=unknown&level=invalid&topic=missing-topic');

    expect(state.activeTrackId).toBe('');
    expect(state.activeLevel).toBe('');
    expect(state.topicId).toBeNull();
  });

  it('builds a stable share url for the current state', () => {
    const url = buildRoadmapShareUrl(
      {
        searchQuery: 'Linux math',
        activeTrackId: 'systems-native',
        activeLevel: 'متقدم',
        topicId: 'linux-math-libraries',
      },
      'https://programming-roadmap-2026.omadkdklilipo.workers.dev/',
    );

    expect(buildRoadmapUrlSearch(parseRoadmapUrlState(new URL(url).search))).toContain('track=systems-native');
    expect(url).toContain('topic=linux-math-libraries');
  });
});
