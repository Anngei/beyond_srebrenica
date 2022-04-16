import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams,
} from 'react-router-dom';
import { reportWebVitals } from './reportWebVitals';
import { logger } from './logger';
import { App } from './components/App';
import { Content } from './components/Content/Content';
import { Accordion } from './components/Accordion/Accordion';
import { MaxWidthWrapper } from './components/MaxWidthWrapper/MaxWidthWrapper';
import { Map } from './components/Map/Map';
import { FullWidthWrapper } from './components/FullWidthWrapper/FullWidthWrapper';
import { List } from './components/List';
import './index.css';

const MapPage: (_props: any) => JSX.Element = (_props: any) => (
  <FullWidthWrapper>
    <Map
      poi={[
        'ikb-berlin',
        'suedost-ev',
        'rosenduft',
        'slawistik-institut',
        'balkanbeats',
      ]}
    />
  </FullWidthWrapper>
);

const AboutUsPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="pages/about-us" />
  </MaxWidthWrapper>
);

const BackgroundPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <h1>Hintergrund</h1>
    <Accordion
      elements={{
        genocide: 'Begriff Völkermord',
        verlauf_bosnienkrieg: 'Verlauf des Bosnienkrieges',
        lawsuit: 'Gerichtsverfahren',
        migration: 'Migration aus (Post-) Jugoslawien',
        duldung: 'Duldung',
        gedenken: 'Wichtige Gedenktage',
      }}
    />
  </MaxWidthWrapper>
);

const ImprintPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="pages/imprint" />
  </MaxWidthWrapper>
);

const ReportagePage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <h1>Reportagen</h1>
    <List reports={['krdzic', 'haye', 'travljanin', 'music', 'halilovic']} />
  </MaxWidthWrapper>
);

const ReportageDetailPage: (_props: any) => JSX.Element = (_props: any) => {
  const { id } = useParams<{ id: string }>();
  return (
    <MaxWidthWrapper>
      <Content contentKey={`reportagen/${id}/full`} />
    </MaxWidthWrapper>
  );
};

const PoiPage: (_props: any) => JSX.Element = (_props: any) => {
  const { poiId } = useParams<{ poiId: string }>();
  return (
    <MaxWidthWrapper>
      <Content contentKey={`poi/${poiId}/description`} />
    </MaxWidthWrapper>
  );
};

const NoMatchPage: (_props: any) => JSX.Element = (_props: any) => {
  const location = useLocation();

  return (
    <MaxWidthWrapper>
      <h1>😓 404 - Seite nicht gefunden</h1>
      Leider wurde diese Seite ({location.pathname}) nicht gefunden.
    </MaxWidthWrapper>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<MapPage/>} />
          <Route path="poi/:poiId" element={<PoiPage />} />
            <Route path="background" element={<BackgroundPage/>} />
          <Route path="reportage">
            <Route index element={<ReportagePage/>} />
            <Route path=":id" element={<ReportageDetailPage />} />
          </Route>
          <Route path="about-us" element={<AboutUsPage/>} />
          <Route path="imprint" element={<ImprintPage/>} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(logger.info);
