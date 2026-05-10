import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SoundFamiliar from "@/components/SoundFamiliar";
import HowItWorks from "@/components/HowItWorks";
import ScreenSaves from "@/components/ScreenSaves";
import WhoIsItFor from "@/components/WhoIsItFor";
import Dashboard from "@/components/Dashboard";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SoundFamiliar />
        <HowItWorks />
        <ScreenSaves />
        <WhoIsItFor />
        <Dashboard />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
