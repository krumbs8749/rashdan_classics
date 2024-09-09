import React from 'react';
import { Box, Typography, Button, TextField, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        background: 'linear-gradient(to bottom, #E0FF24, white)',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: "bold", lineHeight:'2rem', fontFamily: ' var(--font-roboto-medium)'}}>
        TIMELESS ELEGANCE
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Stand Out on the Road with Exclusive Plates!
      </Typography>

      {/* Search Bar */}
      <Box component="form" sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <TextField
          id="search"
          label="Eg. E411"
          variant="outlined"
          sx={{ width: '300px' }}
        />
      </Box>

      {/* Call to Action Button */}
      <Button variant="contained" size="large" sx={{ backgroundColor: "white", color: 'black' }}>
        View All Plates
      </Button>
    </Box>
  );
};

export default Hero;
