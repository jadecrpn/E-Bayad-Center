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
              <a href="/register">Register</a>
              <a href="/dashboard">Dashboard</a>
              <a href="/billing">Billing</a>
              <a href="/receipt">Receipt</a>
              
              <button className = "nav-buttons"> <a href="/register" > LOG IN </a></button>  
        </nav>   

        <button><a href="/register" > REGISTER HERE </a></button>  

        <footer>
          <p>Copyright &#169; 2024 E-BILLING APP. All Rights Reserved.</p>
        </footer>
         
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