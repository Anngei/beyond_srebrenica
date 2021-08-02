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
    <Map poi={['ikb-berlin', 'suedost-ev', 'rosenduft', 'slawistik-institut']} />
  </FullWidthWrapper>
);

const aboutUsPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="about-us" />
  </MaxWidthWrapper>
);

const backgroundPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <h1>Hintergrund</h1>
    <Accordion
      elements={{
        genocide: 'Begriff Völkermord',
        duldung: 'Duldung',
        Gedenken: 'Gedenken',
        lawsuit: 'Gerichtsverfahren',
        multidirectional_memory: 'Multidirektionale Erinnerung',
      }}
    />
  </MaxWidthWrapper>
);

const imprintPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <Content contentKey="imprint" />
  </MaxWidthWrapper>
);

const textsPage: (_props: any) => JSX.Element = (_props: any) => (
  <MaxWidthWrapper>
    <h1>Interviews</h1>
    <List />
  </MaxWidthWrapper>
);

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
        <Route path="/texts">{textsPage}</Route>
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
