import type { Edge, Node } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';
import {
  commonMistakesByTopicId,
  curatedTopicLinks,
  friendlyResourcePattern,
  getFallbackCommonMistakes,
  getFallbackMiniLabs,
  getFallbackProjectIdeas,
  getFallbackSearchKeywords,
  miniLabsByTopicId,
  officialResourcePattern,
  projectIdeasByTopicId,
  uniqueResources,
} from './roadmap-guidance';
import {
  type Journey,
  type ResourceLink,
  type RoadmapNodeData,
  type SectionLayout,
  type Tone,
  type TopicDetail,
  type TopicLevel,
  type TopicLinkHints,
  tonePalette,
} from './roadmap-model';
import { roadmapSections } from './roadmap-structure';
import { topicInputs } from './roadmap-topic-inputs';

export type { Journey, RoadmapNodeData, Tone, TopicDetail, TopicLevel } from './roadmap-model';
export { roadmapSections } from './roadmap-structure';
export { tonePalette } from './roadmap-model';

export const topicCatalog = Object.fromEntries(
  Object.entries(topicInputs).map(([id, topic]) => [id, { id, ...topic }]),
) as Record<string, TopicDetail>;

export const roadmapMeta = {
  title: 'خريطة تعلّم البرمجة 2026',
  subtitle:
    'واجهة تفاعلية بالعربية تغطي الرحلة من لماذا وُجدت البرمجة والكمبيوتر أصلًا، حتى التخصص والمرجعية المهنية الحديثة.',
  updatedAt: '2026-04-06',
  siteUrl: 'https://programming-roadmap-2026.devbread.workers.dev/',
  legacySiteUrls: ['https://programming-roadmap-2026.omadkdklilipo.workers.dev/'],
  totalTracks: roadmapSections.length,
  totalTopics: Object.keys(topicCatalog).length,
};

function getJourney(level: TopicLevel): Journey {
  switch (level) {
    case 'ابدأ':
    case 'أساسي':
      return 'enter';
    case 'عملي':
      return 'optional';
    case 'متقدم':
    case '2026':
      return 'mastery';
  }
}

function buildAdjacency(edges: Edge[]) {
  const neighbors = new Map<string, Set<string>>();

  for (const edge of edges) {
    const sourceSet = neighbors.get(edge.source) ?? new Set<string>();
    const targetSet = neighbors.get(edge.target) ?? new Set<string>();

    sourceSet.add(edge.target);
    targetSet.add(edge.source);

    neighbors.set(edge.source, sourceSet);
    neighbors.set(edge.target, targetSet);
  }

  return neighbors;
}

export function buildRoadmapGraph() {
  const nodes: Node<RoadmapNodeData>[] = [];
  const edges: Edge[] = [];

  let cursorY = 64;
  let previousSectionId: string | null = null;

  for (const section of roadmapSections) {
    const leftCount = section.left.length;
    const rightCount = section.right.length;
    const maxBranches = Math.max(leftCount, rightCount, 1);
    const sectionHeight = Math.max(260, (maxBranches - 1) * 132 + 220);
    const centerY = cursorY + sectionHeight / 2;
    const tone = section.tone;
    const sectionTopic = topicCatalog[section.id];

    nodes.push({
      id: section.id,
      type: 'roadmapNode',
      position: { x: 0, y: centerY },
      data: {
        title: sectionTopic.title,
        category: sectionTopic.category,
        level: sectionTopic.level,
        journey: getJourney(sectionTopic.level),
        tone,
        variant: 'section',
        childCount: section.left.length + section.right.length,
      },
    });

    if (previousSectionId) {
      edges.push({
        id: `${previousSectionId}-${section.id}-spine`,
        source: previousSectionId,
        target: section.id,
        sourceHandle: 'source-bottom',
        targetHandle: 'target-top',
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: '#64748b',
        },
        style: {
          stroke: '#94a3b8',
          strokeWidth: 2.1,
          opacity: 0.9,
        },
      });
    }

    for (const [side, topicIds] of [
      ['right', section.right] as const,
      ['left', section.left] as const,
    ]) {
      const branchOffset = side === 'right' ? 392 : -392;
      const sourceHandle = side === 'right' ? 'source-right' : 'source-left';
      const targetHandle = side === 'right' ? 'target-left' : 'target-right';

      for (const [index, topicId] of topicIds.entries()) {
        const topic = topicCatalog[topicId];
        const y = centerY + (index - (topicIds.length - 1) / 2) * 132;

        nodes.push({
          id: topicId,
          type: 'roadmapNode',
          position: { x: branchOffset, y },
          data: {
            title: topic.title,
            category: topic.category,
            level: topic.level,
            journey: getJourney(topic.level),
            tone,
            variant: 'topic',
            childCount: 0,
          },
        });

        edges.push({
          id: `${section.id}-${topicId}`,
          source: section.id,
          target: topicId,
          sourceHandle,
          targetHandle,
          type: 'smoothstep',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: tonePalette[tone].line,
          },
          style: {
            stroke: tonePalette[tone].line,
            strokeWidth: 1.5,
            opacity: 0.62,
          },
        });
      }
    }

    previousSectionId = section.id;
    cursorY += sectionHeight;
  }

  return { nodes, edges };
}

const graph = buildRoadmapGraph();

export const baseNodes = graph.nodes;
export const baseEdges = graph.edges;

const adjacency = buildAdjacency(baseEdges);
const sectionByTopicId = new Map<string, SectionLayout>();
const sectionIndexById = new Map<string, number>();

for (const [index, section] of roadmapSections.entries()) {
  sectionIndexById.set(section.id, index);
  sectionByTopicId.set(section.id, section);

  for (const topicId of [...section.right, ...section.left]) {
    sectionByTopicId.set(topicId, section);
  }
}

export function getRelatedTopicIds(id: string) {
  const related = Array.from(adjacency.get(id) ?? []);

  return related.sort((left, right) =>
    topicCatalog[left].title.localeCompare(topicCatalog[right].title, 'ar'),
  );
}

function uniqueText(items: Array<string | null | undefined>) {
  return [...new Set(items)].filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
}

function formatTopicList(ids: string[], limit = 2) {
  const titles = ids
    .map((topicId) => topicCatalog[topicId]?.title)
    .filter((title): title is string => Boolean(title))
    .slice(0, limit);

  if (!titles.length) {
    return '';
  }

  if (titles.length === 1) {
    return titles[0];
  }

  if (titles.length === 2) {
    return `${titles[0]} و${titles[1]}`;
  }

  return `${titles.slice(0, -1).join('، ')}، و${titles[titles.length - 1]}`;
}

function uniqueTopicIds(ids: Array<string | null | undefined>, currentId?: string) {
  return [...new Set(ids)].filter(
    (topicId): topicId is string =>
      typeof topicId === 'string' && topicId !== currentId && Object.hasOwn(topicCatalog, topicId),
  );
}

function getSectionBranchContext(id: string) {
  const section = sectionByTopicId.get(id);

  if (!section) {
    return null;
  }

  const branch = section.right.includes(id) ? section.right : section.left.includes(id) ? section.left : null;

  return { section, branch };
}

function getAutomaticTopicLinks(id: string) {
  const context = getSectionBranchContext(id);

  if (!context) {
    return {
      before: [] as string[],
      next: [] as string[],
      alternatives: [] as string[],
    };
  }

  const { section, branch } = context;
  const sectionIndex = sectionIndexById.get(section.id) ?? -1;
  const previousSection = sectionIndex > 0 ? roadmapSections[sectionIndex - 1] : null;
  const nextSection = sectionIndex >= 0 ? roadmapSections[sectionIndex + 1] : null;
  const oppositeBranch = branch === section.right ? section.left : section.right;

  if (!branch) {
    return {
      before: uniqueTopicIds(
        [
          previousSection?.id ?? '',
          ...(previousSection ? [...previousSection.right.slice(0, 1), ...previousSection.left.slice(0, 1)] : []),
        ],
        id,
      ),
      next: uniqueTopicIds([...section.right.slice(0, 1), ...section.left.slice(0, 1), nextSection?.id ?? ''], id),
      alternatives: uniqueTopicIds([...section.right, ...section.left].slice(0, 3), id),
    };
  }

  const branchIndex = branch.indexOf(id);

  return {
    before: uniqueTopicIds([branch[branchIndex - 1], section.id, previousSection?.id], id),
    next: uniqueTopicIds([branch[branchIndex + 1], nextSection?.id, ...(nextSection?.right.slice(0, 1) ?? [])], id),
    alternatives: uniqueTopicIds(
      [
        ...oppositeBranch.slice(0, 2),
        ...branch.filter((topicId) => topicId !== id).slice(Math.max(0, branchIndex - 1), branchIndex + 1),
      ],
      id,
    ),
  };
}

function mergeTopicLinks(id: string, kind: keyof TopicLinkHints, limit: number) {
  const automatic = getAutomaticTopicLinks(id)[kind] ?? [];
  const curated = curatedTopicLinks[id]?.[kind] ?? [];

  return uniqueTopicIds([...curated, ...automatic], id).slice(0, limit);
}

export function getCommonMistakes(id: string, limit = 2) {
  const topic = topicCatalog[id];

  if (!topic) {
    return [];
  }

  return uniqueText([...(commonMistakesByTopicId[id] ?? []), ...getFallbackCommonMistakes(topic)]).slice(0, limit);
}

export function getMiniLabs(id: string, limit = 2) {
  const topic = topicCatalog[id];

  if (!topic) {
    return [];
  }

  return uniqueText([...(miniLabsByTopicId[id] ?? []), ...getFallbackMiniLabs(topic), ...(topic.build ?? [])]).slice(0, limit);
}

export function getResourceCollections(id: string) {
  const topic = topicCatalog[id];

  if (!topic) {
    return {
      official: [] as ResourceLink[],
      friendly: [] as ResourceLink[],
      more: [] as ResourceLink[],
    };
  }

  const resources = uniqueResources(topic.resources);
  const excluded = new Set<string>();

  const official =
    resources.find((resource) => officialResourcePattern.test(resource.label) && !excluded.has(resource.url)) ??
    resources[0];

  if (official) {
    excluded.add(official.url);
  }

  const friendly =
    resources.find((resource) => friendlyResourcePattern.test(resource.label) && !excluded.has(resource.url)) ??
    resources.find((resource) => !excluded.has(resource.url));

  if (friendly) {
    excluded.add(friendly.url);
  }

  return {
    official: official ? [official] : [],
    friendly: friendly ? [friendly] : [],
    more: resources.filter((resource) => !excluded.has(resource.url)),
  };
}

export function getSuggestedTopicIds(id: string, limit = 2) {
  const section = sectionByTopicId.get(id);

  if (!section) {
    return [];
  }

  const suggestions: string[] = [];
  const sectionTopics = [...section.right, ...section.left];

  if (id === section.id) {
    suggestions.push(...sectionTopics.slice(0, limit));
  } else {
    const branch =
      section.right.includes(id) ? section.right : section.left.includes(id) ? section.left : sectionTopics;
    const branchIndex = branch.indexOf(id);

    if (branchIndex >= 0) {
      const nextInBranch = branch[branchIndex + 1];

      if (nextInBranch) {
        suggestions.push(nextInBranch);
      }
    }

    for (const topicId of sectionTopics) {
      if (topicId !== id && !suggestions.includes(topicId)) {
        suggestions.push(topicId);
      }

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  const nextSection = roadmapSections[(sectionIndexById.get(section.id) ?? -1) + 1];

  if (nextSection) {
    for (const topicId of [...nextSection.right, ...nextSection.left]) {
      if (topicId !== id && !suggestions.includes(topicId)) {
        suggestions.push(topicId);
      }

      if (suggestions.length >= limit) {
        break;
      }
    }
  }

  return suggestions.filter((topicId) => topicCatalog[topicId] && topicId !== id).slice(0, limit);
}

export function getPreparationTopicIds(id: string, limit = 2) {
  return mergeTopicLinks(id, 'before', limit);
}

export function getNextTopicIds(id: string, limit = 2) {
  return mergeTopicLinks(id, 'next', limit);
}

export function getAlternativeTopicIds(id: string, limit = 2) {
  return mergeTopicLinks(id, 'alternatives', limit);
}

export function getTopicStudyTips(id: string, limit = 3) {
  const topic = topicCatalog[id];

  if (!topic) {
    return [];
  }

  const beforeTopics = formatTopicList(getPreparationTopicIds(id, 2));
  const nextTopics = formatTopicList(getNextTopicIds(id, 2));
  const suggestedTopics = formatTopicList(getSuggestedTopicIds(id, 2));
  const alternativeTopics = formatTopicList(getAlternativeTopicIds(id, 2));

  const levelTip =
    topic.level === 'ابدأ' || topic.level === 'أساسي'
      ? `اجعل هدفك هنا أن تشرح ${topic.title} بلغة بسيطة ثم تطبقه في مثال صغير بدل حفظ المصطلحات فقط.`
      : topic.level === 'عملي'
        ? `لا تكتفِ بالفهم النظري؛ ابنِ تطبيقًا مصغرًا يوظف ${topic.title} في موقف قريب من الواقع.`
        : `في هذا المستوى ستستفيد أكثر إذا وثّقت قراراتك وحدودك أثناء التطبيق، لا إذا اكتفيت بالقراءة السريعة.`;

  return uniqueText([
    beforeTopics ? `مر سريعًا على ${beforeTopics} قبل التعمق هنا حتى يدخل الموضوع في سياقه الطبيعي.` : null,
    levelTip,
    nextTopics ? `بعد ثبات الفكرة، انتقل إلى ${nextTopics} حتى يتحول الفهم إلى تسلسل واضح لا معرفة متفرقة.` : null,
    suggestedTopics ? `إذا أردت تقوية هذا الباب أكثر فمرّ أيضًا على ${suggestedTopics}.` : null,
    alternativeTopics
      ? `إذا شعرت أن هذا الاتجاه لا يخدم هدفك الحالي، فقارن بينه وبين ${alternativeTopics} قبل أن تغيّر المسار بالكامل.`
      : null,
    topic.resources.length
      ? `اختر من المصادر أدناه مصدرًا أساسيًا واحدًا أولًا، ثم أكمله قبل التنقل بين شروحات كثيرة.`
      : null,
  ]).slice(0, limit);
}

export function getSearchKeywords(id: string, limit = 4) {
  const topic = topicCatalog[id];

  if (!topic) {
    return [];
  }

  return uniqueText([...(topic.searchKeywords ?? []), ...getFallbackSearchKeywords(topic)]).slice(0, limit);
}

export function getProjectIdeas(id: string, limit = 2) {
  const topic = topicCatalog[id];

  if (!topic) {
    return [];
  }

  return uniqueText([...(projectIdeasByTopicId[id] ?? []), ...getFallbackProjectIdeas(topic)]).slice(0, limit);
}
