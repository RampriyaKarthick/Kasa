import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Accueil/index.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Apropos from "./pages/Apropos/index.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/accueil" element={<Home/>} />
    <Route path="/apropos" element={<Apropos/>} />
    </Routes>
  </Router>
    
  </React.StrictMode>
);
 