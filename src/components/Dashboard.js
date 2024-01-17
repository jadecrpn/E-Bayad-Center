import React from 'react';



const Dashboard = () => {
  const buttonStyle = {
    backgroundColor: 'transparent', // Change to your desired color
    color: '#000000',
    border:  '1px solid rgb(0, 0, 0)',
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
          <button>
            <a href="/register">LOG OUT</a>
          </button>
        </div>
      </nav>
      <section className="Dashboard">
        <div className="About-main">
          <h1>WELCOME, </h1>
          <p>REDUCE COST, SAVE TIME, AND IMPROVE CASH FLOW WITH E-BILLING APP</p>
          <div className="main_button">
            <a href="/billing" style={buttonStyle}>
              PAY BILLS HERE!
            </a>
          </div>
        </div>
        <div>
          <img className="face" src={require("C:/Users/User/Documents/GitHub/e-billing/src/Assets/face.png")} alt={"face"}/>
        </div>
      </section>  
    </div>

    
  );
};

export default Dashboard;
