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
import { useEffect, useState } from 'react';
import {
  getAlternativeTopicIds,
  getNextTopicIds,
  getPreparationTopicIds,
  getProjectIdeas,
  baseEdges,
  baseNodes,
  getSuggestedTopicIds,
  roadmapMeta,
  topicCatalog,
  type Journey,
  type RoadmapNodeData,
} from './data/roadmap';

type RoadmapFlowNode = Node<RoadmapNodeData, 'roadmapNode'>;
type ThemeMode = 'light' | 'dark';

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

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem('roadmap-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

function RoadmapNode({ data }: NodeProps<RoadmapFlowNode>) {
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
}

const nodeTypes = {
  roadmapNode: RoadmapNode,
};

function RoadmapWorkspace() {
  const flow = useReactFlow<RoadmapFlowNode>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [showLegend, setShowLegend] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('roadmap-theme', theme);
  }, [theme]);

  const selectedTopic = selectedId ? topicCatalog[selectedId] : null;
  const selectedNode =
    selectedId ? (baseNodes as RoadmapFlowNode[]).find((node) => node.id === selectedId) ?? null : null;
  const selectedJourney = selectedNode?.data.journey ?? 'enter';
  const suggestedTopics = selectedId
    ? getSuggestedTopicIds(selectedId)
        .map((topicId) => topicCatalog[topicId])
        .filter(Boolean)
    : [];
  const preparationTopics = selectedId
    ? getPreparationTopicIds(selectedId)
        .map((topicId) => topicCatalog[topicId])
        .filter(Boolean)
    : [];
  const nextTopics = selectedId
    ? getNextTopicIds(selectedId)
        .map((topicId) => topicCatalog[topicId])
        .filter(Boolean)
    : [];
  const alternativeTopics = selectedId
    ? getAlternativeTopicIds(selectedId)
        .map((topicId) => topicCatalog[topicId])
        .filter(Boolean)
    : [];
  const projectIdeas = selectedId ? getProjectIdeas(selectedId) : [];

  const nodes = (baseNodes as RoadmapFlowNode[]).map((node) => ({
    ...node,
    data: {
      ...node.data,
      selected: node.id === selectedId,
    },
  }));

  const edges = baseEdges.map((edge) => {
    const highlighted = selectedId ? edge.source === selectedId || edge.target === selectedId : false;
    const highlightStroke = selectedNode ? journeyStroke[selectedNode.data.journey] : 'var(--edge-accent)';

    return {
      ...edge,
      animated: highlighted,
      style: {
        ...edge.style,
        stroke: highlighted ? highlightStroke : 'var(--edge-muted)',
        opacity: highlighted ? 1 : 0.84,
        strokeWidth: highlighted ? 2.3 : 1.35,
      },
    };
  });

  function focusTopic(topicId: string) {
    setSelectedId(topicId);
    setDrawerOpen(true);

    requestAnimationFrame(() => {
      const node = flow.getNode(topicId);

      if (!node) {
        return;
      }

      const absolutePosition = node.position;
      const width = node.measured?.width ?? 288;
      const height = node.measured?.height ?? 116;
      const nextZoom = node.data.variant === 'section' ? 0.72 : 0.94;

      flow.setCenter(absolutePosition.x + width / 2, absolutePosition.y + height / 2, {
        duration: 360,
        zoom: nextZoom,
      });
    });
  }

  function resetViewport() {
    flow.fitView({ duration: 360, padding: 0.2 });
  }

  function zoomIn() {
    flow.zoomIn({ duration: 220 });
  }

  function zoomOut() {
    flow.zoomOut({ duration: 220 });
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

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-brand">
          <strong>{roadmapMeta.title}</strong>
          <span>
            {roadmapMeta.totalTracks} مسار / {roadmapMeta.totalTopics} موضوع / تحديث {roadmapMeta.updatedAt}
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
          <button type="button" className="topbar-button" onClick={toggleLegend}>
            {showLegend ? 'إخفاء الدليل' : 'إظهار الدليل'}
          </button>
          <button type="button" className="topbar-button" onClick={toggleTheme}>
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
            onInit={(instance) => instance.fitView({ padding: 0.2 })}
            panOnScroll
            zoomOnScroll
            nodesDraggable={false}
            nodesConnectable={false}
            fitView
            minZoom={0.32}
            maxZoom={1.6}
          >
            <Background gap={36} size={0.9} variant={BackgroundVariant.Dots} color="var(--grid-line)" />
          </ReactFlow>

          {showLegend ? (
            <div className="flow-legend" aria-label="دليل ألوان التقدم">
              <div className="flow-legend-item">
                <JourneyBadge journey="enter" />
                <span>أساسي لتبدأ</span>
              </div>
              <div className="flow-legend-item">
                <JourneyBadge journey="optional" />
                <span>مفيد ويقوي مستواك</span>
              </div>
              <div className="flow-legend-item">
                <JourneyBadge journey="mastery" />
                <span>للتعمق والاحتراف</span>
              </div>
            </div>
          ) : null}
        </div>

        {isDrawerOpen && selectedTopic ? (
          <>
            <button type="button" className="drawer-backdrop" aria-label="إغلاق الشرح" onClick={closeDrawer} />

            <aside className="details-drawer" aria-label="شرح الموضوع المحدد">
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

                <button type="button" className="drawer-close" onClick={closeDrawer} aria-label="إغلاق">
                  x
                </button>
              </div>

              <p className="details-summary">{selectedTopic.summary}</p>

              <section className="details-section">
                <h3>تتعلم هنا</h3>
                <ul>
                  {selectedTopic.learn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="details-section">
                <h3>طبّق عمليًا</h3>
                <ul>
                  {selectedTopic.build.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {selectedTopic.note2026 ? (
                <section className="details-section">
                  <h3>ملاحظة مهمة</h3>
                  <p className="details-note-inline">{selectedTopic.note2026}</p>
                </section>
              ) : null}

              {preparationTopics.length ? (
                <section className="details-section">
                  <h3>من المفيد تمر على</h3>
                  <div className="topic-link-list">
                    {preparationTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
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
                  <h3>بعده مباشرة</h3>
                  <div className="topic-link-list">
                    {nextTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
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
                  <h3>مسار قريب أو بديل</h3>
                  <div className="topic-link-list">
                    {alternativeTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
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
                  <h3>اقتراحات تقوي هذا المسار</h3>
                  <div className="suggestion-list">
                    {suggestedTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        className="suggestion-card"
                        onClick={() => focusTopic(topic.id)}
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
                  <h3>مشاريع تقوي هذا المسار</h3>
                  <ul>
                    {projectIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {selectedTopic.searchKeywords?.length ? (
                <section className="details-section">
                  <h3>كلمات بحث مفيدة</h3>
                  <div className="keyword-list">
                    {selectedTopic.searchKeywords.map((keyword) => (
                      <span key={keyword} className="keyword-chip">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="details-section">
                <h3>مصادر موثوقة</h3>
                <div className="resource-list">
                  {selectedTopic.resources.map((resource) => (
                    <a
                      key={resource.url}
                      className="resource-link"
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
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
