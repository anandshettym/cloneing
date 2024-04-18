import React from 'react'; 
import { Routes as ReactRoutes, Route } from 'react-router-dom';// Renamed to avoid conflicts

import Results from './Results';

export const Routes = () => (
  <div className="p-4">
    <ReactRoutes>
      <Route path="/" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </ReactRoutes>
  </div>
);
