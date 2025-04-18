import { Router, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter basename='/see-world-project'>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        </Route>
        <Route path='*' element={<Navigate to="/" replace></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
