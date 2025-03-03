import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlqhApp from './BlqhApp';
import reportWebVitals from './reportWebVitals';

const blqhRoot = ReactDOM.createRoot(document.getElementById('blqhRoot'));
blqhRoot.render(
  <React.StrictMode>
    <BlqhApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
