import React from "react";
import { Box, Typography, Grid, Container, Paper, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";



const AboutSection: React.FC = () => {
  return (
    <Box sx={{ py: 6, background: "white" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 700, fontFamily: '(--font-roboto-medium)'}}>
          OUR JOURNEY AND MISSION
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          <b>
            <i>Rashdan Classic</i>
          </b>
          is a premier destination for discerning collectors and enthusiasts
          seeking the finest in curated and exclusive government car plates.
          With a commitment to excellence and a keen eye for rarity,{" "}
          <b>
            <i>Rashdan Classic</i>
          </b>{" "}
          offers a unique selection of distinctive number plates that embody
          prestige and exclusivity. Each plate in our collection is carefully
          chosen for its historical significance, aesthetic appeal, and rarity,
          ensuring that our clients receive only the most distinguished pieces.
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: "center", borderRadius: "10px" }}
            >
              <DescriptionIcon sx={{ fontSize: 60, color: "#000" }} />
              <Typography
                variant="h6"
                component="h3"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                Registration and Renewal Services
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
                We manage everything from vehicle registration to renewing your
                road tax and insurance, streamlining the process to eliminate
                any stress.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: "center", borderRadius: "10px" }}
            >
              <TransferWithinAStationIcon
                sx={{ fontSize: 60, color: "#000" }}
              />
              <Typography
                variant="h6"
                component="h3"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                Inspection and Ownership Transfer
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
                Our comprehensive services ensure a straightforward vehicle
                ownership transfer, backed by detailed inspections to guarantee
                a smooth transition.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: "center", borderRadius: "10px" }}
            >
              <SwapHorizIcon sx={{ fontSize: 60, color: "#000" }} />
              <Typography
                variant="h6"
                component="h3"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                Plate Interchange Services
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
                With our Plate Interchange service, you can effortlessly
                exchange your current plate number for one that better suits
                your preference.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
