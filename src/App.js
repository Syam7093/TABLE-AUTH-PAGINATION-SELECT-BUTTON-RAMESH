import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Location from './components/Location';
import Navbar from './components/Navbar';
import './App.css';
import Menu from './components/Menu';
import Crud from './components/Crud';
import Table from './components/Table';
import Youtube from './components/Youtube';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <cartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/location" element={<Location />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/table" element={<Table />} />
            <Route path="/you" element={<Youtube />} />




          </Routes>
        </cartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
