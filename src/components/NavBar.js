import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navigation = () => {


    const navigate = useNavigate();

    const isLoginPage = window.location.pathname === '/login';

    const handleButtonClick = () => {
      if (isLoginPage) {
          navigate('/signup');

  
      } else {
        
          // Handle logout logic or navigate to another page
          navigate('/login');
      }
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
              to={isLoginPage ? '/signup' : '/login'}
              variant="contained"
              sx={{
                bgcolor: "#F27C22",
                color: "Black",
                border: "1px solid #000000",
              }}
              onClick={handleButtonClick}
            >
              {isLoginPage ? 'REGISTER' : 'LOG IN'}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
        {/* <div className="title">E-BILLING APP</div>
        <button style={buttonStyle} onClick={handleButtonClick}>
            {isLoginPage ? 'SIGN UP' : 'LOG IN'}
        </button> */}
    </>
  );

};


export default Navigation;