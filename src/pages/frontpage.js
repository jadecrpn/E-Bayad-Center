import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Sbsl from "../Assets/Sbsl.png";

const Front = () => {
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
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "2vh" }}>
        <img
          src={Sbsl}
          alt="Sbsl.png"
          style={{ width: "1025px", height: "576px" }}
        />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          sx={{
            bgcolor: "#F27C22",
            color: "Black",
            border: "1px solid #000000",
            marginTop: "-40vh",
            width: "200px", // Adjust the width as needed
            height: "50px", // Adjust the height as needed
          }}
        >
          Register
        </Button>
      </Box>
      <footer style={{ position: "fixed", bottom: -80, width: "100%", textAlign: "center"}}>
        <p>Copyright &#169; 2024 E-BILLING APP. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Front;
