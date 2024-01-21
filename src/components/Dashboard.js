import React, { useState, useEffect } from 'react';
import face from '../Assets/face.png';


const Dashboard = () => {
  const [userEmail, setUserEmail] = useState(null);
  
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    setUserEmail(storedEmail);
  }, []);

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#000000',
    border: '1px solid rgb(0, 0, 0)',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  };

  return (
    <div className="container">
      <nav>
        <div className="title">E-BILLING APP</div>
        <div className="nav-buttons">
          <a href="/login">LOG OUT</a>
        </div>
      </nav>
      <section className="Dashboard">
        <div className="About-main">
          <h1>WELCOME,{userEmail && <span>{userEmail}</span>} </h1>
          <p>REDUCE COST, SAVE TIME, AND IMPROVE CASH FLOW WITH E-BILLING APP</p>
          <div className="main_button">
            <a href="/billing" style={buttonStyle}>
              PAY BILLS HERE!
            </a>
          </div>
        </div>
        <div>
          <img className="face" src={face} alt="face.png" />
        </div>
        
      </section>
    </div>
  );
};

export default Dashboard;
