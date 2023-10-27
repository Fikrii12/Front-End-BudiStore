import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Tentang from './pages/tentang';
import Kontak from './pages/kontak';
import Tambah from './pages/Tambah';
import Hapus from './pages/Hapus';
import Admin from './pages/Admin';





function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<DataList />}></Route> */}
        {/* <Route  path='/' element={<Tambah />}></Route> */}
        {/* <Route path='/' element={<Hapus />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/Tentang' element={<Tentang />}></Route>
        <Route path='/Kontak' element={<Kontak />}></Route>
        <Route  path='/Tambah' element={<Tambah />}></Route>
        <Route path='/Hapus' element={<Hapus />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
