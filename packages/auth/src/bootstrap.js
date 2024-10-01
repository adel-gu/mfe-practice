import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import App from './App';

const mount = ({ el, routingStrategy, initialPathname, onSignIn } = {}) => {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      {routingStrategy === 'browser' ? (
        <BrowserRouter>
          <App onSignIn={onSignIn} />
        </BrowserRouter>
      ) : (
        <MemoryRouter initialEntries={[...initialPathname]}>
          <App onSignIn={onSignIn} />
        </MemoryRouter>
      )}
    </React.StrictMode>,
  );
};

export { mount };
