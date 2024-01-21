import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BillingOperations from './components/BillingOperations';
import Login from './pages/login';
import Signup from './pages/register';
import Front from './pages/frontpage';
import Navigation from './components/Navbar'; 

import './App.css';


const App = () => {

  return (
        <Router>
            <Routes>
              <Route path="/nav" element={<Navigation />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/billing" element={<BillingOperations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Front />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
  );
};

export default App;
