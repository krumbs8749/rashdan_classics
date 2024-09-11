"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SearchIcon from "@mui/icons-material/Search"; // Import the search icon
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        background: "linear-gradient(to bottom, #E0FF24, white)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 2,
          fontWeight: "700",
          fontFamily: " var(--font-roboto-medium)",
        }}
      >
        TIMELESS ELEGANCE
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Stand Out on the Road with Exclusive Plates!
      </Typography>

      {/* Search Bar */}
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "center", mb: 4 }}
      >
        <TextField
          variant="outlined"
          placeholder="Eg. E411"
          sx={{
            backgroundColor: "white", // White background 
            borderRadius: "8px", // Slightly rounded corners
            width: "100%", // Full width
            maxWidth: "400px", // Optional: max width for better responsiveness
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc", // Light gray border color
              },
              "&:hover fieldset": {
                borderColor: "#aaa", // Slightly darker on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#333", // Darker border when focused
              },
            },
            padding: "0", // Optional: Adjust padding
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#aaa" }} />{" "}
                  {/* Light gray search icon */}
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      {/* Call to Action Button */}
      <Button
        variant="contained"
        size="large"
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
  );
};

export default Hero;
