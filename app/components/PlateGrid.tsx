"use client";
import React from "react";
import { Typography, Grid, Container, Button, Box } from "@mui/material";
import PlateItem from "./PlateItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import the arrow icon

const plates = [
  { plateNumber: "KF 20", price: "RM 40,000" },
  { plateNumber: "KF 21", price: "RM 42,000" },
  { plateNumber: "KF 22", price: "RM 45,000" },
  { plateNumber: "KF 20", price: "RM 40,000" },
  { plateNumber: "KF 21", price: "RM 42,000" },
  { plateNumber: "KF 22", price: "RM 45,000" },
  { plateNumber: "KF 20", price: "RM 40,000" },
  { plateNumber: "KF 21", price: "RM 42,000" },
  // Add more plates as needed
];

const PlatesGrid: React.FC = () => {
  // Get theme and useMediaQuery to detect screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();
  return (
    <Container
      sx={{
        py: 6,
        backgroundColor: "white",
        margin: 0,
        maxWidth: "100vw !important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        textAlign="center"
        sx={{ mb: 8, fontWeight: 700, fontFamily: "(--font-roboto-medium)" }}
      >
        LATEST PLATE
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space around"
        sx={{
          py: 6,
          pw: 6,
          backgroundColor: "white",
          margin: 0,
          width: "100%",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        {plates.map((plate, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={6}
            md={4}
            lg={3}
            sx={{ padding: "1rem 1rem" }}
          >
            <PlateItem
              plateNumber={plate.plateNumber}
              price={plate.price}
              isMobile={isMobile}
            />
          </Grid>
        ))}
      </Grid>

      {/* View All Plates Button */}
      <Box
        sx={{ display: "flex", justifyContent: "center", my: 4 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white", // Set background to white
            color: "black", // Set text color to black
            "&:hover": {
              backgroundColor: "#f0f0f0", // Optional: Slightly darker white on hover
            },
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            router.push("/list");
          }}
        >
          View All Plates
        </Button>
      </Box>
    </Container>
  );
};

export default PlatesGrid;
