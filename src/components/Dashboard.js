import React, { useState, useEffect } from "react";
import face from "../Assets/face.png";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setUserEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setUserEmail(null);
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "#000000",
    border: "1px solid rgb(0, 0, 0)",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "50px",
    cursor: "pointer",
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{ bgcolor: "#F27C22", border: "2px solid #000000" }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold", color: "black" }}
            >
              E-BILLING APP
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                bgcolor: "#F27C22",
                color: "Black",
                border: "1px solid #000000",
              }}
            >
              LOG OUT
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            WELCOME, {userEmail && <span>{userEmail}</span>}
          </Typography>
          <Typography variant="body1" paragraph>
            REDUCE COST, <br></br>SAVE TIME,<br></br>AND IMPROVE CASH FLOW
            <br></br>WITH E-BILLING APP
          </Typography>
          <Button href="/billing" style={buttonStyle} onClick={handleLogout}>
            PAY BILLS HERE!
          </Button>
        </Box>
        <Box>
          <img
            src={face}
            alt="face.png"
            style={{
              width: "1025px",
              height: "576px",
              marginTop: "3vh",
              marginLeft: "60vh",
            }}
          />
        </Box>
      </Box>
    </>

    // <div className="container">
    //   <nav>
    //     <div className="title">E-BILLING APP</div>
    //     <div className="nav-buttons">
    //       <a href="/login">LOG OUT</a>
    //     </div>
    //   </nav>

    //   <section className="Dashboard">

    //     <div className="About-main">
    //       <h1>WELCOME,{userEmail && <span>{userEmail}</span>} </h1>
    //       <p>REDUCE COST, SAVE TIME, AND IMPROVE CASH FLOW WITH E-BILLING APP</p>
    //       <div className="main_button">
    //         <a href="/billing" style={buttonStyle}  onClick={handleLogout}>
    //           PAY BILLS HERE!
    //         </a>
    //       </div>
    //     </div>

    //     <div>
    //       <img className="face" src={face} alt="face.png" />
    //     </div>

    //   </section>
    // </div>
  );
};

export default Dashboard;
