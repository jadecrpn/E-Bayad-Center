// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import BillingOperations from './components/BillingOperations';
import Receipt from './components/Receipt';

import React, { useState } from 'react';
import './App.css';
import centeredImage from './assets/front-text.png';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add registration or login logic here
  };

  return (
    <div>
      {/* First Page Section */}
      <header className="first-page">
        {/* Image in the center */}
        <div className="image-container">
          <img
            src={centeredImage}
            alt="Centered Image"
            className="centered-image"
          />
        </div>
        <div className="login-button">
          <button>LOGIN</button>
        </div>
      </header>

      {/* Registration Form Section */}
      <div className="registration-page">
        <form className="registration-form" onSubmit={handleFormSubmit}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
}

import './App.css';

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
