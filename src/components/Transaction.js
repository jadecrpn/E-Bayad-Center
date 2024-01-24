import { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transaction = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [billerName, setBillerName] = useState('');
    const [billerImage, setBillerImage] = useState('');
    const [bank, setBank] = useState('');
    const [amount, setAmount] = useState(''); // Add state for amount
  const [accountNumber, setAccountNumber] = useState(''); // Add state for accountNumber
  const [accountName, setAccountName] = useState(''); // Add state for accountName
  const [bankAccountNumber, setBankAccountNumber] = useState(''); // Add state for bankAccountNumber
    
    useEffect(() => {
        // Retrieve state from the location
        if (location.state) {
          setBillerName(location.state.billerName);
          setBillerImage(location.state.billerImage);
        }
      }, [location.state]);
    
      const handleChange = (event) => {
        setBank(event.target.value);
      };

      const handleNext = () => {
    //     const amount = ('');
    // const accountNumber = ('');
    // const accountName = ('');
    // const bankAccountNumber = ('');
        // Navigate to the Confirmation component with relevant data
        navigate('/confirmation', {
          state: {
            billerName,
            billerImage,
            amount,
            accountNumber,
            accountName ,
            bank,
            bankAccountNumber ,
          },
        });
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
            <Typography
              variant="h7"
              component="div"
              sx={{ flexGrow: -10, fontWeight: "bold", color: "black" }}
            >
              PAYBILLS SECTION
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Stack
        spacing={2}
        direction="row"
        sx={{ paddingLeft: "20%", paddingTop: 10 }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#F27C22",
            color: "Black",
            border: "2px solid #000000",
          }}
        >
          Back
        </Button>

        <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "23%" }}>
        <img
          src= {billerImage}
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <Typography variant="h6" component="div" sx={{ color: "black" }}>
          {billerName}
          </Typography>
        </Box>
      </Stack>



      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          border: "2px solid #000000",
          width: "25%",
          margin: "15px auto", // Adjust margin as needed
          padding: "15px",
        }}
      >
        <TextField
          label="Amount"
          variant="outlined"
          type="number" // Assuming amount is a number
          margin="normal"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update state on change
        />
        <TextField
          label="Account No. (10-digits)"
          variant="outlined"
          type="text"
          margin="normal"
          fullWidth
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <TextField
          label="Account Name"
          variant="outlined"
          type="text"
          margin="normal"
          fullWidth
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />

        <Box sx={{ minWidth: 385, marginTop: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="bankName">Bank</InputLabel>
            <Select
              labelId="bankName"
              id="demo-simple-select"
              value={bank}
              label="Bank"
              onChange={handleChange}
            >
              <MenuItem value="Bank of The Philippine Islands">
                Bank of The Philippine Islands
              </MenuItem>
              <MenuItem value="BDO_Unibank">BDO_Unibank</MenuItem>
              <MenuItem value="China Banking Corporation">
                China Banking Corporation
              </MenuItem>
              <MenuItem value="Landbank of the Philippines">
                Landbank of the Philippines
              </MenuItem>
              <MenuItem value="Philippine National Bank">
                Philippine National Bank
              </MenuItem>
              <MenuItem value="Union Bank of The Philippines">
                Union Bank of The Philippines
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Bank Account No."
          variant="outlined"
          type="text"
          margin="normal"
          fullWidth
          value={bankAccountNumber}
          onChange={(e) => setBankAccountNumber(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "#F27C22",
            color: "Black",
            border: "2px solid #000000",
            margin: "10px auto",
          }}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Transaction;