import React from 'react';
import { Link } from 'react-router-dom';

import Sbsl from '../Assets/Sbsl.png';

const Front = () => {
  const buttonStyle = {
    backgroundColor: '#be800d',
    color: '#000000',
    padding: '20px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
  };

  return (
    <div className="container">
      <nav>
        <div className="title">E-BILLING APP</div>
        <button className="nav-buttons">
          <Link to="/login" style={buttonStyle}>
            LOG IN
          </Link>
        </button>
      </nav>
      <div>
        <header className="App-header">
          <img src={Sbsl} alt="Sbsl.png" />
          <div className="main_button">
            <Link to="/signup" style={buttonStyle}>
              REGISTER HERE
            </Link>
          </div>
        </header>
      </div>

      <footer>
        <p>Copyright &#169; 2024 E-BILLING APP. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Front;
