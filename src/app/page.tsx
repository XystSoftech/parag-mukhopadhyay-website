"use client"
import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/AboutUs";
import Blogs from "@/components/Home/BlogSection";
import Contact from "@/components/Home/Contact";
import HeroCarousel from "@/components/Home/HeroCarousel";
import LawyerPractise from "@/components/Home/LawyerPractise";
import Publication from "@/components/Home/Publication";
import Navbar from "@/components/Navbar/Navbar";
import ContactButton from "@/components/utils/contact-button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <div className="side-margin">
        <AboutUs />
        <Publication/>
        {/* <LawyerPractise/> */}
        <Blogs/>
        <Contact/>    
      </div>
      <Footer />
      <ContactButton/>
    </div>
  );
}
