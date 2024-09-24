import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
