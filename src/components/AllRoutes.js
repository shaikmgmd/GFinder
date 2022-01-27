import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Resultats } from './Resultats.js';

export const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path={'/search'} element={<Resultats />}/>
        <Route path={'/images'}  element={<Resultats />}/>
        <Route path={'/videos'}  element={<Resultats />}/>
      </Routes>
  );
};

