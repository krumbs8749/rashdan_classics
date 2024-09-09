import React from "react";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // MUI icon for WhatsApp
import rcLogo from "../images/rc_logo.png"; // Import the Rashdan Classics logo

interface PlateItemProps {
  plateNumber: string;
  price: string;
}

const PlateItem: React.FC<PlateItemProps> = ({ plateNumber, price }) => {
  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "200px" }, // Responsive width (100% on small screens, fixed on larger screens)
        textAlign: "center",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff", // Use white background to stand out
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease", // Add hover effect for better interactivity
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge on hover
        },
      }}
    >
      {/* Logo Image */}
      <img
        src={rcLogo.src} // Use the imported image
        alt="Rashdan Classics Logo"
        style={{ height: "25px", marginBottom: "20px" }}
      />

      {/* Plate Number */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "4px",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {plateNumber}
        </Typography>
      </Box>

      {/* WhatsApp Icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Price */}
        <Typography
          variant="body1"
          sx={{ marginBottom: "12px", fontWeight: "bold" }}
        >
          {price}
        </Typography>
        <WhatsAppIcon sx={{ color: "#25D366", fontSize: "28px" }} />
      </Box>
    </Box>
  );
};

export default PlateItem;
