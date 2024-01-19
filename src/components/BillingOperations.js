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
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ListSubheader from '@mui/material/ListSubheader';


const BillingOperations = () => {


  return (
    <>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" sx={{ bgcolor: '#F27C22', border: '2px solid #000000', }}>
        <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color:'black'}}>
              E-BILLING APP
            </Typography>
            <Typography variant="h7" component="div" sx={{ flexGrow: -10, fontWeight: 'bold', color:'black'}}>
              PAYBILLS SECTION
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Stack spacing={2} direction="row" sx={{paddingLeft: '20%', paddingTop: 10}}>
      <Button variant="contained" sx={{bgcolor: '#F27C22', color: 'Black', border: '2px solid #000000',}}>Back</Button>
      </Stack>
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}
    >

    <Box
      sx={{
        border: '2px solid #000000',
        width: '100vh',
        maxWidth: 360,
        bgcolor: 'background.paper',
        maxHeight: '40vh', // Set the maximum height for the list
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
        

      <List subheader={
              <ListSubheader sx={{ fontSize: '20px', bgcolor: '#F27C22', color: 'black', }}>
                Choose Your Biller
              </ListSubheader>
            }
      >
      <ListItem disablePadding>
            <ListItemButton sx={{paddingTop: '15px'}}>
              <ListItemIcon>
              <img className="Cignal" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Cignal.png")} 
              alt={"Cignal"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Cignal" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Converge" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Converge_ICT_.png")} 
              alt={"Converge"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Converge ICT Solutions" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Home-Credit" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Home-Credit.png")} 
              alt={"Home-Credit"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Home-Credit" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Maynilad" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Maynilad.png")} 
              alt={"Maynilad"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Maynilad" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Meralco" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Meralco.png")} 
              alt={"Meralco"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Meralco" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Pag-Ibig Loan" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Pag-ibig.png")} 
              alt={"Pag-Ibig Loan"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Pag-Ibig Loan" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="PLDT" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\PLDT.png")} 
              alt={"PLDT"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="PLDT" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Pru Life UK" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Pru-life.jpg")} 
              alt={"CPru Life UK"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Pru Life UK" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Sky Cable" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Sky-Cable.png")} 
              alt={"Sky Cable"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Sky Cable" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <img className="Sun Life Insurance" 
              src={require("C:\\Users\\GWYNN CUJARDO\\Documents\\GitHub\\e-billing\\src\\Assets\\Sunlife.png")} 
              alt={"Sun Life Insurance"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Sun Life Insurance" />
            </ListItemButton>
          </ListItem>
            
            
            
            {/* {billers.map((biller, index) => (
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
            ))} */}
          </List>
        </Box>
      </Box>
    </>
  );
};
export default BillingOperations;
