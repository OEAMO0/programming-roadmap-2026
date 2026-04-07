import { describe, expect, it } from 'vitest';
import { buildRoadmapShareUrl, buildRoadmapUrlSearch, parseRoadmapUrlState } from './url-state';

describe('roadmap url state helpers', () => {
  it('parses a valid shared state from the URL', () => {
    const state = parseRoadmapUrlState(
      '?track=linux-distribution-engineering&level=%D9%85%D8%AA%D9%82%D8%AF%D9%85&beginner=1&topic=linux-buildroot-lfs',
    );

    expect(state.activeTrackId).toBe('linux-distribution-engineering');
    expect(state.activeLevel).toBe('متقدم');
    expect(state.beginnerMode).toBe(true);
    expect(state.topicId).toBe('linux-buildroot-lfs');
  });

  it('ignores invalid topic and filter values', () => {
    const state = parseRoadmapUrlState('?track=unknown&level=invalid&topic=missing-topic');

    expect(state.activeTrackId).toBe('');
    expect(state.activeLevel).toBe('');
    expect(state.topicId).toBeNull();
    expect(state.beginnerMode).toBe(false);
  });

  it('builds a stable share url for the current state', () => {
    const url = buildRoadmapShareUrl(
      {
        activeTrackId: 'linux-kernel-internals',
        activeLevel: 'متقدم',
        beginnerMode: false,
        topicId: 'linux-kernel-config-build',
      },
      'https://programming-roadmap-2026.devbread.workers.dev/map',
    );

    expect(buildRoadmapUrlSearch(parseRoadmapUrlState(new URL(url).search))).toContain('track=linux-kernel-internals');
    expect(url).toContain('topic=linux-kernel-config-build');
  });
});
