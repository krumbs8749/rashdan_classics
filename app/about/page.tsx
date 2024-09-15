"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import Image from "next/image";
import carPic from "../images/car_image.png"; // Image for the header section
import UpdateSection from "../components/UpdateSection";
import DescriptionIcon from "@mui/icons-material/Description"; // Icon for Experience
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"; // Icon for Certified Supplier
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"; // Icon for Widest Choice

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Initialize Swiper modules
SwiperCore.use([Pagination]);

// PaperItem component representing each service
interface PaperItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PaperItem: React.FC<PaperItemProps> = ({ icon, title, description }) => (
  <Card
    elevation={3}
    sx={{ p: 3, textAlign: "center", borderRadius: "10px", minWidth: "250px" }}
  >
    <CardContent>
      {icon}
      <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const AboutUs = () => {
  // Define service items
  const services = [
    {
      icon: <DescriptionIcon sx={{ fontSize: 60, color: "#000" }} />,
      title: "Over 10 Years Industry Experience",
      description:
        "We have bought and sold thousands of cherished plates since 2011, so we are in the best position to handle your private number plate transaction.",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 60, color: "#000" }} />,
      title: "JPJ Certified Supplier",
      description:
        "We supply private registrations in line with JPJ regulations and can provide one-stop tendering services with a success rate of up to 98%.",
    },
    {
      icon: <SwapHorizIcon sx={{ fontSize: 60, color: "#000" }} />,
      title: "Widest Choice in Malaysia",
      description:
        "With over 10,000 numbers for you to choose from, book your dream number plate from us today to make your car stand out from the crowd!",
    },
  ];

  return (
    <Container
      sx={{
        maxWidth: "100vw !important",
        padding: 0,
        "&.MuiContainer-root": { padding: 0 },
        background: "white",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          borderRadius: 2,
          p: 4,
          mb: 4,
          background: "linear-gradient(to bottom, #E0FF24, white)",
          textAlign: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 4,
            fontFamily: "var(--font-roboto-medium)",
          }}
        >
          ABOUT US
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            width: { xs: "100%", md: "59%" },
            background: "#FAFAFA",
            padding: "1rem",
          }}
        >
          {/* Text Section */}
          <Box sx={{ width: "100%", height: "100%", textAlign: "left" }}>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Who is Rashdan Classic ?
            </Typography>

            <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
              We take pride in being a reputable car plate number dealer in
              Malaysia
            </Typography>

            <Typography variant="body1" sx={{ my: 2 }}>
              Rashdan Classic is a premier destination for discerning collectors
              and enthusiasts seeking the finest in curated and exclusive
              government car plates. With a commitment to excellence and a keen
              eye for rarity, Rashdan Classic offers a unique selection of
              distinctive number plates that embody prestige and exclusivity.
              Each plate in our collection is carefully chosen for its
              historical significance, aesthetic appeal, and rarity, ensuring
              that our clients receive only the most distinguished pieces.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "white",
                color: "black",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              Contact Us
            </Button>
          </Box>

          {/* Image Section */}
          <Box>
            <Image
              src={carPic}
              alt="Car image"
              width={250}
              height={400}
              style={{ borderRadius: "10px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Why Buy From Rashdan Classic Section */}
      <Box
        sx={{
          width: "100%",
          py: 8,
          background: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          WHY BUY FROM RASHDAN CLASSIC
        </Typography>

        {/* Mobile View: Swiper Carousel */}
        <Box
          sx={{
            display: { xs: "block", md: "none" }, // Show Swiper on mobile, hide on desktop
          }}
        >
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={1} // Show a bit of the next slide
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }} // Space for the pagination dots
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
        </Box>

        {/* Desktop View: Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: { xs: "none", md: "flex" }, // Show Grid on desktop, hide on mobile
          }}
        >
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
      </Box>

      <UpdateSection />
    </Container>
  );
};

export default AboutUs;
