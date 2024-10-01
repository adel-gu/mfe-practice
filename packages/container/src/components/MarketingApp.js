import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate, useLocation } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to marketing navigation
  useEffect(() => {
    const handleMarketingNavigation = (event) => {
      const pathname = event.detail;
      if (pathname === location.pathname) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener('{me} navigated', handleMarketingNavigation);

    return () => {
      window.removeEventListener('{me} navigated', handleMarketingNavigation);
    };
  }, [location]);

  // Listen to container navigation then dispatch container navigation
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
    });
  }, []);

  return <div ref={ref} id="marketing-root" />;
};

export default MarketingApp;
