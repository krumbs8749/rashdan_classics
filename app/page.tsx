import PlatesGrid from "./components/PlateGrid";
import AboutSection from "./components/AboutSection";
import UpdateSection from "./components/UpdateSection";
import Hero from "./components/Hero";
import "./globals.css"; // Global styles for your app

import { AppProvider } from "./context/AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      {" "}
      {/* Wrap the content inside AppProvider */}
      {/* Main Content */}
      <main>
        {/* Use Hero Component */}
        <Hero />

        {/* Other sections */}
        <PlatesGrid />
        <AboutSection />
        <UpdateSection />
      </main>
    </AppProvider>
  );
}
