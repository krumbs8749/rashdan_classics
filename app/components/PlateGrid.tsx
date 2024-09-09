import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import PlateItem from './PlateItem';

const plates = [
  { plateNumber: 'KF 20', price: 'RM 40,000' },
  { plateNumber: 'KF 21', price: 'RM 42,000' },
  { plateNumber: 'KF 22', price: 'RM 45,000' },
  { plateNumber: 'KF 20', price: 'RM 40,000' },
  { plateNumber: 'KF 21', price: 'RM 42,000' },
  { plateNumber: 'KF 22', price: 'RM 45,000' },
  { plateNumber: 'KF 20', price: 'RM 40,000' },
  { plateNumber: 'KF 21', price: 'RM 42,000' },
  // Add more plates as needed
];

const PlatesGrid: React.FC = () => {
  return (
    <Container sx={{ 
      py: 6, 
      backgroundColor: 'white', 
      margin: 0, 
      maxWidth: "100vw !important",
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
      }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 8, fontWeight: 700, fontFamily: '(--font-roboto-medium)'}}>
        LATEST PLATE
      </Typography>
      <Grid container spacing={2} justifyContent="center"  sx={{ py: 6, backgroundColor: 'white', mw: 0, width: "80%", border:"1px solid black", borderRadius: '10px' }}>
        {plates.map((plate, index) => (
          <Grid item key={index}>
            <PlateItem plateNumber={plate.plateNumber} price={plate.price} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PlatesGrid;
