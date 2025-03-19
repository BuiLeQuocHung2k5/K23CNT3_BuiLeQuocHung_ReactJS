import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlqhApp from './BlqhApp';
import reportWebVitals from './reportWebVitals';

const BlqhRoot = ReactDOM.createRoot(document.getElementById('BlqhRoot'));
BlqhRoot.render(
  <React.StrictMode>
    <BlqhApp />
  </React.StrictMode>
);