import React from 'react';

// WhatsApp message template with the dealer's number
const dealerWhatsAppNumber = '4917647621332'; // Replace with the actual dealer number

// Function to generate WhatsApp link for general inquiry
const contactDealerGeneral = () => {
  const messageTemplate = `Hi, I would like to inquire about the products and services you offer. Can you provide more details?`;

  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${dealerWhatsAppNumber}?text=${encodeURIComponent(messageTemplate)}`;

  // Open WhatsApp in a new window/tab
  window.open(whatsappLink, '_blank');
};

export default contactDealerGeneral;
