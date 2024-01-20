import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import BillingOperations from './components/BillingOperations';


import './App.css';
import Sbsl from './Assets/Sbsl.png';

const App = () => {
  const buttonStyle = {
    backgroundColor: '#be800d',
    color: '#000000',
    padding: '20px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <div className="title">E-BILLING APP</div>
          <Link to="/dashboard">Dashboard</Link>
          <div className="nav-buttons">
            <Link to="/register">LOG IN</Link>
          </div>
        </nav>

        <div>
          <header className="App-header">
            <img src={Sbsl} alt="Sbsl.png" />
            <div className="main_button">
              <Link to="/register" style={buttonStyle}>
                REGISTER HERE
              </Link>
            </div>
          </header>
        </div>

        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/billing" element={<BillingOperations />} />
        </Routes>

      </div>
      <footer>
        <p>Copyright &#169; 2024 E-BILLING APP. All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
