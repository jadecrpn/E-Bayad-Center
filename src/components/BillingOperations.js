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
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

import Cignal from '../Assets/Cignal.png';
import Converge from '../Assets/Converge_ICT_.png';
import HomeCredit from '../Assets/Home-Credit.png';
import Maynilad from '../Assets/Maynilad.png';
import Meralco from '../Assets/Meralco.png';
import Pagibig from '../Assets/Pag-ibig.png';
import PLDT from '../Assets/PLDT.png';
import Prulife from '../Assets/Pru-life.jpg';
import Sky from '../Assets/Sky-Cable.png';
import Sunlife from '../Assets/Sunlife.png';


const BillingOperations = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard')}

  const handleBillerClick = (biller, billerImage) => {
    // Perform any necessary logic here

    // Navigate to the Transaction component
    navigate('/transaction', { state: { billerName: biller, billerImage } });
  }

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
      <Button variant="contained" sx={{bgcolor: '#F27C22', color: 'Black', border: '2px solid #000000',}} onClick={handleBack}>Back</Button>
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
              </ListSubheader>}>


          <ListItem disablePadding>
            <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Cignal", Cignal)}>
              <ListItemIcon>
              <img
                className="Cignal"
                src={Cignal}
                alt={"Cignal"}
                style={{ width: '24px', height: '24px' }}
              />
              </ListItemIcon>
              <ListItemText primary="Cignal" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Converge", Converge)}>
              <ListItemIcon>
              <img
                className="Converge"
                src={Converge}
                alt={"Converge"}
                style={{ width: '24px', height: '24px' }}
              />
              </ListItemIcon>
              <ListItemText primary="Converge" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Home-Credit", HomeCredit)}>
              <ListItemIcon>
              <img className="Home-Credit" 
              src={HomeCredit} 
              alt={"Home-Credit"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Home-Credit" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Maynilad", Maynilad)}>
              <ListItemIcon>
              <img className="Maynilad" 
              src={Maynilad} 
              alt={"Maynilad"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Maynilad" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Meralco", Meralco)}>
              <ListItemIcon>
              <img className="Meralco" 
              src={Meralco} 
              alt={"Meralco"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Meralco" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Pag-Ibig", Pagibig)}>
              <ListItemIcon>
              <img className="Pag-Ibig Loan" 
              src={Pagibig} 
              alt={"Pag-Ibig Loan"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Pag-Ibig Loan" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("PLDT", PLDT)}>
              <ListItemIcon>
              <img className="PLDT" 
              src={PLDT} 
              alt={"PLDT"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="PLDT" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Pru Life UK", Prulife)}>
              <ListItemIcon>
              <img className="Pru Life UK" 
              src={Prulife} 
              alt={"CPru Life UK"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Pru Life UK" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("Sky-Cable", Sky)}>
              <ListItemIcon>
              <img className="Sky Cable" 
              src={Sky} 
              alt={"Sky Cable"}
              style={{ width: '24px', height: '24px' }}/>
              </ListItemIcon>
              <ListItemText primary="Sky Cable" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
          <ListItemButton sx={{ paddingTop: '15px' }}
              onClick={() => handleBillerClick("SunLife Insurance", Sunlife)}>
              <ListItemIcon>
              <img className="Sun Life Insurance" 
              src={Sunlife} 
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