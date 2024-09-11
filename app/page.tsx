import PlatesGrid from "./components/PlateGrid";
import AboutSection from "./components/AboutSection";
import UpdateSection from "./components/UpdateSection";
import Hero from "./components/Hero";
import "./globals.css"; // Global styles for your app




export default function RootLayout () {
  return (
      <>
        {/* Use NavBar Component */}

        {/* Main Content */}
        <main>
          {/* Use Hero Component */}
          <Hero />

        <PlatesGrid />
        <AboutSection />
        <UpdateSection />
        </main>

      </>
  );
}
