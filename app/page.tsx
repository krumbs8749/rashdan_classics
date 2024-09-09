import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./components/Navbar"; 
import PlatesGrid from "./components/PlateGrid";
import AboutSection from "./components/AboutSection";
import UpdateSection from "./components/UpdateSection";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./globals.css"; // Global styles for your app

// Loading custom local fonts
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

// Update metadata to reflect the purpose of the app
export const metadata: Metadata = {
  title: "Rashdan Classics - Elegant Plates",
  description: "Discover and purchase timeless number plates with Rashdan Classics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${robotoMedium.variable}`}>
        {/* Use NavBar Component */}
        <NavBar />

        {/* Main Content */}
        <main>
          {/* Use Hero Component */}
          <Hero />

        <PlatesGrid />
        <AboutSection />
        <UpdateSection />
          
          {/* Page Content */}
          {children}
        </main>

        {/* Use Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
