import { roadmapMeta, roadmapSections, topicCatalog, type TopicDetail, type TopicLevel } from '../../data/roadmap';
import { trackIdByTopicId } from './filtering';

export type RoadmapSeoInput = {
  selectedTopic: TopicDetail | null;
  searchQuery: string;
  activeTrackId: string;
  activeLevel: TopicLevel | '';
};

export type RoadmapSeoState = {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: string;
  keywords: string;
  structuredData: string;
};

function collapseWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function trimForSnippet(value: string, maxLength = 170) {
  const normalized = collapseWhitespace(value);

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 3).trimEnd()}...`;
}

const siteKeywords = [
  'خريطة تعلم البرمجة',
  'تعلم البرمجة بالعربية',
  'تعلم البرمجة من الصفر',
  'مسارات تعلم البرمجة',
  'Programming Roadmap 2026',
  'Frontend',
  'Backend',
  'Systems Programming',
  'Security',
  'AI Engineering',
];

const socialImageUrl = new URL('/roadmap-social-card.svg', roadmapMeta.siteUrl).toString();
const socialImageAlt = 'بطاقة خريطة تعلم البرمجة 2026 بالعربية';
const homeSeoTitle = `${roadmapMeta.title} بالعربية | مسارات تفاعلية من البداية إلى التخصص`;
const defaultDescription = trimForSnippet(
  [
    `خريطة تعلم برمجة تفاعلية بالعربية تضم ${roadmapMeta.totalTracks} مسارًا و${roadmapMeta.totalTopics} موضوعًا`,
    'وتغطي الأساسيات والويب والباك إند والأنظمة والأمن والسحابة والهندسة البرمجية وAI Engineering بمراجع موثوقة وخطوات عملية.',
  ].join(' '),
);

function buildTopicCanonicalUrl(topicId: string) {
  const url = new URL(roadmapMeta.siteUrl);
  url.searchParams.set('topic', topicId);
  return url.toString();
}

function getTrackContext(topicId: string) {
  const trackId = trackIdByTopicId.get(topicId) ?? topicId;
  const trackTitle = topicCatalog[trackId]?.title ?? '';
  return { trackId, trackTitle };
}

function buildStructuredData(input: {
  title: string;
  description: string;
  canonicalUrl: string;
  selectedTopic: TopicDetail | null;
}) {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: roadmapMeta.title,
    alternateName: 'Programming Roadmap 2026',
    url: roadmapMeta.siteUrl,
    inLanguage: 'ar',
    description: defaultDescription,
    image: socialImageUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${roadmapMeta.siteUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  if (!input.selectedTopic) {
    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: input.title,
      url: input.canonicalUrl,
      inLanguage: 'ar',
      description: input.description,
      isPartOf: {
        '@type': 'WebSite',
        name: roadmapMeta.title,
        url: roadmapMeta.siteUrl,
      },
      image: socialImageUrl,
      mainEntity: {
        '@type': 'ItemList',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: roadmapSections.length,
        itemListElement: roadmapSections.map((section, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: topicCatalog[section.id]?.title ?? section.id,
          url: buildTopicCanonicalUrl(section.id),
        })),
      },
    };

    return JSON.stringify([website, itemList], null, 2);
  }

  const { trackId, trackTitle } = getTrackContext(input.selectedTopic.id);
  const topicPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.title,
    url: input.canonicalUrl,
    inLanguage: 'ar',
    description: input.description,
    isPartOf: {
      '@type': 'WebSite',
      name: roadmapMeta.title,
      url: roadmapMeta.siteUrl,
    },
    image: socialImageUrl,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: roadmapMeta.title,
          item: roadmapMeta.siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: trackTitle || input.selectedTopic.category,
          item: buildTopicCanonicalUrl(trackId),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: input.selectedTopic.title,
          item: input.canonicalUrl,
        },
      ],
    },
    mainEntity: {
      '@type': 'LearningResource',
      name: input.selectedTopic.title,
      url: input.canonicalUrl,
      description: input.selectedTopic.summary,
      inLanguage: 'ar',
      educationalLevel: input.selectedTopic.level,
      learningResourceType: 'Interactive roadmap topic',
      isAccessibleForFree: true,
      keywords: [...input.selectedTopic.tags, input.selectedTopic.category, trackTitle].filter(Boolean).join(', '),
      teaches: input.selectedTopic.learn.slice(0, 4),
    },
  };

  return JSON.stringify([website, topicPage], null, 2);
}

export function buildRoadmapSeoState({
  selectedTopic,
  searchQuery,
  activeTrackId,
  activeLevel,
}: RoadmapSeoInput): RoadmapSeoState {
  const normalizedQuery = searchQuery.trim();
  const activeTrackTitle = activeTrackId ? topicCatalog[activeTrackId]?.title ?? '' : '';
  const hasNonTopicFilters = Boolean(normalizedQuery || activeTrackId || activeLevel);

  let title = homeSeoTitle;
  let description = defaultDescription;
  let canonicalUrl = roadmapMeta.siteUrl;
  let robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  let keywords = siteKeywords.join(', ');

  if (selectedTopic) {
    const { trackTitle } = getTrackContext(selectedTopic.id);
    title = `${selectedTopic.title} | ${roadmapMeta.title} بالعربية`;
    description = trimForSnippet(
      `${selectedTopic.summary} ضمن مسار ${trackTitle || selectedTopic.category}، بمستوى ${selectedTopic.level} ومصادر موثوقة وخطوات عملية داخل خريطة تعلم البرمجة 2026.`,
    );
    canonicalUrl = buildTopicCanonicalUrl(selectedTopic.id);
    keywords = [...siteKeywords, selectedTopic.title, selectedTopic.category, selectedTopic.level, ...selectedTopic.tags].join(', ');
  } else if (normalizedQuery) {
    title = `نتائج البحث عن ${normalizedQuery} | ${roadmapMeta.title}`;
    description = trimForSnippet(
      `استكشف نتائج البحث عن ${normalizedQuery} داخل خريطة تعلم البرمجة 2026 بالعربية، مع مسارات مرتبة ومراجع موثوقة من البداية حتى التخصص.`,
    );
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  } else if (activeTrackTitle) {
    title = `${activeTrackTitle} | ${roadmapMeta.title} بالعربية`;
    description = trimForSnippet(
      `استكشف مسار ${activeTrackTitle} داخل خريطة تعلم البرمجة 2026 بالعربية، مع مواضيع مرتبة ومراجع موثوقة وتجارب عملية واضحة.`,
    );
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  } else if (activeLevel) {
    title = `مستوى ${activeLevel} | ${roadmapMeta.title}`;
    description = trimForSnippet(
      `استكشف موضوعات مستوى ${activeLevel} داخل خريطة تعلم البرمجة 2026 بالعربية، مع تنظيم واضح من الأساسيات حتى التعمق.`,
    );
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  }

  if (!selectedTopic && !hasNonTopicFilters) {
    description = defaultDescription;
  }

  return {
    title,
    description,
    canonicalUrl,
    robots,
    keywords,
    structuredData: buildStructuredData({
      title,
      description,
      canonicalUrl,
      selectedTopic,
    }),
  };
}

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
}

function setStructuredDataScript(content: string) {
  const scriptId = 'roadmap-structured-data';
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = content;
}

export function syncRoadmapSeoDocument(seoState: RoadmapSeoState) {
  document.title = seoState.title;

  setMetaTag('name', 'description', seoState.description);
  setMetaTag('name', 'keywords', seoState.keywords);
  setMetaTag('name', 'robots', seoState.robots);
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('property', 'og:title', seoState.title);
  setMetaTag('property', 'og:description', seoState.description);
  setMetaTag('property', 'og:url', seoState.canonicalUrl);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:site_name', roadmapMeta.title);
  setMetaTag('property', 'og:locale', 'ar_SA');
  setMetaTag('property', 'og:image', socialImageUrl);
  setMetaTag('property', 'og:image:secure_url', socialImageUrl);
  setMetaTag('property', 'og:image:type', 'image/svg+xml');
  setMetaTag('property', 'og:image:alt', socialImageAlt);
  setMetaTag('name', 'twitter:title', seoState.title);
  setMetaTag('name', 'twitter:description', seoState.description);
  setMetaTag('name', 'twitter:url', seoState.canonicalUrl);
  setMetaTag('name', 'twitter:image', socialImageUrl);
  setMetaTag('name', 'twitter:image:alt', socialImageAlt);
  setLinkTag('canonical', seoState.canonicalUrl);
  setStructuredDataScript(seoState.structuredData);
}
