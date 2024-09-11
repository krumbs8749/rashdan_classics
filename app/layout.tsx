import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

// Update metadata to reflect the purpose of the app
export const metadata: Metadata = {
  title: "Rashdan Classics - Elegant Plates",
  description:
    "Discover and purchase timeless number plates with Rashdan Classics.",
};
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const robotoMedium = localFont({
  src: "./fonts/RobotoMedium.woff",
  variable: "--font-roboto-medium",
  weight: "100 900",
});

import { AppProvider } from "./context/AppContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoMedium.variable}`}
      >
        <NavBar />
        <AppProvider>{children}</AppProvider>

        {/* Use Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
