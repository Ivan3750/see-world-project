import {  Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import React, {  lazy } from 'react';


const Home = lazy(() => import('./pages/Home')); 
const Layout = lazy(() => import('./components/Layout')); 
const Ogolosh = lazy(() => import('./pages/Ogolosh'));



function App() {
  return (
    <BrowserRouter basename='/see-world-project'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ogolosh" element={<Ogolosh />} /> 
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
