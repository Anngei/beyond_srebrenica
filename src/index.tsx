import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { App } from './components/App';
import { AboutUs } from './pages/AboutUs';
import { Poi } from './pages/Poi';
import { Background } from './pages/Background';
import { Home } from './pages/Home';
import { ReportageDetailPage, ReportagePage } from './pages/Reportage';
import { ImprintPage } from './pages/imprint';
import './index.module.css';

const NoMatchPage: (_props: any) => JSX.Element = (_props: any) => {
  const location = useLocation();

  return (
    <>
      <h1>😓 404 - Seite nicht gefunden</h1>
      Leider wurde diese Seite ({location.pathname}) nicht gefunden.
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="poi/:poiId" element={<Poi />} />
          <Route path="background" element={<Background />} />
          <Route path="reportage">
            <Route index element={<ReportagePage />} />
            <Route path=":id" element={<ReportageDetailPage />} />
          </Route>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="imprint" element={<ImprintPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
