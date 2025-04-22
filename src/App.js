import { Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Layout from './components/Layout';
import Ogolosh from './pages/Ogolosh'; 

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
