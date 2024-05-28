import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Accueil/index.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Apropos from "./pages/Apropos/index.jsx"
import LogementDetail from './pages/LogementDetail/index.jsx';
import Error from "../src/pages/Error/index.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/accueil" element={<Home/>} />
    <Route path="/apropos" element={<Apropos/>} />
    <Route path="/logement/:id" element={<LogementDetail />} />
    <Route path="*" element={<Error/>} />
    </Routes>
  </Router>
    
  </React.StrictMode>
);
 