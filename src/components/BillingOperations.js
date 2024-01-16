// src/components/BillingOperations.js
import React from 'react';


const BillingOperations = () => {
  return (
    <div className="dashboard-title"> 
          <h2>Dashboard</h2>
        <div className="dashboard-container">
          <div className="dashboard-card">
            <h2>Electric Bills</h2>
            <p>Electric Bills</p>
          </div>
          <div className="dashboard-card">
            <h2>Water Bill</h2>
            <p>Water Bill</p>
          </div>
          <div className="dashboard-card">
            <h2>Internet Bill</h2>
            <p>Internet Bill</p>
          </div>
        </div>
      </div>
  );
};

export default BillingOperations;
