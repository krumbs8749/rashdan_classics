import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import bottomPic from '../images/bottom_pic.png'; // Import image from app/images

const UpdateSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        height: '400px',  // Adjust height as per the image aspect ratio
        backgroundImage: `url(${bottomPic.src})`,
        backgroundColor: 'white',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,  // Adding some padding for small screens
        py: 4,
      }}
    >
      {/* Overlay Heading */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 3,  // Margin bottom for spacing from buttons
          fontWeight: 'bold',
          color: '#fff',  // White font for the heading
        }}
      >
        Stay updated with us
      </Typography>

      {/* Buttons Container */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,  // Space between buttons
          flexWrap: 'wrap',
          justifyContent: 'center',  // Center buttons horizontally
          alignItems: 'center',  // Align buttons in the center vertically
        }}
      >
        {/* View All Plates Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',  // White background
            color: '#333',  // Black text
            px: 3,
            py: 1,
            borderRadius: '8px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
          }}
        >
          View All Plates
        </Button>

        {/* Contact Us Button */}
        <Button
          variant="outlined"
          sx={{
            color: '#fff',  // White text
            borderColor: '#fff',  // White border
            px: 3,
            py: 1,
            borderRadius: '8px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#333',  // Text turns black on hover
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateSection;
