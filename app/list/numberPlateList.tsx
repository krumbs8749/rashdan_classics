'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Container,
  Button,
  MenuItem,
  Menu,
  InputAdornment,
  IconButton,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Dropdown Icon
import PlateItem from '../components/PlateItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useAppContext } from '../context/AppContext';
import { useSearchParams } from 'next/navigation';

const Fallback = () => <div>Loading...</div>;

const NumberPlateList: React.FC = () => {
  const { plates } = useAppContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const searchParams = useSearchParams(); // Access search params
  const searchQuery = searchParams.get('search') || '';

  const [filters, setFilters] = useState({
    search: '',
    minPrice: '', // Allow user input for minPrice
    maxPrice: '', // Allow user input for maxPrice
    type: '', // Type can still be selected from a dropdown
    digits: '', // Allow user input for digits
  });

  const [filtersApplied, setFiltersApplied] = useState(false); // Track whether filters have been applied
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 12; // Max 12 items per page

  // Menu anchor state
  const [anchorElMinPrice, setAnchorElMinPrice] = useState<null | HTMLElement>(
    null
  );
  const [anchorElMaxPrice, setAnchorElMaxPrice] = useState<null | HTMLElement>(
    null
  );
  const [anchorElDigits, setAnchorElDigits] = useState<null | HTMLElement>(
    null
  );

  const openMinPrice = Boolean(anchorElMinPrice);
  const openMaxPrice = Boolean(anchorElMaxPrice);
  const openDigits = Boolean(anchorElDigits);

  // Handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  // Separate handler for TextField inputs
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  // Separate handler for Select inputs (e.g., dropdowns)
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name!]: value });
  };

  // Handle filter change from the dropdown
  const handleMenuSelect = (
    event: React.MouseEvent<HTMLElement>,
    type: string,
    value: string
  ) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setFilters({ ...filters, [type]: numericValue });
    if (type === 'minPrice') setAnchorElMinPrice(null);
    if (type === 'maxPrice') setAnchorElMaxPrice(null);
    if (type === 'digits') setAnchorElDigits(null);
  };

  // Apply filters
  const handleApplyFilters = () => {
    setFiltersApplied(true); // Set filters as applied
    setCurrentPage(1); // Reset to first page after applying filters
  };

  // Reset/Clear filters
  const handleClearFilters = () => {
    setFilters({
      search: '',
      minPrice: '',
      maxPrice: '',
      type: '',
      digits: '',
    });
    setFiltersApplied(false);
    setCurrentPage(1);
  };

  // Convert price values to numbers for comparison
  const convertPrice = (price: string) => {
    return parseInt(price.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    // Filter plates based on the search query
    if (searchQuery && !filtersApplied) {
      setFilters((prev) => ({ ...prev, search: searchQuery }));
      setFiltersApplied(true);
    }
  }, [searchQuery]);

  // Filter the plates based on search and filters
  const filteredPlates = filtersApplied
    ? plates.filter((plate) => {
        const platePrice = convertPrice(plate.price);
        const minPrice = filters.minPrice ? convertPrice(filters.minPrice) : 0;
        const maxPrice = filters.maxPrice
          ? convertPrice(filters.maxPrice)
          : Infinity;

        const matchesSearch = plate.plateNumber
          .toLowerCase()
          .replace(/\s+/g, '') // Ignore spaces in the plate number
          .includes(filters.search.toLowerCase().replace(/\s+/g, '')); // Ignore spaces in the search input

        const matchesPrice =
          (!filters.minPrice || platePrice >= minPrice) &&
          (!filters.maxPrice || platePrice <= maxPrice);

        const matchesType = !filters.type || plate.type === filters.type;
        const matchesDigits =
          !filters.digits ||
          plate.plateNumber.replace(/\s+/g, '').length ===
            parseInt(filters.digits);

        return matchesSearch && matchesPrice && matchesType && matchesDigits;
      })
    : plates; // If no filters applied, show all plates

  // Paginate the filtered plates
  const paginatedPlates = filteredPlates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPlates.length / itemsPerPage);

  return (
    <Container
      sx={{
        maxWidth: '100vw !important',
        background: 'white',
        margin: 0,
        padding: 0,
        '&.MuiContainer-root': { padding: 0 },
      }}
    >
      {/* Search Bar and Filters */}
      <Box
        sx={{
          borderRadius: 2,
          p: 4,
          mb: 4,
          background: 'linear-gradient(to bottom, #E0FF24, white)',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}
        >
          SEARCH FOR PLATE
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {/* Plate Search */}
          <Grid item xs={6} sm={6} md={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Eg. E411"
              name="search"
              value={filters.search}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Min Price with dropdown icon inside */}
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Price (Min)"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleInputChange}
              InputProps={{
                inputProps: { type: 'number' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => setAnchorElMinPrice(e.currentTarget)}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Menu
              anchorEl={anchorElMinPrice}
              open={openMinPrice}
              onClose={() => setAnchorElMinPrice(null)}
            >
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'minPrice', 'RM1,000')}
              >
                RM 1,000
              </MenuItem>
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'minPrice', 'RM5,000')}
              >
                RM 5,000
              </MenuItem>
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'minPrice', 'RM10,000')}
              >
                RM 10,000
              </MenuItem>
            </Menu>
          </Grid>

          {/* Max Price with dropdown icon inside */}
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Price (Max)"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleInputChange}
              InputProps={{
                inputProps: { type: 'number' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => setAnchorElMaxPrice(e.currentTarget)}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Menu
              anchorEl={anchorElMaxPrice}
              open={openMaxPrice}
              onClose={() => setAnchorElMaxPrice(null)}
            >
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'maxPrice', 'RM10,000')}
              >
                RM 10,000
              </MenuItem>
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'maxPrice', 'RM50,000')}
              >
                RM 50,000
              </MenuItem>
              <MenuItem
                onClick={(e) => handleMenuSelect(e, 'maxPrice', 'RM100,000')}
              >
                RM 100,000
              </MenuItem>
            </Menu>
          </Grid>

          {/* Type */}
          <Grid item xs={6} sm={3} md={2}>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={filters.type}
                label="Type"
                name="type"
                onChange={handleSelectChange}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Golden Number">Golden Number</MenuItem>
                <MenuItem value="VIP Number">VIP Number</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Digits with dropdown icon inside */}
          <Grid item xs={6} sm={3} md={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="No. of Digits"
              name="digits"
              value={filters.digits}
              onChange={handleInputChange}
              InputProps={{
                inputProps: { type: 'number' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={(e) => setAnchorElDigits(e.currentTarget)}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Menu
              anchorEl={anchorElDigits}
              open={openDigits}
              onClose={() => setAnchorElDigits(null)}
            >
              <MenuItem onClick={(e) => handleMenuSelect(e, 'digits', '1')}>
                1
              </MenuItem>
              <MenuItem onClick={(e) => handleMenuSelect(e, 'digits', '2')}>
                2
              </MenuItem>
              <MenuItem onClick={(e) => handleMenuSelect(e, 'digits', '3')}>
                3
              </MenuItem>
            </Menu>
          </Grid>

          {/* Apply and Clear Filters */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              onClick={handleApplyFilters}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '&:hover': { backgroundColor: '#f0f0f0' },
                mr: 2,
              }}
            >
              Apply Filters
            </Button>
            <Button
              variant="outlined"
              onClick={handleClearFilters}
              sx={{
                color: 'black',
                borderColor: 'black',
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              Reset Filters
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Plates Grid */}

      <Grid
        container
        spacing={4}
        sx={{ background: 'white', padding: '0 1rem' }}
      >
        {paginatedPlates.map((plate, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <PlateItem
              plateNumber={plate.plateNumber}
              price={plate.price}
              isMobile={isMobile}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box
        sx={{
          display: 'flex',
          background: 'white',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default NumberPlateList;
