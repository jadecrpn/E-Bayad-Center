import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";

import MeralcoLogo from 'C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Meralco.png';


const billerLogos = {
  'Electricity Company': MeralcoLogo,
};

const BillingOperations = () => {

  const billers = [
    'Electricity Company',
    'Internet Service Provider',
    'Water Utility',
    'Credit Card Company',
    'Mobile Phone Provider',
    'Cable TV Company',
    'Gas Supplier',
    'Insurance Provider',
    'Municipal Taxes',
    'Property Management',
  ];

  const handleBillerClick = (biller) => {
    console.log(`Clicked on: ${biller}`);
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Stack direction="row" spacing={3}>
            <HomeIcon fontSize="large" /> */}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              E-BILLING APP
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: -10 }}>
              PAYBILLS SECTION
            </Typography>
          {/* </Stack> */}
        </Toolbar>
      </AppBar>
    </Box>
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >

    <Box
      sx={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        maxHeight: '50vh', // Set the maximum height for the list
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
      <List>
            {billers.map((biller, index) => (
              <React.Fragment key={biller}>
                <ListItem>
                  <ListItemButton
                    component="div"
                    onClick={() => handleBillerClick(biller)}
                  >
                    <ListItemIcon>
                    <img
                        src={billerLogos[biller] || 'path/to/default_logo.png'}
                        alt={`${biller} Logo`}
                        style={{ width: '24px', height: '24px' }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={`${index + 1}. ${biller}`} />
                  </ListItemButton>
                </ListItem>
                {index !== billers.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};
export default BillingOperations;
