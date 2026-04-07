import { ReactFlowProvider } from '@xyflow/react';
import { useEffect, useMemo, useState } from 'react';
import { roadmapMeta } from './data/roadmap';
import { HomePage } from './features/roadmap/home-page';
import { MapWorkspace } from './features/roadmap/map-workspace';
import { buildRoadmapSeoState, syncRoadmapSeoDocument } from './features/roadmap/seo';
import { buildRoadmapUrlSearch, parseRoadmapUrlState } from './features/roadmap/url-state';

type RouteName = 'home' | 'map';

type RouteSnapshot = {
  name: RouteName;
  search: string;
  key: string;
};

function getRouteSnapshot(): RouteSnapshot {
  if (typeof window === 'undefined') {
    return { name: 'home', search: '', key: 'home' };
  }

  const name = window.location.pathname === '/map' ? 'map' : 'home';
  return {
    name,
    search: window.location.search,
    key: `${window.location.pathname}${window.location.search}${window.location.hash}`,
  };
}

function hasLegacyMapState(search: string) {
  const params = new URLSearchParams(search);
  return ['topic', 'track', 'level', 'beginner', 'q'].some((key) => params.has(key));
}

function navigate(pathname: string, search = '', replace = false) {
  if (typeof window === 'undefined') {
    return;
  }

  const target = `${pathname}${search}${window.location.hash}`;

  if (replace) {
    window.history.replaceState(null, '', target);
  } else {
    window.history.pushState(null, '', target);
  }

  window.dispatchEvent(new PopStateEvent('popstate'));
}

export default function App() {
  const [route, setRoute] = useState<RouteSnapshot>(getRouteSnapshot);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncRoute = () => {
      const snapshot = getRouteSnapshot();

      if (snapshot.name === 'home' && hasLegacyMapState(snapshot.search)) {
        navigate('/map', snapshot.search, true);
        setRoute(getRouteSnapshot());
        return;
      }

      setRoute(snapshot);
    };

    window.addEventListener('popstate', syncRoute);
    syncRoute();

    return () => {
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const homeSeoState = useMemo(
    () =>
      buildRoadmapSeoState({
        route: 'home',
        selectedTopic: null,
        activeTrackId: '',
        activeLevel: '',
        beginnerMode: false,
      }),
    [],
  );

  useEffect(() => {
    if (route.name !== 'home' || typeof document === 'undefined') {
      return;
    }

    syncRoadmapSeoDocument(homeSeoState);
  }, [homeSeoState, route.name]);

  function openMap() {
    navigate('/map');
  }

  function openTopic(topicId: string) {
    navigate(
      '/map',
      buildRoadmapUrlSearch({
        topicId,
        activeTrackId: '',
        activeLevel: '',
        beginnerMode: false,
      }),
    );
  }

  if (route.name === 'map') {
    return (
      <ReactFlowProvider>
        <MapWorkspace key={route.key} initialUrlState={parseRoadmapUrlState(route.search)} onBackHome={() => navigate('/')} />
      </ReactFlowProvider>
    );
  }

  return (
    <div className="home-route-shell">
      <a href="#main-content" className="skip-link">
        انتقل إلى المحتوى الرئيسي
      </a>
      <header className="home-route-header">
        <div>
          <strong>{roadmapMeta.title}</strong>
          <span>واجهة عربية مركزة على لينكس والأنظمة والتوزيعات</span>
        </div>
        <button type="button" className="topbar-button" onClick={openMap}>
          افتح الخريطة
        </button>
      </header>
      <HomePage onOpenMap={openMap} onOpenTopic={openTopic} />
    </div>
  );
}
