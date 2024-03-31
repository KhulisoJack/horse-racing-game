import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import RacePage from '../pages/RacePage';

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/race" element={<RacePage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
