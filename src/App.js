import React, { useState } from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard'
import ProductDetails from '../src/Components/ProductDetail'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>

    </>
  );
}

export default App
