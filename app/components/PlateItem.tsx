import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // MUI icon for WhatsApp
import rcLogo from "../images/rc_logo.png"; // Import the Rashdan Classics logo

interface PlateItemProps {
  plateNumber: string;
  price: string;
  isMobile?: boolean;
}

const PlateItem: React.FC<PlateItemProps> = ({ plateNumber, price, isMobile }) => {
  // WhatsApp message template with the dealer's number
  const dealerWhatsAppNumber = "4917647621332"; // Replace with the actual dealer number
  const messageTemplate = `Hi, I am interested in the plate number ${plateNumber}. Can you provide more details?`;

  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${dealerWhatsAppNumber}?text=${encodeURIComponent(messageTemplate)}`;

  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "200px" }, // 90% width on mobile, fixed 200px on larger screens
        textAlign: "center",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: { xs: "16px", sm: "20px" }, // Adjust padding for mobile
        backgroundColor: "#fff", // White background
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for cards
        transition: "transform 0.3s ease", // Hover effect
        "&:hover": {
          transform: "scale(1.05)", // Slight hover effect
        },
      }}
    >
      {/* Logo Image */}
      <img
        src={rcLogo.src} // Use the imported image
        alt="Rashdan Classics Logo"
        style={{ height: isMobile? '1rem' : '1.2rem', marginBottom: "10px" }} // Reduce margin on mobile
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
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.25rem" } }}>
          {plateNumber}
        </Typography>
      </Box>

      {/* WhatsApp Icon and Price */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Ensure price is on the left and icon is on the right
          alignItems: "center",
        }}
      >
        {/* Price */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust font size for mobile and desktop
          }}
        >
          {price}
        </Typography>

        {/* WhatsApp Icon Button */}
        <IconButton
          href={whatsappLink}
          target="_blank" // Open link in a new tab
          sx={{
            color: "#25D366", // WhatsApp green color
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PlateItem;
