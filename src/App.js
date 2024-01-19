// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import BillingOperations from './components/BillingOperations';
import Receipt from './components/Receipt';



import './App.css';

import './App.css';
import Sbsl from './assets/Sbsl.png';

function App() {
  return (
    <div className="App">
      <div className="App-navbar">
        <h1 className="App-title">E-BILLING APP</h1>
        <button className="App-login-button">LOGIN</button>
      </div>
      <header className="App-header">
        <img src={Sbsl} alt="Sbsl.png" />
        <div className="App-buttons">
          <button className="App-register-button">REGISTER HERE</button>
        </div>
      </header>
    </div>
  );
}

const App = () => {
  const buttonStyle = {
    backgroundColor: '#be800d',
    color: '#000000',
    border: '1px solid rgb(0, 0, 0)',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto', // Center the button horizontally
  };

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

        <div>
          <button><a href="/register" style={buttonStyle}> REGISTER HERE </a></button>   
        </div>

         
        <Routes>
          <Route path="/register" element={<RegisterForm />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing"  element={<BillingOperations />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>

      </div>

      <footer>
          <p>Copyright &#169; 2024 E-BILLING APP. All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
