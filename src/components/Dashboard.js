import React, { useState, useEffect } from "react";
import face from "../Assets/face.png";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    setUserEmail(storedEmail);
  }, []);

  const navigate = useNavigate();

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
          overflowX: "hidden",
        }}
      >
        <Box sx={{ flex: 1, marginLeft: "13vh", textTransform: "uppercase" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginTop: "1vh", marginBottom: "10vh" }}
          >
            Welcome, {userEmail && <span>{userEmail}</span>}
          </Typography>
          <Typography variant="h4" paragraph sx={{ fontWeight: "bold" }}>
            REDUCE COST, <br></br>SAVE TIME,<br></br>AND IMPROVE CASH FLOW
            <br></br>WITH E-BILLING APP
          </Typography>
          <Button
            href="/billing"
            variant="contained"
            onClick={() => navigate("/billing")}
            sx={{
              marginTop: "3vh",
              bgcolor: "#F27C22",
              color: "Black",
              border: "2px solid #000000",
              margin: "30px auto",
              height: "6vh",
            }}
          >
            PAY BILLS HERE!
          </Button>
        </Box>
        <Box>
          <img
            src={face}
            position="fixed"
            alt="face.png"
            style={{
              width: "1025px",
              height: "576px",
              marginTop: "3vh",
              marginRight: "-15vh",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
