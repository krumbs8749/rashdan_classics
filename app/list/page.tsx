"use client";
import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Container, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import PlateItem from "../components/PlateItem";  // Assuming this is the same PlateItem component you created earlier

const NumberPlateList: React.FC = () => {
  const [plates, setPlates] = useState([
    { plateNumber: "KF 20", price: "RM 40,000" },
    { plateNumber: "KF 21", price: "RM 42,000" },
    { plateNumber: "KF 22", price: "RM 45,000" },
    // Add more plates as necessary
  ]);
  
  const [filters, setFilters] = useState({
    search: "",
    minPrice: "RM1,000",
    maxPrice: "RM10,000",
    type: "Golden Number",
    digits: 1
  });

  // Handle filter change
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name!]: value });
  };

  return (
    <Container sx={{ maxWidth: '100vw !important', margin: 0, background: 'linear-gradient(to bottom, #E0FF24, white)', py: 6 }}>
      {/* Search Bar and Filters */}
      <Box sx={{  borderRadius: 2, p: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          SEARCH FOR PLATE
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {/* Plate Search */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Eg. E411"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
            />
          </Grid>

          {/* Min Price */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth>
              <InputLabel>Price (Min)</InputLabel>
              <Select
                value={filters.minPrice}
                label="Price (Min)"
                name="minPrice"
                onChange={handleFilterChange}
              >
                <MenuItem value="RM1,000">RM 1,000</MenuItem>
                <MenuItem value="RM5,000">RM 5,000</MenuItem>
                <MenuItem value="RM10,000">RM 10,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Max Price */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth>
              <InputLabel>Price (Max)</InputLabel>
              <Select
                value={filters.maxPrice}
                label="Price (Max)"
                name="maxPrice"
                onChange={handleFilterChange}
              >
                <MenuItem value="RM10,000">RM 10,000</MenuItem>
                <MenuItem value="RM50,000">RM 50,000</MenuItem>
                <MenuItem value="RM100,000">RM 100,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Type */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={filters.type}
                label="Type"
                name="type"
                onChange={handleFilterChange}
              >
                <MenuItem value="Golden Number">Golden Number</MenuItem>
                <MenuItem value="VIP Number">VIP Number</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Digits */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth>
              <InputLabel>No. of Digits</InputLabel>
              <Select
                value={filters.digits}
                label="No. of Digits"
                name="digits"
                onChange={handleFilterChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Advanced Search Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" startIcon={<i className="fas fa-filter"></i>}>
              Advanced Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Plates Grid */}
      <Grid container spacing={4}>
        {plates.map((plate, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <PlateItem plateNumber={plate.plateNumber} price={plate.price} />
          </Grid>
        ))}
      </Grid>


      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>Next</Button>
      </Box>
    </Container>
  );
};

export default NumberPlateList;
