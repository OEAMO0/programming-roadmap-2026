import { describe, expect, it } from 'vitest';
import { buildRoadmapFilterState } from './filtering';

describe('roadmap filtering helpers', () => {
  it('filters topics inside a selected track and level', () => {
    const filterState = buildRoadmapFilterState({
      activeTrackId: 'linux-distribution-engineering',
      activeLevel: 'متقدم',
      beginnerMode: false,
    });

    expect(filterState.hasActiveFilters).toBe(true);
    expect(filterState.directlyMatchedIds.has('linux-distro-on-existing-base')).toBe(true);
    expect(filterState.directlyMatchedIds.has('linux-package-repositories-signing')).toBe(true);
    expect(filterState.contextualIds.has('linux-distribution-engineering')).toBe(true);
  });

  it('keeps only beginner-friendly topics when beginner mode is enabled', () => {
    const filterState = buildRoadmapFilterState({
      activeTrackId: 'linux-userland-operations',
      activeLevel: '',
      beginnerMode: true,
    });

    expect(filterState.directlyMatchedIds.has('linux-cli-filesystem-permissions')).toBe(true);
    expect(filterState.directlyMatchedIds.has('linux-boot-initramfs')).toBe(false);
  });

  it('returns an empty state when there are no active filters', () => {
    const filterState = buildRoadmapFilterState({
      activeTrackId: '',
      activeLevel: '',
      beginnerMode: false,
    });

    expect(filterState.hasActiveFilters).toBe(false);
    expect(filterState.resultCount).toBe(0);
  });
});
