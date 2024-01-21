import React from 'react';
import { Link } from 'react-router-dom';

import Sbsl from '../Assets/Sbsl.png';

const Front = () => {
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    border: '2px solid rgb(0, 0, 0)', 
  };

  return (
    <div className="container">
      <nav>
        <div className="title">E-BILLING APP</div>
        

          <Link to="/login" style={buttonStyle}>
            LOG IN
          </Link>

        
      </nav>
      <div>
        <header className="App-header">
          <img src={Sbsl} alt="Sbsl.png" />
          <div className="register_button">
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
