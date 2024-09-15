'use client';
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Initialize Swiper modules
SwiperCore.use([Pagination]);

interface PaperItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PaperItem: React.FC<PaperItemProps> = ({ icon, title, description }) => (
  <Paper
    elevation={3}
    sx={{ p: 3, textAlign: 'center', borderRadius: '10px', minWidth: '250px' }}
  >
    {icon}
    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mt: 2 }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ mt: 2, color: '#555' }}>
      {description}
    </Typography>
  </Paper>
);

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the screen is small (mobile)

  // Define service items
  const services = [
    {
      icon: <DescriptionIcon sx={{ fontSize: 60, color: '#000' }} />,
      title: 'Registration and Renewal Services',
      description:
        'We manage everything from vehicle registration to renewing your road tax and insurance, streamlining the process to eliminate any stress.',
    },
    {
      icon: <TransferWithinAStationIcon sx={{ fontSize: 60, color: '#000' }} />,
      title: 'Inspection and Ownership Transfer',
      description:
        'Our comprehensive services ensure a straightforward vehicle ownership transfer, backed by detailed inspections to guarantee a smooth transition.',
    },
    {
      icon: <SwapHorizIcon sx={{ fontSize: 60, color: '#000' }} />,
      title: 'Plate Interchange Services',
      description:
        'With our Plate Interchange service, you can effortlessly exchange your current plate number for one that better suits your preference.',
    },
    // Add more services as needed
  ];

  return (
    <Box sx={{ py: 6, background: 'white' }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: 700, fontFamily: '(--font-roboto-medium)' }}
        >
          OUR JOURNEY AND MISSION
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          <b>
            <i>Rashdan Classic</i>
          </b>{' '}
          is a premier destination for discerning collectors and enthusiasts
          seeking the finest in curated and exclusive government car plates.
          With a commitment to excellence and a keen eye for rarity,{' '}
          <b>
            <i>Rashdan Classic</i>
          </b>{' '}
          offers a unique selection of distinctive number plates that embody
          prestige and exclusivity. Each plate in our collection is carefully
          chosen for its historical significance, aesthetic appeal, and rarity,
          ensuring that our clients receive only the most distinguished pieces.
        </Typography>

        {/* Services Section */}
        {isMobile ? (
          // Mobile View: Swiper Carousel with Pagination Dots and showing part of the next slide
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1} // Show a bit of the next slide
            pagination={{ clickable: true }}
            style={{ paddingBottom: '40px' }} // Space for the pagination dots
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Box display="flex" justifyContent="center">
                  <PaperItem
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop and Tablet View: Standard Grid
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <PaperItem
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default AboutSection;
