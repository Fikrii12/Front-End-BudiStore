import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Tentang from './pages/tentang';
import Kontak from './pages/kontak';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Tentang' element={<Tentang />}></Route>
        <Route path='/Kontak' element={<Kontak />}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;
