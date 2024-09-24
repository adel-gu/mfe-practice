import React from 'react';
import ReactDOM from 'react-dom';

// import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    el,
  );
};

// 1. development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
