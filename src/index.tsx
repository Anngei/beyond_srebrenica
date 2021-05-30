import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { reportWebVitals } from './reportWebVitals';
import { logger } from './logger';
import { Navigation } from './components/Navigation/Navigation';
import { Content } from './components/Content/Content';
import { Accordion } from './components/Accordion/Accordion';
import { MaxWidthWrapper } from './components/MaxWidthWrapper/MaxWidthWrapper';
import { Map } from './components/Map/Map';
import { FullWidthWrapper } from './components/FullWidthWrapper/FullWidthWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/map">
          <FullWidthWrapper>
            <Map />
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
        <Route path="/">
          <FullWidthWrapper>
            <Map />
          </FullWidthWrapper>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('main')
);

reportWebVitals(logger.info);
