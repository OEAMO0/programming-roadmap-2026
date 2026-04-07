import { roadmapMeta, roadmapSections, topicCatalog, type TopicDetail, type TopicLevel } from '../../data/roadmap';
import { trackIdByTopicId } from './filtering';

export type RoadmapRoute = 'home' | 'map';

export type RoadmapSeoInput = {
  route: RoadmapRoute;
  selectedTopic: TopicDetail | null;
  activeTrackId: string;
  activeLevel: TopicLevel | '';
  beginnerMode: boolean;
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
  'خريطة تعلم لينكس',
  'خريطة تعلم البرمجة',
  'تعلم لينكس بالعربية',
  'Linux roadmap Arabic',
  'Linux kernel',
  'Linux distribution engineering',
  'Systems programming',
  'تعلم البرمجة من الصفر',
];

const homeDescription = trimForSnippet(
  `صفحة عربية مرتبة تقودك من فهم 0 و1 وطبقات الحاسوب إلى مسارات لينكس العميقة: الاستخدام اليومي، برمجة الأنظمة، النواة، وبناء التوزيعات، مع مسار ويب واحد ومصادر موثوقة.`,
);
const mapDescription = trimForSnippet(
  `الخريطة التفاعلية تضم ${roadmapMeta.totalTracks} مسارات ظاهرة و${roadmapMeta.totalTopics} موضوعًا فعّالًا، مع تركيز كبير على لينكس والنواة وبناء التوزيعات ومصادر رسمية لكل باب.`,
);
const socialImageUrl = new URL('/roadmap-social-card.svg', roadmapMeta.siteUrl).toString();
const socialImageAlt = 'بطاقة خريطة تعلم البرمجة 2026 بالعربية مع تركيز قوي على لينكس';

function buildMapUrl(search = '') {
  const url = new URL('/map', roadmapMeta.siteUrl);
  url.search = search;
  return url.toString();
}

function buildTopicCanonicalUrl(topicId: string) {
  const url = new URL('/map', roadmapMeta.siteUrl);
  url.searchParams.set('topic', topicId);
  return url.toString();
}

function getTrackContext(topicId: string) {
  const trackId = trackIdByTopicId.get(topicId) ?? topicId;
  const trackTitle = topicCatalog[trackId]?.title ?? '';
  return { trackId, trackTitle };
}

function buildStructuredData(input: {
  route: RoadmapRoute;
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
    description: homeDescription,
    image: socialImageUrl,
  };

  if (input.selectedTopic) {
    const { trackId, trackTitle } = getTrackContext(input.selectedTopic.id);

    return JSON.stringify(
      [
        website,
        {
          '@context': 'https://schema.org',
          '@type': 'LearningResource',
          name: input.selectedTopic.title,
          url: input.canonicalUrl,
          inLanguage: 'ar',
          description: input.selectedTopic.summary,
          educationalLevel: input.selectedTopic.level,
          isAccessibleForFree: true,
          learningResourceType: 'Interactive roadmap topic',
          about: [trackTitle, input.selectedTopic.category].filter(Boolean),
          teaches: input.selectedTopic.learn.slice(0, 4),
          isPartOf: {
            '@type': 'CollectionPage',
            name: trackTitle || roadmapMeta.title,
            url: buildTopicCanonicalUrl(trackId),
          },
        },
      ],
      null,
      2,
    );
  }

  if (input.route === 'home') {
    return JSON.stringify(
      [
        website,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: input.title,
          url: input.canonicalUrl,
          inLanguage: 'ar',
          description: input.description,
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
        },
      ],
      null,
      2,
    );
  }

  return JSON.stringify(
    [
      website,
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: input.title,
        url: input.canonicalUrl,
        inLanguage: 'ar',
        description: input.description,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        isAccessibleForFree: true,
      },
    ],
    null,
    2,
  );
}

export function buildRoadmapSeoState({
  route,
  selectedTopic,
  activeTrackId,
  activeLevel,
  beginnerMode,
}: RoadmapSeoInput): RoadmapSeoState {
  let title = `${roadmapMeta.title} بالعربية | مسارات لينكس والبرمجة من الصفر حتى التوزيعات`;
  let description = route === 'home' ? homeDescription : mapDescription;
  let canonicalUrl = route === 'home' ? roadmapMeta.siteUrl : buildMapUrl();
  let robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  let keywords = siteKeywords.join(', ');

  if (selectedTopic) {
    const { trackTitle } = getTrackContext(selectedTopic.id);
    title = `${selectedTopic.title} | ${roadmapMeta.title}`;
    description = trimForSnippet(
      `${selectedTopic.summary} ضمن مسار ${trackTitle || selectedTopic.category}، مع ما تتعلمه، ما تبنيه، ومراجع رسمية تقودك من الفهم إلى التطبيق.`,
    );
    canonicalUrl = buildTopicCanonicalUrl(selectedTopic.id);
    keywords = [...siteKeywords, selectedTopic.title, selectedTopic.category, selectedTopic.level, ...selectedTopic.tags].join(', ');
  } else if (activeTrackId) {
    const trackTitle = topicCatalog[activeTrackId]?.title ?? '';
    title = `${trackTitle} | ${roadmapMeta.title}`;
    description = trimForSnippet(`استكشف مسار ${trackTitle} داخل الخريطة التفاعلية، مع فلترة مركزة ومراجع عملية وعقد مترابطة.`);
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  } else if (activeLevel) {
    title = `مستوى ${activeLevel} | ${roadmapMeta.title}`;
    description = trimForSnippet(`اعرض موضوعات مستوى ${activeLevel} فقط داخل خريطة التعلم التفاعلية.`);
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  } else if (beginnerMode) {
    title = `الوضع المبتدئ | ${roadmapMeta.title}`;
    description = trimForSnippet('اعرض فقط الموضوعات المناسبة للبداية داخل الخريطة التفاعلية.');
    robots = 'noindex,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
  } else if (route === 'map') {
    title = `الخريطة التفاعلية | ${roadmapMeta.title}`;
  }

  return {
    title,
    description,
    canonicalUrl,
    robots,
    keywords,
    structuredData: buildStructuredData({
      route,
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
