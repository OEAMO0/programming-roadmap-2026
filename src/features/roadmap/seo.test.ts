import { describe, expect, it } from 'vitest';
import { roadmapMeta, topicCatalog } from '../../data/roadmap';
import { buildRoadmapSeoState, syncRoadmapSeoDocument } from './seo';

describe('roadmap SEO', () => {
  it('builds an indexable home page SEO state by default', () => {
    const seo = buildRoadmapSeoState({
      selectedTopic: null,
      searchQuery: '',
      activeTrackId: '',
      activeLevel: '',
    });

    expect(seo.title).toContain(roadmapMeta.title);
    expect(seo.title).toContain('مسارات تفاعلية');
    expect(seo.canonicalUrl).toContain('programming-roadmap-2026.devbread.workers.dev');
    expect(seo.robots).toContain('index,follow');
    expect(seo.structuredData).toContain('CollectionPage');
  });

  it('builds a focused topic SEO state when a topic is open', () => {
    const seo = buildRoadmapSeoState({
      selectedTopic: topicCatalog['python-math-computing'],
      searchQuery: '',
      activeTrackId: '',
      activeLevel: '',
    });

    expect(seo.title).toContain('رياضيات Python');
    expect(seo.canonicalUrl).toContain('topic=python-math-computing');
    expect(seo.description).toContain('Python');
    expect(seo.robots).toContain('index,follow');
  });

  it('marks pure search views as noindex to avoid duplicate low-value pages', () => {
    const seo = buildRoadmapSeoState({
      selectedTopic: null,
      searchQuery: 'NumPy',
      activeTrackId: '',
      activeLevel: '',
    });

    expect(seo.title).toContain('نتائج البحث');
    expect(seo.robots).toContain('noindex,follow');
    expect(seo.canonicalUrl).toBe('https://programming-roadmap-2026.devbread.workers.dev/');
  });

  it('syncs the SEO state into document head tags', () => {
    const seo = buildRoadmapSeoState({
      selectedTopic: topicCatalog['frontend-web'],
      searchQuery: '',
      activeTrackId: '',
      activeLevel: '',
    });

    syncRoadmapSeoDocument(seo);

    expect(document.title).toBe(seo.title);
    expect(document.head.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(seo.description);
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(seo.canonicalUrl);
    expect(document.head.querySelector('meta[property="og:image"]')?.getAttribute('content')).toContain('roadmap-social-card.svg');
    expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute('content')).toBe('summary_large_image');
    expect(document.getElementById('roadmap-structured-data')?.textContent).toContain('LearningResource');
  });
});
