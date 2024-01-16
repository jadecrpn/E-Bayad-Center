// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import BillingOperations from './components/BillingOperations';
import Receipt from './components/Receipt';

import './App.css';

const App = () => {
  return (
    <Router> 
      <div className="container">
        <nav>
            <div class = "title"> E-BILLING APP </div>
            <div class ="nav-buttons ">  
              <button><a href="/register" > LOG OUT </a></button>  
            </div>
        </nav>   
        
        <Routes>
          <Route path="/register" element={<RegisterForm />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing"  element={<BillingOperations />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;