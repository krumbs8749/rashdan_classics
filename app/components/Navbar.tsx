import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import rc_logo from '../images/rc_logo.png'

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: "white"}}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          <img src={rc_logo.src} alt="Rashdan Classics Logo" style={{ height: '50px' }} />
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button href="#" color="inherit">Home</Button>
          <Button href="#" color="inherit">Number Plate List</Button>
          <Button href="#" color="inherit">About Us</Button>
          <Button href="#" variant="contained" color="primary">Contact Us</Button>
        </Box>
      </Toolbar>
      
      <Divider sx={{ fontSize: '1rem'}}/>
    </AppBar>
  );
};

export default NavBar;
