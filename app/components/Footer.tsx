'use client';
1;
import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';
import rcLogo from '../images/rc_logo.png'; // Import the image from app/images

import Divider from '@mui/material/Divider';
import contactDealerGeneral from './Contact';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', color: 'black', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Left Side: Logo and Text */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <img
                src={rcLogo.src} // Use the imported image
                alt="Rashdan Classics Logo"
                style={{ height: '50px', marginBottom: '20px' }}
              />
            </Box>
          </Grid>

          {/* Right Side: Quick Links */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h1"
              sx={{
                mb: 1,
                fontFamily: 'Hanken Grotesk',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
              mb={2}
            >
              Premium plates with clear pricing and fast handling – all at a
              fair cost.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  276-1-1, Wisma Mutiara, Off Jalan Genting Kelang, 53300
                  Setapak, Kuala Lumpur (HQ)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  admin@plcarworld.com.my
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  012-526 9345
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link
                  href="/about"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', mb: 1 }}
                >
                  About Us
                </Link>
                <Link
                  href="/list"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', mb: 1 }}
                >
                  All Plate Numbers
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', mb: 1 }}
                  onClick={contactDealerGeneral}
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'block', mb: 1 }}
                >
                  Privacy Policy
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Rashdan Classics. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
