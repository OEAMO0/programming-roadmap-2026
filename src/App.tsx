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
import { memo, startTransition, useEffect, useMemo, useState } from 'react';
import {
  getAlternativeTopicIds,
  getNextTopicIds,
  getPreparationTopicIds,
  getProjectIdeas,
  getSearchKeywords,
  baseEdges,
  baseNodes,
  getSuggestedTopicIds,
  getTopicStudyTips,
  roadmapMeta,
  topicCatalog,
  type Journey,
  type RoadmapNodeData,
} from './data/roadmap';

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

const RoadmapNode = memo(function RoadmapNode({ data }: NodeProps<RoadmapFlowNode>) {
  return (
    <div
      className={[
        'roadmap-node',
        data.variant === 'section' ? 'roadmap-node-section' : 'roadmap-node-topic',
        data.selected ? 'is-selected' : '',
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

function RoadmapWorkspace() {
  const flow = useReactFlow<RoadmapFlowNode>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [showLegend, setShowLegend] = useState(getInitialLegendVisibility);
  const [isCompactViewport, setCompactViewport] = useState(() => safeMatchMedia(COMPACT_VIEWPORT_QUERY));
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => safeMatchMedia(REDUCED_MOTION_QUERY));

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
    if (!isDrawerOpen || typeof window === 'undefined') {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

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
        searchKeywords: [] as string[],
        studyTips: [] as string[],
      };
    }

    return {
      suggestedTopics: mapTopicIdsToTopics(getSuggestedTopicIds(selectedId)),
      preparationTopics: mapTopicIdsToTopics(getPreparationTopicIds(selectedId)),
      nextTopics: mapTopicIdsToTopics(getNextTopicIds(selectedId)),
      alternativeTopics: mapTopicIdsToTopics(getAlternativeTopicIds(selectedId)),
      projectIdeas: getProjectIdeas(selectedId),
      searchKeywords: getSearchKeywords(selectedId),
      studyTips: getTopicStudyTips(selectedId),
    };
  }, [selectedId]);

  const nodes = useMemo(() => {
    if (!selectedId) {
      return flowNodes;
    }

    return flowNodes.map((node) =>
      node.id === selectedId
        ? {
            ...node,
            data: {
              ...node.data,
              selected: true,
            },
          }
        : node,
    );
  }, [selectedId]);

  const edges = useMemo(() => {
    if (!selectedId) {
      return baseStyledEdges;
    }

    const highlightStroke = selectedNode ? journeyStroke[selectedNode.data.journey] : 'var(--edge-accent)';

    return baseStyledEdges.map((edge) => {
      const highlighted = edge.source === selectedId || edge.target === selectedId;

      if (!highlighted) {
        return edge;
      }

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
    });
  }, [selectedId, selectedNode]);

  const fitPadding = isCompactViewport ? COMPACT_FIT_PADDING : DEFAULT_FIT_PADDING;
  const animationDuration = withMotionPreference(prefersReducedMotion, isCompactViewport ? 240 : 360);
  const zoomDuration = withMotionPreference(prefersReducedMotion, 220);

  function fitCanvas(instance = flow) {
    instance.fitView({ duration: animationDuration, padding: fitPadding });
  }

  function focusTopic(topicId: string) {
    if (!nodeById.has(topicId) || !topicCatalog[topicId]) {
      return;
    }

    startTransition(() => {
      setSelectedId(topicId);
      setDrawerOpen(true);
    });

    const centerOnTopic = () => {
      const node = flow.getNode(topicId);

      if (!node) {
        return;
      }

      const absolutePosition = node.position;
      const width = node.measured?.width ?? (node.data.variant === 'section' ? 326 : 272);
      const height = node.measured?.height ?? 116;
      const nextZoom = isCompactViewport
        ? node.data.variant === 'section'
          ? 0.58
          : 0.76
        : node.data.variant === 'section'
          ? 0.72
          : 0.94;

      flow.setCenter(absolutePosition.x + width / 2, absolutePosition.y + height / 2, {
        duration: animationDuration,
        zoom: nextZoom,
      });
    };

    if (typeof window === 'undefined') {
      centerOnTopic();
      return;
    }

    window.requestAnimationFrame(centerOnTopic);
  }

  function resetViewport() {
    fitCanvas();
  }

  function zoomIn() {
    flow.zoomIn({ duration: zoomDuration });
  }

  function zoomOut() {
    flow.zoomOut({ duration: zoomDuration });
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  function toggleLegend() {
    setShowLegend((current) => !current);
  }

  const { suggestedTopics, preparationTopics, nextTopics, alternativeTopics, projectIdeas, searchKeywords, studyTips } =
    relatedContent;

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-brand">
          <strong>{roadmapMeta.title}</strong>
          <span>
            {roadmapMeta.totalTracks} مسار رئيسي / {roadmapMeta.totalTopics} موضوع / آخر تحديث {roadmapMeta.updatedAt}
          </span>
        </div>

        <div className="topbar-actions">
          <button type="button" className="topbar-button is-icon-button" onClick={zoomIn} aria-label="تكبير">
            +
          </button>
          <button type="button" className="topbar-button is-icon-button" onClick={zoomOut} aria-label="تصغير">
            -
          </button>
          <button type="button" className="topbar-button" onClick={resetViewport}>
            ضبط العرض
          </button>
          <button type="button" className="topbar-button" onClick={toggleLegend} aria-pressed={showLegend}>
            {showLegend ? 'إخفاء الدليل' : 'إظهار الدليل'}
          </button>
          <button type="button" className="topbar-button" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? 'وضع فاتح' : 'وضع داكن'}
          </button>
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
            onlyRenderVisibleElements
            fitView
            fitViewOptions={{ padding: fitPadding }}
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
                <div className="resource-list">
                  {selectedTopic.resources.map((resource) => (
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
