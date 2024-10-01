import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ onSignIn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to marketing navigate and dispatch global marketing navigation event
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('{au} navigated', { detail: location.pathname }),
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
          <Route path="/auth/signin" element={<Signin onSignIn={onSignIn} />} />
          <Route path="/auth/signup" element={<Signup onSignIn={onSignIn} />} />
        </Routes>
      </StylesProvider>
    </div>
  );
};
