import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route index element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
