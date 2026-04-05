import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeLoader } from 'theme-loader-api';

console.debug(`Main Startup selectedTheme: ${ThemeLoader.selectedTheme}`);
ThemeLoader.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
