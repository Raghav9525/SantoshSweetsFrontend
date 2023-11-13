import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Dashboard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
