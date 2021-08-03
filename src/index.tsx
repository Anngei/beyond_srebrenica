import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  useParams,
} from 'react-router-dom';
import { reportWebVitals } from './reportWebVitals';
import { logger } from './logger';
import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import { Accordion } from './components/Accordion/Accordion';
import { MaxWidthWrapper } from './components/MaxWidthWrapper/MaxWidthWrapper';
import { Map } from './components/Map/Map';
import { FullWidthWrapper } from './components/FullWidthWrapper/FullWidthWrapper';
import { List } from './components/List';
import './index.css';

const mapPage: (_props: any) => JSX.Element = (_props: any) => (
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

const aboutUsPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="pages/about-us" />
  </MaxWidthWrapper>
);

const backgroundPage: (_props: any) => JSX.Element = (_props: any) => (
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

const imprintPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="pages/imprint" />
  </MaxWidthWrapper>
);

const reportagePage: (_props: any) => JSX.Element = (_props: any) => (
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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Redirect to={{ pathname: '/map' }} />
        </Route>
        <Route path="/map">{mapPage}</Route>
        <Route path="/poi/:poiId">
          <PoiPage />
        </Route>
        <Route path="/background">{backgroundPage}</Route>
        <Route exact path="/reportage">
          {reportagePage}
        </Route>
        <Route exact path="/reportage/:id">
          <ReportageDetailPage />
        </Route>
        <Route path="/about-us">{aboutUsPage}</Route>
        <Route path="/imprint">{imprintPage}</Route>
        <Route path="*">
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('main')
);

reportWebVitals(logger.info);
