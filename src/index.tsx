import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/map">
          <FullWidthWrapper>
            <Map poi={['ikb-berlin', 'suedost-ev']} />
          </FullWidthWrapper>
        </Route>
        <Route path="/about-us">
          <MaxWidthWrapper>
            <Content contentKey="about-us" />
          </MaxWidthWrapper>
        </Route>
        <Route path="/background">
          <MaxWidthWrapper>
            <h2>Hintergrund</h2>
            <Accordion
              elements={{
                genocide: 'Begriff Völkermord',
                lawsuit: 'Gerichtsverfahren',
              }}
            />
          </MaxWidthWrapper>
        </Route>
        <Route path="/imprint">
          <MaxWidthWrapper>
            <Content contentKey="imprint" />
          </MaxWidthWrapper>
        </Route>
        <Route path="/poi/ikb-berlin">
          <MaxWidthWrapper>
            <Content contentKey="poi/ikb-berlin/description" />
          </MaxWidthWrapper>
        </Route>
        <Route path="/texts">
          <MaxWidthWrapper>
            <h1>Interviews</h1>
            <List />
          </MaxWidthWrapper>
        </Route>
        <Route exact path="/">
          <Redirect to={{ pathname: '/map' }} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('main')
);

reportWebVitals(logger.info);
