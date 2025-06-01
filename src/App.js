import {  Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import React, {  lazy } from 'react';
import Favorites from './pages/Favorites';


const Home = lazy(() => import('./pages/Home')); 
const Layout = lazy(() => import('./components/Layout')); 
const Ogolosh = lazy(() => import('./pages/Ogolosh'));
const Regestation = lazy(() => import('./pages/Regestation'));
const LogIn = lazy(() => import('./pages/LogIn'));
const Reset = lazy(() => import('./pages/Reset'));



function App() {
  return (
    <BrowserRouter basename='/see-world-project'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/advert" element={<Ogolosh />} />
          <Route path="/regestation" element={<Regestation />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/favorites" element={<Favorites/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
