"use client"
import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/AboutUs";
import HeroCarousel from "@/components/Home/HeroCarousel";
import Navbar from "@/components/Navbar/Navbar";
import ContactButton from "@/components/utils/contact-button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <div className="side-margin">
        <AboutUs />
      </div>
      <Footer />
      <ContactButton/>
    </div>
  );
}
