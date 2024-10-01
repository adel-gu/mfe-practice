import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'me',
});

export default () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to marketing navigate and dispatch global marketing navigation event
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('{me} navigated', { detail: location.pathname }),
    );
  }, [location]);

  // Listen to container navigation
  useEffect(() => {
    const handleContainerNavigation = (event) => {
      const pathname = event.detail;
      if (pathname === location.pathname) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener('{co} navigated', handleContainerNavigation);

    return () => {
      window.removeEventListener('{co} navigated', handleContainerNavigation);
    };
  }, [location]);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </StylesProvider>
    </div>
  );
};
