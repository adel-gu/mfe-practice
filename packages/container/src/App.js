import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route path="/*" element={<MarketingAppLazy />} />
              <Route path="/auth/*" element={<AuthAppLazy />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
export default App;
