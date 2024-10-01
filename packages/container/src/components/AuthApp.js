import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useNavigate, useLocation } from 'react-router-dom';

const MarketingApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to auth navigation
  useEffect(() => {
    const handleMarketingNavigation = (event) => {
      const pathname = event.detail;
      if (pathname === location.pathname) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener('{au} navigated', handleMarketingNavigation);

    return () => {
      window.removeEventListener('{au} navigated', handleMarketingNavigation);
    };
  }, [location]);

  // Listen and dispatch container navigation
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('{co} navigated', { detail: location.pathname }),
    );
  }, [location]);

  // Mount marketing
  useEffect(() => {
    mount({
      el: ref.current,
      routingStrategy: 'memory',
      initialPathname: [location.pathname],
      onSignIn,
    });
  }, []);

  return <div ref={ref} id="auth-root" />;
};

export default MarketingApp;
