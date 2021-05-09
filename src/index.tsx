import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { reportWebVitals } from './reportWebVitals';
import { logger } from './logger';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Fooo</h1>
      <a href="asdasd">asdasd</a>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logger.info);
