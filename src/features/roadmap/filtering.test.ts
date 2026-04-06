import { describe, expect, it } from 'vitest';
import { buildRoadmapFilterState, getQuickSearchResults, normalizeSearchText } from './filtering';

describe('roadmap filtering helpers', () => {
  it('normalizes Arabic diacritics and punctuation for search', () => {
    expect(normalizeSearchText('الرِّياضيات ـ على Linux!!!')).toBe('الرياضيات على linux');
  });

  it('matches math content inside the Python engineering track', () => {
    const filterState = buildRoadmapFilterState({
      searchQuery: 'NumPy',
      activeTrackId: 'python-engineering',
      activeLevel: 'متقدم',
    });

    expect(filterState.directlyMatchedIds.has('python-math-computing')).toBe(true);
    expect(filterState.resultCount).toBeGreaterThanOrEqual(1);

    const quickResults = getQuickSearchResults(filterState);
    expect(quickResults[0]?.id).toBe('python-math-computing');
  });

  it('supports filtering by Linux track and level without a search term', () => {
    const filterState = buildRoadmapFilterState({
      searchQuery: '',
      activeTrackId: 'systems-native',
      activeLevel: 'متقدم',
    });

    expect(filterState.hasActiveFilters).toBe(true);
    expect(filterState.directlyMatchedIds.has('linux-math-libraries')).toBe(true);
    expect(filterState.directlyMatchedIds.has('cpp-math-geometry')).toBe(true);
  });

  it('returns quick search cards only when the user typed a query', () => {
    const filterState = buildRoadmapFilterState({
      searchQuery: '',
      activeTrackId: 'python-engineering',
      activeLevel: '',
    });

    expect(getQuickSearchResults(filterState)).toEqual([]);
  });
});
