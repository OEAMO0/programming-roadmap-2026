import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { baseNodes } from './data/roadmap';

const flowNodeById = new Map(baseNodes.map((node) => [node.id, node]));
const mockFlowApi = {
  fitView: vi.fn(),
  zoomIn: vi.fn(),
  zoomOut: vi.fn(),
  getNode: vi.fn((id: string) => flowNodeById.get(id)),
  setCenter: vi.fn(),
};

vi.mock('@xyflow/react', async () => {
  const React = await import('react');

  return {
    ReactFlowProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    ReactFlow: ({
      nodes,
      onNodeClick,
      onInit,
      children,
    }: {
      nodes: Array<{ id: string; data: { title: string } }>;
      onNodeClick?: (event: unknown, node: { id: string }) => void;
      onInit?: (instance: typeof mockFlowApi) => void;
      children?: React.ReactNode;
    }) => {
      React.useEffect(() => {
        onInit?.(mockFlowApi);
      }, [onInit]);

      return (
        <div data-testid="react-flow">
          {nodes.map((node) => (
            <button key={node.id} type="button" onClick={() => onNodeClick?.({}, node)}>
              {node.data.title}
            </button>
          ))}
          {children}
        </div>
      );
    },
    Background: () => null,
    MiniMap: () => null,
    BackgroundVariant: { Dots: 'dots' },
    Handle: () => null,
    MarkerType: { ArrowClosed: 'arrowclosed' },
    Position: { Bottom: 'bottom', Left: 'left', Right: 'right', Top: 'top' },
    useReactFlow: () => mockFlowApi,
  };
});

import App from './App';

function setMatchMedia(compact = false) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: compact && query === '(max-width: 920px)',
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
    setMatchMedia(false);
  });

  it('renders the landing page by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'خريطة تعلّم البرمجة 2026' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'افتح الخريطة التفاعلية' })).toBeInTheDocument();
  });

  it('redirects old shared topic links on / to the new /map route and opens the drawer', async () => {
    window.history.replaceState({}, '', '/?topic=linux-buildroot-lfs');

    render(<App />);

    expect(await screen.findByRole('heading', { name: 'من Linux From Scratch إلى Buildroot: البناء من الجذور' })).toBeInTheDocument();

    await waitFor(() => {
      expect(window.location.pathname).toBe('/map');
    });
  });

  it('opens the map route from the landing page', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'افتح الخريطة التفاعلية' }));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/map');
    });

    expect(screen.getByRole('button', { name: 'الرئيسية' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'وضع مبتدئ' })).toBeInTheDocument();
  });

  it('opens a topic from the mocked flow and toggles it as favorite', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: 'افتح الخريطة التفاعلية' }));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/map');
    });

    fireEvent.click(screen.getAllByRole('button', { name: 'Linux Distribution Engineering' })[0]);

    expect(await screen.findByRole('heading', { name: 'Linux Distribution Engineering' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'إضافة إلى المفضلة' }));
    expect(screen.getByRole('button', { name: 'إزالة من المفضلة' })).toBeInTheDocument();
  });
});
