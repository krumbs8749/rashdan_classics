'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronDownIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import rc_logo from '../images/rc_logo.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Next.js Link for navigation
import contactDealerGeneral from './Contact';

const NavBar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  // Get theme and useMediaQuery to detect screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect screen sizes smaller than 600px

  // Toggle drawer
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpenDrawer(open);
    };

  // Menu items for both desktop and mobile
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Number Plate List', href: '/list', icon: <ChevronDownIcon /> },
    { label: 'About Us', href: '/about' },
  ];

  const drawerItems = (
    <Box
      sx={{
        width: '100%',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Close button in the top-right corner */}
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ alignSelf: 'flex-start', mb: '1rem' }}
      >
        <img
          src={rc_logo.src}
          alt="Rashdan Classic Logo"
          style={{ height: isMobile ? '25px' : '40px' }}
        />
      </Typography>

      {menuItems.map((item, index) => (
        <Link key={index} href={item.href} passHref>
          <Button sx={{ color: 'black', fontWeight: 700, fontSize: '1.3rem' }}>
            {item.label}
            {item.icon && item.icon}
          </Button>
        </Link>
      ))}
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2 }}
        onClick={() => router.push('/contact')}
      >
        Contact Us
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              sx={{
                '& .MuiDrawer-paper': {
                  width: '100vw', // Make the drawer full-screen width
                  height: '100%', // Make the drawer full-screen height
                },
              }}
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
              ModalProps={{
                keepMounted: true, // Keep the drawer mounted in the DOM when closed
                disableScrollLock: true, // Prevent background width from changing when drawer opens
              }}
            >
              {drawerItems}
            </Drawer>
          </>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={rc_logo.src}
            alt="Rashdan Classic Logo"
            style={{ height: isMobile ? '25px' : '40px' }}
          />
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <Button sx={{ color: 'black', fontWeight: 700 }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}

        {/* Contact Us button (used in both mobile and desktop) */}
        <Button
          variant="contained"
          color="success"
          sx={{ marginLeft: 2 }}
          onClick={contactDealerGeneral}
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
