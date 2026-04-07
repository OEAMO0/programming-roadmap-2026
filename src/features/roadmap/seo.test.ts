import { describe, expect, it } from 'vitest';
import { roadmapMeta, topicCatalog } from '../../data/roadmap';
import { buildRoadmapSeoState, syncRoadmapSeoDocument } from './seo';

describe('roadmap SEO', () => {
  it('builds an indexable home page SEO state', () => {
    const seo = buildRoadmapSeoState({
      route: 'home',
      selectedTopic: null,
      activeTrackId: '',
      activeLevel: '',
      beginnerMode: false,
    });

    expect(seo.title).toContain(roadmapMeta.title);
    expect(seo.canonicalUrl).toBe(roadmapMeta.siteUrl);
    expect(seo.robots).toContain('index,follow');
    expect(seo.structuredData).toContain('CollectionPage');
  });

  it('builds a focused topic SEO state on /map topic pages', () => {
    const seo = buildRoadmapSeoState({
      route: 'map',
      selectedTopic: topicCatalog['linux-distribution-engineering'],
      activeTrackId: '',
      activeLevel: '',
      beginnerMode: false,
    });

    expect(seo.title).toContain('Linux Distribution Engineering');
    expect(seo.canonicalUrl).toContain('/map?topic=linux-distribution-engineering');
    expect(seo.robots).toContain('index,follow');
    expect(seo.structuredData).toContain('LearningResource');
  });

  it('marks filtered map views as noindex', () => {
    const seo = buildRoadmapSeoState({
      route: 'map',
      selectedTopic: null,
      activeTrackId: 'linux-userland-operations',
      activeLevel: '',
      beginnerMode: false,
    });

    expect(seo.robots).toContain('noindex,follow');
    expect(seo.title).toContain(topicCatalog['linux-userland-operations'].title);
  });

  it('syncs the SEO state into document head tags', () => {
    const seo = buildRoadmapSeoState({
      route: 'map',
      selectedTopic: topicCatalog['frontend-web'],
      activeTrackId: '',
      activeLevel: '',
      beginnerMode: false,
    });

    syncRoadmapSeoDocument(seo);

    expect(document.title).toBe(seo.title);
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(seo.description);
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(seo.canonicalUrl);
    expect(document.getElementById('roadmap-structured-data')?.textContent).toContain('LearningResource');
  });
});
