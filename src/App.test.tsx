import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
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
    BackgroundVariant: { Dots: 'dots' },
    Handle: () => null,
    Position: { Bottom: 'bottom', Left: 'left', Right: 'right', Top: 'top' },
    useReactFlow: () => mockFlowApi,
  };
});

import App from './App';

function setMatchMedia(compact = false) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: compact && query === '(max-width: 760px)',
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
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
    setMatchMedia(false);
  });

  it('opens the drawer from a shared topic URL', async () => {
    window.history.replaceState({}, '', '/?topic=python-math-computing');

    render(<App />);

    expect(await screen.findByRole('heading', { name: 'رياضيات Python: math و NumPy و SciPy بوعي عملي' })).toBeInTheDocument();
  });

  it('defaults the legend toggle to compact/mobile behavior when the viewport is narrow', () => {
    setMatchMedia(true);

    render(<App />);

    expect(screen.getByRole('button', { name: 'إظهار الدليل' })).toBeInTheDocument();
  });

  it('syncs the quick search state into the URL and renders a quick result card', async () => {
    render(<App />);

    fireEvent.change(screen.getByRole('searchbox', { name: 'ابحث داخل الخريطة' }), {
      target: { value: 'NumPy' },
    });

    expect(await screen.findByRole('button', { name: 'افتح موضوع رياضيات Python: math و NumPy و SciPy بوعي عملي' })).toBeInTheDocument();

    await waitFor(() => {
      expect(window.location.search).toContain('q=NumPy');
    });
  });
});
