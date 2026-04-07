import {
  Background,
  BackgroundVariant,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  useReactFlow,
  type Node,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { memo, startTransition, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import {
  getAlternativeTopicIds,
  getCommonMistakes,
  getMiniLabs,
  getNextTopicIds,
  getPreparationTopicIds,
  getProjectIdeas,
  getResourceCollections,
  getSuggestedTopicIds,
  getTopicStudyTips,
  baseEdges,
  baseNodes,
  roadmapMeta,
  roadmapSections,
  topicCatalog,
  type Journey,
  type RoadmapNodeData,
  type TopicLevel,
  tonePalette,
} from '../../data/roadmap';
import { buildRoadmapFilterState, levelOptions, trackIdByTopicId, trackOptions } from './filtering';
import { buildRoadmapSeoState, syncRoadmapSeoDocument } from './seo';
import { buildRoadmapShareUrl, buildRoadmapUrlSearch, type RoadmapUrlState } from './url-state';

type RoadmapFlowNode = Node<RoadmapNodeData, 'roadmapNode'>;
type ThemeMode = 'light' | 'dark';
type RoadmapTopic = (typeof topicCatalog)[string];
type CollectionMode = 'all' | 'favorites' | 'recent';

type MapWorkspaceProps = {
  initialUrlState: RoadmapUrlState;
  onBackHome: () => void;
};

const flowNodes = baseNodes as RoadmapFlowNode[];
const nodeById = new Map(flowNodes.map((node) => [node.id, node]));
const COMPACT_VIEWPORT_QUERY = '(max-width: 920px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DEFAULT_FIT_PADDING = 0.2;
const COMPACT_FIT_PADDING = 0.13;

const journeyStroke: Record<Journey, string> = {
  enter: '#16a34a',
  optional: '#ca8a04',
  mastery: '#dc2626',
};

const journeyLabel: Record<Journey, string> = {
  enter: 'أساسي',
  optional: 'يعزز المستوى',
  mastery: 'للتعمق والاحتراف',
};

const baseStyledEdges = baseEdges.map((edge) => ({
  ...edge,
  animated: false,
  style: {
    ...edge.style,
    stroke: 'var(--edge-muted)',
    opacity: 0.82,
    strokeWidth: 1.3,
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
    // Ignore storage failures.
  }
}

function readStoredIds(key: string) {
  const value = safeLocalStorageGetItem(key);

  if (!value) {
    return [] as string[];
  }

  try {
    const parsed = JSON.parse(value);

    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string' && Boolean(topicCatalog[item]))
      : [];
  } catch {
    return [];
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
  const label =
    journey === 'enter'
      ? 'هذا مدخل أساسي يبني ما بعده.'
      : journey === 'optional'
        ? 'هذا باب يقوي مستواك ويضيف طبقة عملية مهمة.'
        : 'هذا باب تعمق يتطلب أساسًا واضحًا قبله.';

  return `ينتمي هذا الموضوع إلى ${topic.category}، ومستواه ${topic.level}. ${label}`;
}

function getInitialTheme(): ThemeMode {
  const savedTheme = safeLocalStorageGetItem('roadmap-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return safeMatchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
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

function JourneyBadge({ journey }: { journey: Journey }) {
  return (
    <span className="journey-badge is-expanded" data-journey={journey} title={journeyLabel[journey]}>
      <span className="journey-badge-text">{journeyLabel[journey]}</span>
    </span>
  );
}

function TopbarButton({
  onClick,
  children,
  active = false,
  disabled = false,
}: {
  onClick?: () => void;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className={['topbar-button', active ? 'is-active' : ''].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
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

export function MapWorkspace({ initialUrlState, onBackHome }: MapWorkspaceProps) {
  const flow = useReactFlow<RoadmapFlowNode>();
  const [selectedId, setSelectedId] = useState<string | null>(initialUrlState.topicId);
  const [isDrawerOpen, setDrawerOpen] = useState(() => Boolean(initialUrlState.topicId));
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [showOverview, setShowOverview] = useState(false);
  const [showMobileControls, setShowMobileControls] = useState(false);
  const [isCompactViewport, setCompactViewport] = useState(() => safeMatchMedia(COMPACT_VIEWPORT_QUERY));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => safeMatchMedia(REDUCED_MOTION_QUERY));
  const [activeTrackId, setActiveTrackId] = useState(() => initialUrlState.activeTrackId);
  const [activeLevel, setActiveLevel] = useState<TopicLevel | ''>(() => initialUrlState.activeLevel);
  const [beginnerMode, setBeginnerMode] = useState(() => initialUrlState.beginnerMode);
  const [collectionMode, setCollectionMode] = useState<CollectionMode>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => readStoredIds('roadmap-favorites'));
  const [recentIds, setRecentIds] = useState<string[]>(() => readStoredIds('roadmap-recent'));
  const [liveMessage, setLiveMessage] = useState('');
  const liveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    safeLocalStorageSetItem('roadmap-theme', theme);
  }, [theme]);

  useEffect(() => {
    safeLocalStorageSetItem('roadmap-favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    safeLocalStorageSetItem('roadmap-recent', JSON.stringify(recentIds));
  }, [recentIds]);

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
    if (!selectedId) {
      return;
    }

    setRecentIds((current) => [selectedId, ...current.filter((item) => item !== selectedId)].slice(0, 8));
  }, [selectedId]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowOverview(false);
        setShowMobileControls(false);
        setDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!liveMessage || typeof window === 'undefined') {
      return;
    }

    if (liveTimeoutRef.current) {
      window.clearTimeout(liveTimeoutRef.current);
    }

    liveTimeoutRef.current = window.setTimeout(() => {
      setLiveMessage('');
      liveTimeoutRef.current = null;
    }, 1800);

    return () => {
      if (liveTimeoutRef.current) {
        window.clearTimeout(liveTimeoutRef.current);
        liveTimeoutRef.current = null;
      }
    };
  }, [liveMessage]);

  useEffect(() => {
    if (!isCompactViewport) {
      setShowMobileControls(false);
    }
  }, [isCompactViewport]);

  const selectedTopic = useMemo(() => (selectedId ? topicCatalog[selectedId] ?? null : null), [selectedId]);
  const selectedNode = useMemo(() => (selectedId ? nodeById.get(selectedId) ?? null : null), [selectedId]);
  const selectedJourney = selectedNode?.data.journey ?? 'enter';

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
      studyTips: getTopicStudyTips(selectedId),
      resourceCollections: getResourceCollections(selectedId),
    };
  }, [selectedId]);

  const filterState = useMemo(() => buildRoadmapFilterState({
    activeTrackId,
    activeLevel,
    beginnerMode,
  }), [activeLevel, activeTrackId, beginnerMode]);

  const collectionTopicIds = useMemo(() => {
    if (collectionMode === 'favorites') {
      return favoriteIds.filter((topicId) => topicCatalog[topicId]);
    }

    if (collectionMode === 'recent') {
      return recentIds.filter((topicId) => topicCatalog[topicId]);
    }

    return [] as string[];
  }, [collectionMode, favoriteIds, recentIds]);

  const effectiveMatchedTopicIds = useMemo(() => {
    if (!filterState.hasActiveFilters && collectionMode === 'all') {
      return [] as string[];
    }

    if (filterState.hasActiveFilters && collectionMode === 'all') {
      return [...filterState.directlyMatchedIds];
    }

    if (!filterState.hasActiveFilters && collectionMode !== 'all') {
      return collectionTopicIds;
    }

    const collectionIdSet = new Set(collectionTopicIds);
    return [...filterState.directlyMatchedIds].filter((topicId) => collectionIdSet.has(topicId));
  }, [collectionMode, collectionTopicIds, filterState]);

  const hasActiveFilters = filterState.hasActiveFilters || collectionMode !== 'all';
  const contextualIds = useMemo(() => {
    if (!hasActiveFilters) {
      return new Set<string>();
    }

    const next = new Set<string>();

    for (const topicId of effectiveMatchedTopicIds) {
      next.add(topicId);
      next.add(trackIdByTopicId.get(topicId) ?? topicId);
    }

    if (activeTrackId) {
      next.add(activeTrackId);
    }

    return next;
  }, [activeTrackId, effectiveMatchedTopicIds, hasActiveFilters]);

  const nodes = useMemo(() => {
    if (!selectedId && !hasActiveFilters) {
      return flowNodes;
    }

    const matchedSet = new Set(effectiveMatchedTopicIds);

    return flowNodes.map((node) => {
      const isSelected = node.id === selectedId;
      const isMatched = hasActiveFilters && matchedSet.has(node.id);
      const isDimmed = hasActiveFilters && !contextualIds.has(node.id) && !isSelected;

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
  }, [contextualIds, effectiveMatchedTopicIds, hasActiveFilters, selectedId]);

  const edges = useMemo(() => {
    if (!selectedId && !hasActiveFilters) {
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
            strokeWidth: 2.2,
          },
        };
      }

      if (!hasActiveFilters) {
        return edge;
      }

      const endpointsVisible = contextualIds.has(edge.source) && contextualIds.has(edge.target);

      return {
        ...edge,
        style: {
          ...edge.style,
          opacity: endpointsVisible ? 0.72 : 0.12,
          strokeWidth: endpointsVisible ? 1.45 : 1.05,
        },
      };
    });
  }, [contextualIds, hasActiveFilters, selectedId, selectedNode]);

  const fitPadding = isCompactViewport ? COMPACT_FIT_PADDING : DEFAULT_FIT_PADDING;
  const animationDuration = withMotionPreference(prefersReducedMotion, isCompactViewport ? 240 : 360);

  function fitCanvas(instance = flow) {
    instance.fitView({ duration: animationDuration, padding: fitPadding });

    if (isCompactViewport && !selectedId && typeof window !== 'undefined') {
      const settleDelay = animationDuration ? Math.max(animationDuration - 40, 80) : 0;

      window.setTimeout(() => {
        const nextZoom = Math.max(instance.getZoom(), 0.42);

        instance.zoomTo(nextZoom, {
          duration: withMotionPreference(prefersReducedMotion, 140),
        });
      }, settleDelay);
    }
  }

  function centerOnTopic(topicId: string) {
    const node = flow.getNode(topicId);

    if (!node) {
      return;
    }

    const width = node.measured?.width ?? (node.data.variant === 'section' ? 326 : 272);
    const height = node.measured?.height ?? 116;
    const nextZoom = isCompactViewport ? (node.data.variant === 'section' ? 0.58 : 0.74) : node.data.variant === 'section' ? 0.72 : 0.92;

    flow.setCenter(node.position.x + width / 2, node.position.y + height / 2, {
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
      setShowOverview(false);
      setShowMobileControls(false);
    });
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  function clearFilters() {
    setActiveTrackId('');
    setActiveLevel('');
    setBeginnerMode(false);
    setCollectionMode('all');
    setLiveMessage('تمت إعادة ضبط الفلاتر والعروض السريعة.');
  }

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  function toggleFavorite(topicId: string) {
    const topic = topicCatalog[topicId];

    if (!topic) {
      return;
    }

    setFavoriteIds((current) => {
      const isFavorite = current.includes(topicId);
      setLiveMessage(isFavorite ? `أُزيل ${topic.title} من المفضلة.` : `أُضيف ${topic.title} إلى المفضلة.`);
      return isFavorite ? current.filter((item) => item !== topicId) : [topicId, ...current].slice(0, 24);
    });
  }

  async function copyShareLink() {
    if (typeof window === 'undefined') {
      return;
    }

    const shareUrl = buildRoadmapShareUrl(
      {
        topicId: isDrawerOpen ? selectedId : null,
        activeTrackId,
        activeLevel,
        beginnerMode,
      },
      new URL('/map', window.location.href).toString(),
    );

    try {
      if (window.navigator.clipboard?.writeText) {
        await window.navigator.clipboard.writeText(shareUrl);
        setLiveMessage('تم نسخ رابط الخريطة الحالية.');
        return;
      }
    } catch {
      // Fall through to fallback message.
    }

    setLiveMessage('الرابط ظاهر في شريط العنوان ويمكن نسخه يدويًا.');
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const nextSearch = buildRoadmapUrlSearch({
      topicId: isDrawerOpen ? selectedId : null,
      activeTrackId,
      activeLevel,
      beginnerMode,
    });
    const nextUrl = `/map${nextSearch}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, '', nextUrl);
    }
  }, [activeLevel, activeTrackId, beginnerMode, isDrawerOpen, selectedId]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    syncRoadmapSeoDocument(
      buildRoadmapSeoState({
        route: 'map',
        selectedTopic: isDrawerOpen ? selectedTopic : null,
        activeTrackId,
        activeLevel,
        beginnerMode,
      }),
    );
  }, [activeLevel, activeTrackId, beginnerMode, isDrawerOpen, selectedTopic]);

  const filterSummary = liveMessage || (hasActiveFilters
    ? effectiveMatchedTopicIds.length
      ? `تعرض الآن ${effectiveMatchedTopicIds.length} موضوعًا مطابقًا.`
      : 'لا توجد نتائج مطابقة لهذا المزج من الفلاتر والعروض.'
    : 'استخدم الفلاتر الصغيرة أو الفهرس الجانبي للوصول السريع بدل شريط بحث كبير.');

  const isSelectedFavorite = Boolean(selectedId && favoriteIds.includes(selectedId));
  const topicContext = selectedTopic ? getTopicContextLine(selectedTopic, selectedJourney) : '';
  const {
    suggestedTopics,
    preparationTopics,
    nextTopics,
    alternativeTopics,
    projectIdeas,
    miniLabs,
    commonMistakes,
    studyTips,
    resourceCollections,
  } = relatedContent;

  const brandMeta = isCompactViewport
    ? `${roadmapMeta.totalTracks} مسارات / ${roadmapMeta.totalTopics} موضوعًا`
    : `${roadmapMeta.totalTracks} مسارات / ${roadmapMeta.totalTopics} موضوعًا / تحديث ${roadmapMeta.updatedAt}`;

  const mobileFilterStatus = liveMessage || (hasActiveFilters ? filterSummary : '');
  const shouldShowMobileStatus = isCompactViewport && Boolean(mobileFilterStatus);

  return (
    <div className={['app-shell', 'roadmap-app-shell', isCompactViewport ? 'is-mobile-layout' : ''].filter(Boolean).join(' ')}>
      <a href="#roadmap-main" className="skip-link">
        انتقل إلى الخريطة
      </a>
      <p className="screen-reader-status" aria-live="polite">
        {liveMessage}
      </p>

      <header className={['topbar', 'roadmap-topbar', isCompactViewport ? 'is-mobile-topbar' : ''].filter(Boolean).join(' ')}>
        <div className="topbar-main">
          <div className="topbar-brand">
            <h1 className="topbar-brand-title">{roadmapMeta.title}</h1>
            <span>{brandMeta}</span>
          </div>

          {isCompactViewport ? (
            <div className="topbar-actions topbar-actions-wrap">
              <TopbarButton onClick={onBackHome}>الرئيسية</TopbarButton>
              <TopbarButton
                onClick={() => {
                  setShowOverview((current) => !current);
                  setShowMobileControls(false);
                }}
                active={showOverview}
              >
                الفهرس
              </TopbarButton>
              <TopbarButton
                onClick={() => {
                  setShowMobileControls((current) => !current);
                  setShowOverview(false);
                }}
                active={showMobileControls}
              >
                الأدوات
              </TopbarButton>
            </div>
          ) : (
            <div className="topbar-actions topbar-actions-wrap">
              <TopbarButton onClick={onBackHome}>الرئيسية</TopbarButton>
              <TopbarButton onClick={() => setShowOverview((current) => !current)} active={showOverview}>
                الفهرس
              </TopbarButton>
              <TopbarButton onClick={() => fitCanvas()}>ضبط العرض</TopbarButton>
              <TopbarButton onClick={copyShareLink}>نسخ الرابط</TopbarButton>
              <TopbarButton onClick={clearFilters} disabled={!hasActiveFilters}>
                مسح الفلاتر
              </TopbarButton>
              <TopbarButton onClick={toggleTheme}>{theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}</TopbarButton>
            </div>
          )}
        </div>

        {!isCompactViewport ? (
          <div className="compact-filters" aria-label="فلاتر صغيرة للخريطة">
            <div className="collection-toggle-group" role="tablist" aria-label="عروض سريعة">
              {[
                ['all', 'الكل'],
                ['favorites', 'المفضلة'],
                ['recent', 'آخر ما فُتح'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={['compact-toggle', collectionMode === value ? 'is-active' : ''].filter(Boolean).join(' ')}
                  onClick={() => setCollectionMode(value as CollectionMode)}
                >
                  {label}
                </button>
              ))}
            </div>

            <select
              className="topbar-select compact-select"
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
              className="topbar-select compact-select"
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

            <button
              type="button"
              className={['compact-toggle', beginnerMode ? 'is-active' : ''].filter(Boolean).join(' ')}
              onClick={() => setBeginnerMode((current) => !current)}
            >
              وضع مبتدئ
            </button>

            <span className="compact-filter-summary">{filterSummary}</span>
          </div>
        ) : null}
      </header>

      {shouldShowMobileStatus ? <div className="mobile-status-strip">{mobileFilterStatus}</div> : null}

      {isCompactViewport && showMobileControls ? (
        <>
          <button
            type="button"
            className="mobile-controls-backdrop"
            aria-label="إغلاق أدوات الجوال"
            onClick={() => setShowMobileControls(false)}
          />
          <aside className="mobile-controls-sheet" aria-label="أدوات الخريطة للجوال">
            <div className="mobile-controls-head">
              <div>
                <strong>أدوات الخريطة</strong>
                <span>فلترة سريعة بدون ما تأكل مساحة من الخريطة.</span>
              </div>
              <button
                type="button"
                className="drawer-close"
                onClick={() => setShowMobileControls(false)}
                aria-label="إغلاق أدوات الجوال"
              >
                ×
              </button>
            </div>

            <div className="mobile-controls-grid">
              <div className="mobile-controls-section">
                <span className="mobile-controls-label">عروض سريعة</span>
                <div className="collection-toggle-group" role="tablist" aria-label="عروض سريعة">
                  {[
                    ['all', 'الكل'],
                    ['favorites', 'المفضلة'],
                    ['recent', 'آخر ما فُتح'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={['compact-toggle', collectionMode === value ? 'is-active' : ''].filter(Boolean).join(' ')}
                      onClick={() => setCollectionMode(value as CollectionMode)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mobile-controls-section">
                <span className="mobile-controls-label">فلترة المسار والمستوى</span>
                <div className="mobile-controls-field-row">
                  <select
                    className="topbar-select compact-select"
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
                    className="topbar-select compact-select"
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
                </div>
              </div>

              <div className="mobile-controls-section">
                <span className="mobile-controls-label">تهيئة سريعة</span>
                <div className="mobile-controls-action-row">
                  <button
                    type="button"
                    className={['compact-toggle', beginnerMode ? 'is-active' : ''].filter(Boolean).join(' ')}
                    onClick={() => setBeginnerMode((current) => !current)}
                  >
                    وضع مبتدئ
                  </button>
                  <button type="button" className="compact-toggle" onClick={() => { fitCanvas(); setShowMobileControls(false); }}>
                    ضبط العرض
                  </button>
                  <button type="button" className="compact-toggle" onClick={() => { void copyShareLink(); setShowMobileControls(false); }}>
                    نسخ الرابط
                  </button>
                  <button
                    type="button"
                    className="compact-toggle"
                    onClick={() => {
                      toggleTheme();
                      setShowMobileControls(false);
                    }}
                  >
                    {theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}
                  </button>
                  <button
                    type="button"
                    className="compact-toggle"
                    onClick={() => {
                      clearFilters();
                      setShowMobileControls(false);
                    }}
                    disabled={!hasActiveFilters}
                  >
                    مسح الفلاتر
                  </button>
                </div>
              </div>

              <p className="mobile-controls-note">{filterSummary}</p>
            </div>
          </aside>
        </>
      ) : null}

      <main className="map-layout" id="roadmap-main">
        <section className="map-workspace-panel">
          {showOverview ? (
            <>
              <button type="button" className="overview-backdrop" aria-label="إغلاق الفهرس" onClick={() => setShowOverview(false)} />
              <aside className="overview-overlay" aria-label="فهرس المسارات">
                <div className="overview-section">
                  <div className="overview-overlay-head">
                    <h2>الفهرس السريع</h2>
                    <button type="button" className="drawer-close" onClick={() => setShowOverview(false)} aria-label="إغلاق الفهرس">
                      ×
                    </button>
                  </div>
                  <div className="overview-list">
                    {roadmapSections.map((section) => {
                      const topic = topicCatalog[section.id];

                      return (
                        <div key={section.id} className="overview-card">
                          <button type="button" className="overview-card-main" onClick={() => focusTopic(section.id)}>
                            <strong>{topic.title}</strong>
                            <span>{topic.summary}</span>
                          </button>
                          <button
                            type="button"
                            className={['overview-card-filter', activeTrackId === section.id ? 'is-active' : ''].filter(Boolean).join(' ')}
                            onClick={() => {
                              setActiveTrackId((current) => (current === section.id ? '' : section.id));
                              setShowOverview(false);
                            }}
                          >
                            {activeTrackId === section.id ? 'إلغاء الفلترة' : 'فلترة هذا المسار'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {favoriteIds.length ? (
                  <div className="overview-section">
                    <h2>المفضلة</h2>
                    <div className="overview-topic-list">
                      {favoriteIds.slice(0, 8).map((topicId) => (
                        <button key={topicId} type="button" className="overview-topic-link" onClick={() => focusTopic(topicId)}>
                          {topicCatalog[topicId].title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {recentIds.length ? (
                  <div className="overview-section">
                    <h2>آخر ما فُتح</h2>
                    <div className="overview-topic-list">
                      {recentIds.slice(0, 8).map((topicId) => (
                        <button key={topicId} type="button" className="overview-topic-link" onClick={() => focusTopic(topicId)}>
                          {topicCatalog[topicId].title}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
            </>
          ) : null}

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
              nodesFocusable
              edgesFocusable={false}
              elementsSelectable={false}
              onlyRenderVisibleElements
              fitView
              fitViewOptions={{ padding: fitPadding, includeHiddenNodes: false }}
              minZoom={0.3}
              maxZoom={1.6}
            >
              <Background gap={36} size={0.9} variant={BackgroundVariant.Dots} color="var(--grid-line)" />
              {!isCompactViewport ? (
                <MiniMap
                  pannable
                  zoomable
                  className="roadmap-minimap"
                  nodeStrokeColor={(node) => tonePalette[(node.data as RoadmapNodeData).tone].line}
                  nodeColor={(node) => tonePalette[(node.data as RoadmapNodeData).tone].soft}
                />
              ) : null}
            </ReactFlow>
          </div>

          {isDrawerOpen && selectedTopic ? (
            <>
              <button type="button" className="drawer-backdrop" aria-label="إغلاق التفاصيل" onClick={closeDrawer} />
              <aside className="details-drawer" aria-label="تفاصيل الموضوع المحدد">
                {isCompactViewport ? <div className="drawer-grab-handle" aria-hidden="true" /> : null}
                <div className="drawer-header">
                  <div className="drawer-title-wrap">
                    <h2>{selectedTopic.title}</h2>
                    <div className="drawer-meta">
                      <JourneyBadge journey={selectedJourney} />
                      <span>{selectedTopic.category}</span>
                      <span className="drawer-meta-separator" />
                      <span>{selectedTopic.level}</span>
                    </div>
                  </div>

                  <button type="button" className="drawer-close" onClick={closeDrawer} aria-label="إغلاق التفاصيل">
                    ×
                  </button>
                </div>

                <div className="details-actions-inline">
                  <button type="button" className={['details-chip-button', isSelectedFavorite ? 'is-active' : ''].filter(Boolean).join(' ')} onClick={() => selectedId && toggleFavorite(selectedId)}>
                    {isSelectedFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
                  </button>
                  <button type="button" className="details-chip-button" onClick={copyShareLink}>
                    نسخ الرابط
                  </button>
                </div>

                <p className="details-summary">{selectedTopic.summary}</p>
                <p className="details-context">{topicContext}</p>

                {selectedTopic.fits?.length ? (
                  <section className="details-section">
                    <h3>من يناسبه هذا الباب؟</h3>
                    <ul>
                      {selectedTopic.fits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {selectedTopic.effort ? (
                  <section className="details-section">
                    <h3>الجهد التقريبي</h3>
                    <p className="details-note-inline">{selectedTopic.effort}</p>
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
                  <h3>ما الذي ستبنيه أو تطبقه</h3>
                  <ul>
                    {selectedTopic.build.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                {selectedTopic.finalProject?.length ? (
                  <section className="details-section">
                    <h3>مشروع ختامي واضح</h3>
                    <ul>
                      {selectedTopic.finalProject.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

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
                    <h3>أخطاء شائعة</h3>
                    <ul>
                      {commonMistakes.map((mistake) => (
                        <li key={mistake}>{mistake}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {miniLabs.length ? (
                  <section className="details-section">
                    <h3>مختبر صغير</h3>
                    <ul>
                      {miniLabs.map((lab) => (
                        <li key={lab}>{lab}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {projectIdeas.length ? (
                  <section className="details-section">
                    <h3>أفكار تطبيق إضافية</h3>
                    <ul>
                      {projectIdeas.map((idea) => (
                        <li key={idea}>{idea}</li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {[
                  { title: 'مفيد قبله', items: preparationTopics },
                  { title: 'بعده مباشرة', items: nextTopics },
                  { title: 'مواضيع مقترحة', items: suggestedTopics },
                  { title: 'بدائل قريبة', items: alternativeTopics },
                ].map(({ title, items }) =>
                  items.length ? (
                    <section key={title} className="details-section">
                      <h3>{title}</h3>
                      <div className="suggestions-grid">
                        {items.map((topic) => (
                          <button key={topic.id} type="button" className="suggestion-card" onClick={() => focusTopic(topic.id)}>
                            <strong>{topic.title}</strong>
                            <span>
                              {topic.category} / {topic.level}
                            </span>
                          </button>
                        ))}
                      </div>
                    </section>
                  ) : null,
                )}

                {selectedTopic.note2026 ? (
                  <section className="details-section">
                    <h3>ملاحظة مهمة في 2026</h3>
                    <p className="details-note-inline">{selectedTopic.note2026}</p>
                  </section>
                ) : null}

                <section className="details-section">
                  <h3>مصدر رسمي موثوق</h3>
                  <div className="resource-list">
                    {resourceCollections.official.map((resource) => (
                      <a key={resource.url} className="resource-link" href={resource.url} target="_blank" rel="noreferrer">
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </section>

                {resourceCollections.friendly.length ? (
                  <section className="details-section">
                    <h3>مصدر مبسط أو سريع</h3>
                    <div className="resource-list">
                      {resourceCollections.friendly.map((resource) => (
                        <a key={resource.url} className="resource-link" href={resource.url} target="_blank" rel="noreferrer">
                          {resource.label}
                        </a>
                      ))}
                    </div>
                  </section>
                ) : null}

                {resourceCollections.more.length ? (
                  <section className="details-section">
                    <h3>مصادر توسع إضافية</h3>
                    <div className="resource-list">
                      {resourceCollections.more.map((resource) => (
                        <a key={resource.url} className="resource-link" href={resource.url} target="_blank" rel="noreferrer">
                          {resource.label}
                        </a>
                      ))}
                    </div>
                  </section>
                ) : null}
              </aside>
            </>
          ) : null}
        </section>
      </main>
    </div>
  );
}
