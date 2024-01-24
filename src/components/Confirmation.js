// confirmation.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve transaction details from location state
  const { billerName, billerImage, amount, accountNumber, accountName, bank, bankAccountNumber } = location.state;

  const handleConfirmation = () => {
    // Perform any necessary logic for confirming the transaction

    // You can navigate to a success page or any other page as needed
    navigate('/receipt', {
        state: {
          billerName,
          billerImage,
          amount,
          accountNumber,
          accountName,
          bank,
          bankAccountNumber,
        },
      });
  };

  const handleBack = () => {
    navigate('/transaction', {
      state: {
        billerName,
        billerImage,
        amount,
        accountNumber,
        accountName,
        bank,
        bankAccountNumber,
      },
    });
};
    
    

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ bgcolor: '#F27C22', border: '2px solid #000000' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
              E-BILLING APP
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: -10, fontWeight: 'bold', color: 'black' }}>
              CONFIRMATION
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Stack spacing={2} direction="row" sx={{ paddingLeft: '20%', paddingTop: 10 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: '#F27C22', color: 'Black', border: '2px solid #000000' }}
          onClick={handleBack}
        >
          Back
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
          margin: '15px auto', // Adjust margin as needed
          padding: '15px',
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'black',  fontWeight: 'bold' }}>
          Transaction Summary
        </Typography>

        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2 }}>
          Biller: {billerName}
        </Typography>
        <img
          src={billerImage}
          alt="Biller Logo"
          style={{ width: '40px', height: '40px', marginTop: '5px', marginBottom: '5vh' }}
        />

        <Typography variant="body1" component="div" sx={{ color: 'black', marginTop: 2, textAlign: 'right'}}>
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

        <Button
          variant="contained"
          sx={{
            bgcolor: '#F27C22',
            color: 'Black',
            border: '2px solid #000000',
            margin: '30px auto',
            marginBottom:'1vh'
          }}
          onClick={handleConfirmation}
        >
          Confirm
        </Button>
      </Box>
    </>
  );
};

export default Confirmation;
