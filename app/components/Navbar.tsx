"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import rc_logo from '../images/rc_logo.png'
import { useRouter } from 'next/navigation'

const NavBar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  // Get theme and useMediaQuery to detect screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect screen sizes smaller than 600px

  // Drawer menu items for mobile view
  const drawerItems = (
    <Box sx={{ width: 250, p: 2 }}>
      <Button href="/">Home</Button>
      <Button href="/list">Number Plate List</Button>
      <Button href="#">About Us</Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
      {isMobile && (
          <>
            {/* Mobile View with Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              {drawerItems}
            </Drawer>
          </>
        ) }
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={rc_logo.src} alt="Rashdan Classic Logo" style={{ height: isMobile ? '25px' :'40px' }} />
        </Typography>

        {!isMobile && (
          <>
            {/* Desktop View with Navigation Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button href="/" color="inherit">
                Home
              </Button>
              <Button href="/list" color="inherit">
                Number Plate List
              </Button>
              <Button href="#" color="inherit">
                About Us
              </Button>
              <Button href="#" color="inherit">
                Contact Us
              </Button>
            </Box>
          </>
        )}
          <Button href="#" variant="contained" color="success" sx={{ marginLeft: 2 }} onClick={() => {router.push('/')}}>
            Contact Us
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
