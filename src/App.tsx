import {
  Background,
  BackgroundVariant,
  Handle,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { memo, startTransition, useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  getAlternativeTopicIds,
  getCommonMistakes,
  getMiniLabs,
  getNextTopicIds,
  getPreparationTopicIds,
  getProjectIdeas,
  getResourceCollections,
  getSearchKeywords,
  baseEdges,
  baseNodes,
  getSuggestedTopicIds,
  getTopicStudyTips,
  roadmapMeta,
  topicCatalog,
  type Journey,
  type RoadmapNodeData,
  type TopicLevel,
} from './data/roadmap';
import { buildRoadmapFilterState, getQuickSearchResults, levelOptions, trackOptions } from './features/roadmap/filtering';
import { buildRoadmapShareUrl, buildRoadmapUrlSearch, parseRoadmapUrlState } from './features/roadmap/url-state';

type RoadmapFlowNode = Node<RoadmapNodeData, 'roadmapNode'>;
type ThemeMode = 'light' | 'dark';
type RoadmapTopic = (typeof topicCatalog)[string];

const flowNodes = baseNodes as RoadmapFlowNode[];
const nodeById = new Map(flowNodes.map((node) => [node.id, node]));
const COMPACT_VIEWPORT_QUERY = '(max-width: 760px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DEFAULT_FIT_PADDING = 0.2;
const COMPACT_FIT_PADDING = 0.14;

const journeyStroke: Record<Journey, string> = {
  enter: '#16a34a',
  optional: '#ca8a04',
  mastery: '#dc2626',
};

const journeyLabel: Record<Journey, string> = {
  enter: 'هذا أساسي لتبدأ بشكل صحيح',
  optional: 'هذا يفيدك ويقوي مستواك',
  mastery: 'هذا للتعمق والاحتراف',
};

const journeyShortLabel: Record<Journey, string> = {
  enter: 'أساسي',
  optional: 'مفيد',
  mastery: 'احتراف',
};

const journeyGuidance: Record<Journey, string> = {
  enter: 'ابدأ به على مهل، لأنه يبني الأساس الذي تعتمد عليه الخطوات التالية.',
  optional: 'يفيدك عندما تريد تقوية التطبيق العملي أو سد فجوة واضحة في فهمك.',
  mastery: 'ادخله بعد ثبات الأساسيات، لأنه يوسّع العمق ويقربك من الاحتراف.',
};

const baseStyledEdges = baseEdges.map((edge) => ({
  ...edge,
  animated: false,
  style: {
    ...edge.style,
    stroke: 'var(--edge-muted)',
    opacity: 0.84,
    strokeWidth: 1.35,
  },
}));

function safeMatchMedia(query: string) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(query).matches;
}

function safeLocalStorageGetItem(key: string) {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeLocalStorageSetItem(key: string, value: string) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures in restricted browsing modes.
  }
}

function withMotionPreference(prefersReducedMotion: boolean, duration: number) {
  return prefersReducedMotion ? 0 : duration;
}

function mapTopicIdsToTopics(ids: string[]): RoadmapTopic[] {
  return ids
    .map((topicId) => topicCatalog[topicId])
    .filter((topic): topic is RoadmapTopic => Boolean(topic));
}

function getTopicContextLine(topic: RoadmapTopic, journey: Journey) {
  return `ينتمي هذا الموضوع إلى ${topic.category}، ومستواه ${topic.level}. ${journeyGuidance[journey]}`;
}

function getInitialTheme(): ThemeMode {
  const savedTheme = safeLocalStorageGetItem('roadmap-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return safeMatchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}

function getInitialLegendVisibility() {
  return !safeMatchMedia(COMPACT_VIEWPORT_QUERY);
}

function HiddenHandles() {
  return (
    <>
      <Handle id="source-bottom" type="source" position={Position.Bottom} className="hidden-handle" />
      <Handle id="source-left" type="source" position={Position.Left} className="hidden-handle" />
      <Handle id="source-right" type="source" position={Position.Right} className="hidden-handle" />
      <Handle id="target-top" type="target" position={Position.Top} className="hidden-handle" />
      <Handle id="target-left" type="target" position={Position.Left} className="hidden-handle" />
      <Handle id="target-right" type="target" position={Position.Right} className="hidden-handle" />
    </>
  );
}

function JourneyIcon({ journey }: { journey: Journey }) {
  if (journey === 'enter') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M5.75 8H10.25" />
        <path d="M8.5 5.75 10.75 8 8.5 10.25" />
      </svg>
    );
  }

  if (journey === 'optional') {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4.75V11.25" />
        <path d="M4.75 8H11.25" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.2 9.76 5.39 13.35 5.94 10.78 8.6 11.32 12.28 8 10.72 4.68 12.28 5.22 8.6 2.65 5.94 6.24 5.39 8 2.2Z" />
    </svg>
  );
}

function JourneyBadge({
  journey,
  expanded = false,
}: {
  journey: Journey;
  expanded?: boolean;
}) {
  return (
    <span
      className={['journey-badge', expanded ? 'is-expanded' : 'is-compact'].join(' ')}
      data-journey={journey}
      title={journeyLabel[journey]}
    >
      <span className="journey-badge-icon">
        <JourneyIcon journey={journey} />
      </span>
      {expanded ? <span className="journey-badge-text">{journeyShortLabel[journey]}</span> : null}
    </span>
  );
}

function TopbarIconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      {children}
    </svg>
  );
}

function ZoomInIcon() {
  return (
    <TopbarIconFrame>
      <circle cx="6.75" cy="6.75" r="4.5" fill="none" />
      <path d="M6.75 4.8V8.7" />
      <path d="M4.8 6.75H8.7" />
      <path d="M10.4 10.4 13.2 13.2" />
    </TopbarIconFrame>
  );
}

function ZoomOutIcon() {
  return (
    <TopbarIconFrame>
      <circle cx="6.75" cy="6.75" r="4.5" fill="none" />
      <path d="M4.8 6.75H8.7" />
      <path d="M10.4 10.4 13.2 13.2" />
    </TopbarIconFrame>
  );
}

function ResetIcon() {
  return (
    <TopbarIconFrame>
      <path d="M8 3.1A4.9 4.9 0 1 1 3.6 5.9" fill="none" />
      <path d="M3 2.8V6.2H6.3" fill="none" />
    </TopbarIconFrame>
  );
}

function LegendIcon() {
  return (
    <TopbarIconFrame>
      <path d="M3 4h10" />
      <path d="M3 8h10" />
      <path d="M3 12h10" />
      <circle cx="4.5" cy="4" r="0.8" />
      <circle cx="7.5" cy="8" r="0.8" />
      <circle cx="10.5" cy="12" r="0.8" />
    </TopbarIconFrame>
  );
}

function ThemeIcon({ theme }: { theme: ThemeMode }) {
  return theme === 'dark' ? (
    <TopbarIconFrame>
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.9V3.4" />
      <path d="M8 12.6V14.1" />
      <path d="M1.9 8H3.4" />
      <path d="M12.6 8H14.1" />
      <path d="M3.55 3.55 4.6 4.6" />
      <path d="M11.4 11.4 12.45 12.45" />
      <path d="M11.4 4.6 12.45 3.55" />
      <path d="M3.55 12.45 4.6 11.4" />
    </TopbarIconFrame>
  ) : (
    <TopbarIconFrame>
      <path d="M10.9 2.4A5.55 5.55 0 1 0 13.6 10.8 5.8 5.8 0 0 1 10.9 2.4Z" fill="none" />
    </TopbarIconFrame>
  );
}

function ShareIcon() {
  return (
    <TopbarIconFrame>
      <circle cx="4" cy="8" r="1.3" />
      <circle cx="12" cy="4" r="1.3" />
      <circle cx="12" cy="12" r="1.3" />
      <path d="M5.15 7.3 10.85 4.7" fill="none" />
      <path d="M5.15 8.7 10.85 11.3" fill="none" />
    </TopbarIconFrame>
  );
}

function ClearIcon() {
  return (
    <TopbarIconFrame>
      <path d="M4 4 12 12" />
      <path d="M12 4 4 12" />
    </TopbarIconFrame>
  );
}

function MenuIcon() {
  return (
    <TopbarIconFrame>
      <circle cx="4" cy="8" r="1.1" />
      <circle cx="8" cy="8" r="1.1" />
      <circle cx="12" cy="8" r="1.1" />
    </TopbarIconFrame>
  );
}

const RoadmapNode = memo(function RoadmapNode({ data }: NodeProps<RoadmapFlowNode>) {
  return (
    <div
      className={[
        'roadmap-node',
        data.variant === 'section' ? 'roadmap-node-section' : 'roadmap-node-topic',
        data.selected ? 'is-selected' : '',
        data.matched ? 'is-matched' : '',
        data.dimmed ? 'is-dimmed' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      data-journey={data.journey}
    >
      <HiddenHandles />
      <div className="roadmap-node-head">
        <strong className="roadmap-node-title">{data.title}</strong>
        <div className="roadmap-node-aside">
          <JourneyBadge journey={data.journey} />
          {data.variant === 'section' ? <span className="roadmap-node-count">{data.childCount}</span> : null}
        </div>
      </div>
      <span className="roadmap-node-meta">
        {data.category} / {data.level}
      </span>
    </div>
  );
});

RoadmapNode.displayName = 'RoadmapNode';

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

function getInitialRoadmapUrlState() {
  if (typeof window === 'undefined') {
    return {
      topicId: null,
      searchQuery: '',
      activeTrackId: '',
      activeLevel: '' as TopicLevel | '',
    };
  }

  return parseRoadmapUrlState(window.location.search);
}

export function RoadmapWorkspace() {
  const initialUrlState = getInitialRoadmapUrlState();
  const flow = useReactFlow<RoadmapFlowNode>();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const actionsMenuRef = useRef<HTMLDivElement | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(() => initialUrlState.topicId);
  const [isDrawerOpen, setDrawerOpen] = useState(() => Boolean(initialUrlState.topicId));
  const [isActionsMenuOpen, setActionsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [showLegend, setShowLegend] = useState(getInitialLegendVisibility);
  const [isCompactViewport, setCompactViewport] = useState(() => safeMatchMedia(COMPACT_VIEWPORT_QUERY));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => safeMatchMedia(REDUCED_MOTION_QUERY));
  const [searchQuery, setSearchQuery] = useState(() => initialUrlState.searchQuery);
  const [activeTrackId, setActiveTrackId] = useState(() => initialUrlState.activeTrackId);
  const [activeLevel, setActiveLevel] = useState<TopicLevel | ''>(() => initialUrlState.activeLevel);
  const [shareMessage, setShareMessage] = useState('');
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safeLocalStorageSetItem('roadmap-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const compactQuery = window.matchMedia(COMPACT_VIEWPORT_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const syncCompactViewport = () => setCompactViewport(compactQuery.matches);
    const syncReducedMotion = () => setPrefersReducedMotion(reducedMotionQuery.matches);

    syncCompactViewport();
    syncReducedMotion();
    compactQuery.addEventListener('change', syncCompactViewport);
    reducedMotionQuery.addEventListener('change', syncReducedMotion);

    return () => {
      compactQuery.removeEventListener('change', syncCompactViewport);
      reducedMotionQuery.removeEventListener('change', syncReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        setActionsMenuOpen(false);
        return;
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
        return;
      }

      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (!isTypingTarget && event.key === '/') {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isActionsMenuOpen || typeof window === 'undefined') {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node) || !actionsMenuRef.current?.contains(event.target)) {
        setActionsMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isActionsMenuOpen]);

  useEffect(() => {
    if (!shareMessage || typeof window === 'undefined') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShareMessage('');
    }, 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shareMessage]);

  const selectedTopic = useMemo(() => {
    return selectedId ? topicCatalog[selectedId] ?? null : null;
  }, [selectedId]);

  const selectedNode = useMemo(() => {
    return selectedId ? nodeById.get(selectedId) ?? null : null;
  }, [selectedId]);

  const selectedJourney = selectedNode?.data.journey ?? 'enter';
  const topicContext = selectedTopic ? getTopicContextLine(selectedTopic, selectedJourney) : '';
  const relatedContent = useMemo(() => {
    if (!selectedId) {
      return {
        suggestedTopics: [] as RoadmapTopic[],
        preparationTopics: [] as RoadmapTopic[],
        nextTopics: [] as RoadmapTopic[],
        alternativeTopics: [] as RoadmapTopic[],
        projectIdeas: [] as string[],
        miniLabs: [] as string[],
        commonMistakes: [] as string[],
        searchKeywords: [] as string[],
        studyTips: [] as string[],
        resourceCollections: {
          official: [] as Array<{ label: string; url: string }>,
          friendly: [] as Array<{ label: string; url: string }>,
          more: [] as Array<{ label: string; url: string }>,
        },
      };
    }

    return {
      suggestedTopics: mapTopicIdsToTopics(getSuggestedTopicIds(selectedId)),
      preparationTopics: mapTopicIdsToTopics(getPreparationTopicIds(selectedId)),
      nextTopics: mapTopicIdsToTopics(getNextTopicIds(selectedId)),
      alternativeTopics: mapTopicIdsToTopics(getAlternativeTopicIds(selectedId)),
      projectIdeas: getProjectIdeas(selectedId),
      miniLabs: getMiniLabs(selectedId),
      commonMistakes: getCommonMistakes(selectedId),
      searchKeywords: getSearchKeywords(selectedId),
      studyTips: getTopicStudyTips(selectedId),
      resourceCollections: getResourceCollections(selectedId),
    };
  }, [selectedId]);

  const filterState = useMemo(() => {
    return buildRoadmapFilterState({
      searchQuery: deferredSearchQuery,
      activeTrackId,
      activeLevel,
    });
  }, [activeLevel, activeTrackId, deferredSearchQuery]);

  const quickSearchResults = useMemo(
    () => getQuickSearchResults(filterState, isCompactViewport ? 3 : 4),
    [filterState, isCompactViewport],
  );

  const nodes = useMemo(() => {
    if (!selectedId && !filterState.hasActiveFilters) {
      return flowNodes;
    }

    return flowNodes.map((node) => {
      const isSelected = node.id === selectedId;
      const isMatched = filterState.hasActiveFilters && filterState.directlyMatchedIds.has(node.id);
      const isDimmed = filterState.hasActiveFilters && !filterState.contextualIds.has(node.id) && !isSelected;

      return {
        ...node,
        data: {
          ...node.data,
          selected: isSelected || undefined,
          matched: isMatched || undefined,
          dimmed: isDimmed || undefined,
        },
      };
    });
  }, [filterState, selectedId]);

  const edges = useMemo(() => {
    if (!selectedId && !filterState.hasActiveFilters) {
      return baseStyledEdges;
    }

    const highlightStroke = selectedNode ? journeyStroke[selectedNode.data.journey] : 'var(--edge-accent)';

    return baseStyledEdges.map((edge) => {
      const highlighted = edge.source === selectedId || edge.target === selectedId;

      if (highlighted) {
        return {
          ...edge,
          animated: true,
          style: {
            ...edge.style,
            stroke: highlightStroke,
            opacity: 1,
            strokeWidth: 2.3,
          },
        };
      }

      if (!filterState.hasActiveFilters) {
        return edge;
      }

      const endpointsVisible = filterState.contextualIds.has(edge.source) && filterState.contextualIds.has(edge.target);

      return {
        ...edge,
        animated: false,
        style: {
          ...edge.style,
          opacity: endpointsVisible ? 0.76 : 0.14,
          strokeWidth: endpointsVisible ? 1.55 : 1.1,
        },
      };
    });
  }, [filterState, selectedId, selectedNode]);

  const fitPadding = isCompactViewport ? COMPACT_FIT_PADDING : DEFAULT_FIT_PADDING;
  const animationDuration = withMotionPreference(prefersReducedMotion, isCompactViewport ? 240 : 360);
  const zoomDuration = withMotionPreference(prefersReducedMotion, 220);

  function fitCanvas(instance = flow) {
    instance.fitView({ duration: animationDuration, padding: fitPadding });
  }

  function centerOnTopic(topicId: string) {
    const node = flow.getNode(topicId);

    if (!node) {
      return;
    }

    const absolutePosition = node.position;
    const width = node.measured?.width ?? (node.data.variant === 'section' ? 326 : 272);
    const height = node.measured?.height ?? 116;
    const nextZoom = isCompactViewport ? (node.data.variant === 'section' ? 0.58 : 0.76) : node.data.variant === 'section' ? 0.72 : 0.94;

    flow.setCenter(absolutePosition.x + width / 2, absolutePosition.y + height / 2, {
      duration: animationDuration,
      zoom: nextZoom,
    });
  }

  useEffect(() => {
    if (!selectedId || !isDrawerOpen || typeof window === 'undefined') {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      centerOnTopic(selectedId);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [animationDuration, isCompactViewport, isDrawerOpen, selectedId]);

  function focusTopic(topicId: string) {
    if (!nodeById.has(topicId) || !topicCatalog[topicId]) {
      return;
    }

    startTransition(() => {
      setSelectedId(topicId);
      setDrawerOpen(true);
    });
    setActionsMenuOpen(false);
  }

  function resetViewport() {
    fitCanvas();
    setActionsMenuOpen(false);
  }

  function zoomIn() {
    flow.zoomIn({ duration: zoomDuration });
    setActionsMenuOpen(false);
  }

  function zoomOut() {
    flow.zoomOut({ duration: zoomDuration });
    setActionsMenuOpen(false);
  }

  function closeDrawer() {
    setDrawerOpen(false);
    setActionsMenuOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    setActionsMenuOpen(false);
  }

  function toggleLegend() {
    setShowLegend((current) => !current);
    setActionsMenuOpen(false);
  }

  function toggleActionsMenu() {
    setActionsMenuOpen((current) => !current);
  }

  function clearFilters() {
    setSearchQuery('');
    setActiveTrackId('');
    setActiveLevel('');
    setActionsMenuOpen(false);
  }

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') {
      return '';
    }

    return buildRoadmapShareUrl(
      {
        topicId: isDrawerOpen ? selectedId : null,
        searchQuery,
        activeTrackId,
        activeLevel,
      },
      window.location.href,
    );
  }, [activeLevel, activeTrackId, isDrawerOpen, searchQuery, selectedId]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const nextSearch = buildRoadmapUrlSearch({
      topicId: isDrawerOpen ? selectedId : null,
      searchQuery,
      activeTrackId,
      activeLevel,
    });

    const nextUrl = `${window.location.pathname}${nextSearch}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, '', nextUrl);
    }
  }, [activeLevel, activeTrackId, isDrawerOpen, searchQuery, selectedId]);

  async function copyShareLink() {
    if (!shareUrl || typeof window === 'undefined') {
      return;
    }

    try {
      if (window.navigator.clipboard?.writeText) {
        await window.navigator.clipboard.writeText(shareUrl);
        setShareMessage('تم نسخ رابط الحالة الحالية.');
        setActionsMenuOpen(false);
        return;
      }
    } catch {
      // Fall through to the fallback message below.
    }

    setShareMessage('الرابط جاهز في شريط العنوان الحالي ويمكن نسخه يدويًا.');
    setActionsMenuOpen(false);
  }

  const {
    suggestedTopics,
    preparationTopics,
    nextTopics,
    alternativeTopics,
    projectIdeas,
    miniLabs,
    commonMistakes,
    searchKeywords,
    studyTips,
    resourceCollections,
  } = relatedContent;
  const filterSummary = shareMessage || (filterState.hasActiveFilters
    ? filterState.resultCount
      ? `تُعرض الآن ${filterState.resultCount} نتيجة مطابقة داخل الخريطة.`
      : 'لا توجد نتيجة مطابقة الآن. جرّب كلمة أدق أو وسّع الفلاتر.'
    : 'ابحث بالعنوان أو الكلمات المفتاحية، أو صفِّ الخريطة حسب المسار والمستوى.');

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-main">
          <div className="topbar-brand">
            <strong>{roadmapMeta.title}</strong>
            <span>
              {roadmapMeta.totalTracks} مسار / {roadmapMeta.totalTopics} موضوع / تحديث {roadmapMeta.updatedAt}
            </span>
          </div>

          <div className="topbar-actions" ref={actionsMenuRef}>
            <button
              type="button"
              className="topbar-button is-icon-button"
              onClick={zoomIn}
              aria-label="تكبير"
              title="تكبير"
            >
              <ZoomInIcon />
            </button>
            <button
              type="button"
              className="topbar-button is-icon-button"
              onClick={zoomOut}
              aria-label="تصغير"
              title="تصغير"
            >
              <ZoomOutIcon />
            </button>
            <button
              type="button"
              className={['topbar-button', 'is-icon-button', showLegend ? 'is-active' : ''].join(' ')}
              onClick={toggleLegend}
              aria-label={showLegend ? 'إخفاء الدليل' : 'إظهار الدليل'}
              title={showLegend ? 'إخفاء الدليل' : 'إظهار الدليل'}
            >
              <LegendIcon />
            </button>
            <button
              type="button"
              className={['topbar-button', 'is-icon-button', isActionsMenuOpen ? 'is-active' : ''].join(' ')}
              onClick={toggleActionsMenu}
              aria-label="المزيد من الأدوات"
              aria-haspopup="menu"
              aria-expanded={isActionsMenuOpen}
              title="المزيد من الأدوات"
            >
              <MenuIcon />
            </button>

            {isActionsMenuOpen ? (
              <div className="topbar-menu" role="menu" aria-label="أدوات إضافية">
                <button type="button" className="topbar-menu-item" onClick={resetViewport} role="menuitem">
                  <ResetIcon />
                  <span>ضبط العرض</span>
                </button>
                <button type="button" className="topbar-menu-item" onClick={copyShareLink} role="menuitem">
                  <ShareIcon />
                  <span>نسخ الرابط</span>
                </button>
                <button
                  type="button"
                  className="topbar-menu-item"
                  onClick={clearFilters}
                  role="menuitem"
                  disabled={!filterState.hasActiveFilters}
                >
                  <ClearIcon />
                  <span>مسح الفلاتر</span>
                </button>
                <button type="button" className="topbar-menu-item" onClick={toggleTheme} role="menuitem">
                  <ThemeIcon theme={theme} />
                  <span>{theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <div className="topbar-filters" aria-label="أدوات البحث والفلترة">
          <input
            ref={searchInputRef}
            type="search"
            className="topbar-input topbar-search-input"
            placeholder="ابحث بعنوان الموضوع أو الكلمات المفتاحية أو المصدر"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && quickSearchResults[0]) {
                event.preventDefault();
                focusTopic(quickSearchResults[0].id);
              }
            }}
            aria-label="ابحث داخل الخريطة"
            spellCheck={false}
            dir="rtl"
          />

          <select
            className="topbar-select"
            value={activeTrackId}
            onChange={(event) => setActiveTrackId(event.target.value)}
            aria-label="فلترة حسب المسار"
          >
            <option value="">كل المسارات</option>
            {trackOptions.map((track) => (
              <option key={track.id} value={track.id}>
                {track.title}
              </option>
            ))}
          </select>

          <select
            className="topbar-select"
            value={activeLevel}
            onChange={(event) => setActiveLevel(event.target.value as TopicLevel | '')}
            aria-label="فلترة حسب المستوى"
          >
            <option value="">كل المستويات</option>
            {levelOptions.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>

          <span className="topbar-status">{filterSummary}</span>

          {quickSearchResults.length ? (
            <div className="topbar-results" aria-label="نتائج بحث سريعة">
              {quickSearchResults.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  className="topbar-result-card"
                  onClick={() => focusTopic(result.id)}
                  aria-label={`افتح موضوع ${result.title}`}
                >
                  <strong>{result.title}</strong>
                  <span>
                    {result.trackTitle} / {result.category} / {result.level}
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      <main className="map-stage">
        <div className="canvas-frame">
          <ReactFlow<RoadmapFlowNode>
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodeClick={(_, node) => focusTopic(node.id)}
            onPaneClick={closeDrawer}
            onInit={fitCanvas}
            panOnScroll
            panOnDrag
            zoomOnScroll
            zoomOnPinch
            zoomOnDoubleClick={false}
            nodesDraggable={false}
            nodesConnectable={false}
            nodesFocusable={false}
            edgesFocusable={false}
            elementsSelectable={false}
            onlyRenderVisibleElements
            fitView
            fitViewOptions={{ padding: fitPadding, includeHiddenNodes: false }}
            minZoom={0.32}
            maxZoom={1.6}
          >
            <Background gap={36} size={0.9} variant={BackgroundVariant.Dots} color="var(--grid-line)" />
          </ReactFlow>

          {showLegend ? (
            <div className="flow-legend" aria-label="دليل ألوان التقدم">
              <div className="flow-legend-item">
                <JourneyBadge journey="enter" />
                <span>لبداية قوية وواضحة</span>
              </div>
              <div className="flow-legend-item">
                <JourneyBadge journey="optional" />
                <span>لتوسيع الفهم وتقوية المستوى</span>
              </div>
              <div className="flow-legend-item">
                <JourneyBadge journey="mastery" />
                <span>للتعمق وبناء احتراف حقيقي</span>
              </div>
            </div>
          ) : null}
        </div>

        {isDrawerOpen && selectedTopic ? (
          <>
            <button type="button" className="drawer-backdrop" aria-label="إغلاق التفاصيل" onClick={closeDrawer} />

            <aside className="details-drawer" aria-label="تفاصيل الموضوع المحدد">
              <div className="drawer-header">
                <div className="drawer-title-wrap">
                  <h2>{selectedTopic.title}</h2>
                  <div className="drawer-meta">
                    <JourneyBadge journey={selectedJourney} expanded />
                    <span>{selectedTopic.category}</span>
                    <span className="drawer-meta-separator" />
                    <span>{selectedTopic.level}</span>
                  </div>
                </div>

                <button type="button" className="drawer-close" onClick={closeDrawer} aria-label="إغلاق التفاصيل">
                  ×
                </button>
              </div>

              <p className="details-summary">{selectedTopic.summary}</p>
              <p className="details-context">{topicContext}</p>

              {studyTips.length ? (
                <section className="details-section">
                  <h3>كيف تدرسه بذكاء</h3>
                  <ul>
                    {studyTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {commonMistakes.length ? (
                <section className="details-section">
                  <h3>أخطاء شائعة بشكل مبسط</h3>
                  <ul>
                    {commonMistakes.map((mistake) => (
                      <li key={mistake}>{mistake}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section className="details-section">
                <h3>ما الذي ستفهمه هنا</h3>
                <ul>
                  {selectedTopic.learn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="details-section">
                <h3>كيف تطبّق عمليًا</h3>
                <ul>
                  {selectedTopic.build.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {selectedTopic.note2026 ? (
                <section className="details-section">
                  <h3>ملاحظة مهمّة في 2026</h3>
                  <p className="details-note-inline">{selectedTopic.note2026}</p>
                </section>
              ) : null}

              {miniLabs.length ? (
                <section className="details-section">
                  <h3>تمرين صغير أو mini-lab</h3>
                  <ul>
                    {miniLabs.map((lab) => (
                      <li key={lab}>{lab}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {preparationTopics.length ? (
                <section className="details-section">
                  <h3>يفضل أن تراجع أولًا</h3>
                  <div className="topic-link-list">
                    {preparationTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
                        aria-label={`افتح موضوع ${topic.title}`}
                      >
                        <strong>{topic.title}</strong>
                        <span>
                          {topic.category} / {topic.level}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {nextTopics.length ? (
                <section className="details-section">
                  <h3>ماذا بعد هذا الموضوع</h3>
                  <div className="topic-link-list">
                    {nextTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
                        aria-label={`افتح موضوع ${topic.title}`}
                      >
                        <strong>{topic.title}</strong>
                        <span>
                          {topic.category} / {topic.level}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {alternativeTopics.length ? (
                <section className="details-section">
                  <h3>بدائل أو مسارات قريبة</h3>
                  <div className="topic-link-list">
                    {alternativeTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
                        aria-label={`افتح موضوع ${topic.title}`}
                      >
                        <strong>{topic.title}</strong>
                        <span>
                          {topic.category} / {topic.level}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {suggestedTopics.length ? (
                <section className="details-section">
                  <h3>اقتراحات تدعم هذا المسار</h3>
                  <div className="suggestion-list">
                    {suggestedTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
                        aria-label={`افتح موضوع ${topic.title}`}
                      >
                        <strong>{topic.title}</strong>
                        <span>
                          {topic.category} / {topic.level}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {projectIdeas.length ? (
                <section className="details-section">
                  <h3>أفكار مشاريع تطبيقية</h3>
                  <ul>
                    {projectIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {searchKeywords.length ? (
                <section className="details-section">
                  <h3>عبارات بحث مفيدة</h3>
                  <div className="keyword-list">
                    {searchKeywords.map((keyword) => (
                      <span key={keyword} className="keyword-chip">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="details-section">
                <h3>مصادر موثوقة ومقترحة</h3>

                {resourceCollections.official.length ? (
                  <div className="resource-group">
                    <h4>مصدر رسمي موثوق</h4>
                    <div className="resource-list">
                      {resourceCollections.official.map((resource) => (
                        <a
                          key={resource.url}
                          className="resource-link"
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`افتح المصدر ${resource.label}`}
                        >
                          <strong>{resource.label}</strong>
                          <span>{resource.url}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                {resourceCollections.friendly.length ? (
                  <div className="resource-group">
                    <h4>مصدر مبسط للبدء</h4>
                    <div className="resource-list">
                      {resourceCollections.friendly.map((resource) => (
                        <a
                          key={resource.url}
                          className="resource-link"
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`افتح المصدر ${resource.label}`}
                        >
                          <strong>{resource.label}</strong>
                          <span>{resource.url}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}

                {resourceCollections.more.length ? (
                  <div className="resource-group">
                    <h4>مصادر إضافية للتوسع</h4>
                    <div className="resource-list">
                      {resourceCollections.more.map((resource) => (
                        <a
                          key={resource.url}
                          className="resource-link"
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`افتح المصدر ${resource.label}`}
                        >
                          <strong>{resource.label}</strong>
                          <span>{resource.url}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            </aside>
          </>
        ) : null}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <RoadmapWorkspace />
    </ReactFlowProvider>
  );
}
