import React from 'react';
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Dashboard = () => {
  return (
    <div className="container">
      <nav>
          <div class = "title"> E-BILLING APP </div>
          <div class ="nav-buttons ">  
            <button><a href="/register" > LOG OUT </a></button>  
          </div>
      </nav> 

      <button><a href="/billing" > PAY BILLS HERE! </a></button>  
    </div>  
    
    
    );
  };

export default Dashboard;
