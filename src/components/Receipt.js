// receipt.js
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve transaction details from location state
  const { billerName, billerImage, amount, accountNumber, accountName, bank, bankAccountNumber } = location.state;

  // Generate a random reference number
  const generateReferenceNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  };

  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    setReferenceNumber(generateReferenceNumber().toString());
  }, []); // Run only once on component mount

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ bgcolor: '#F27C22', border: '2px solid #000000' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
              E-BILLING APP
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: -10, fontWeight: 'bold', color: 'black' }}>
              RECEIPT
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Stack spacing={2} direction="row" sx={{ paddingLeft: '20%', paddingTop: 10 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: '#F27C22', color: 'Black', border: '2px solid #000000' }}
          onClick={() => navigate('/dashboard')} // Reload the page for a new receipt
        >
          Home Page
        </Button>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
          border: '2px solid #000000',
          width: '25%',
          margin: '15px auto',
          padding: '15px',
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'black', fontWeight: 'bold', marginTop:'-1vh' }}>
          Receipt
        </Typography>

        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2 }}>
          Biller: {billerName}
        </Typography>
        <img
          src={billerImage}
          alt="Biller Logo"
          style={{ width: '40px', height: '40px', marginTop: '5px', marginBottom: '5vh' }}
        />

        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2 }}>
          Amount: {amount}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black' }}>
          Account Number: {accountNumber}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black' }}>
          Account Name: {accountName}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black' }}>
          Bank: {bank}
        </Typography>
        <Typography variant="body1" component="div" sx={{ color: 'black' }}>
          Bank Account Number: {bankAccountNumber}
        </Typography>

        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2 }}>
          Reference Number: {referenceNumber}
        </Typography>
      </Box>
    </>
  );
};

export default Receipt;
