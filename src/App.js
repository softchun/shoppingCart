import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './pages/Products';
import './assets/main.css'
import NavBar from './conponents/NavBar';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="bg-slate-700 text-white max-h-full">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
