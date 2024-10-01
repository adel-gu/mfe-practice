import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import App from './App';

const mount = ({ el, routingStrategy, initialPathname } = {}) => {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      {routingStrategy === 'browser' ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : (
        <MemoryRouter initialEntries={[...initialPathname]}>
          <App />
        </MemoryRouter>
      )}
    </React.StrictMode>,
  );
};

export { mount };
