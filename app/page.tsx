"use client";
import Image from "next/image";
import Banner from "./components/Banner";
import AboutSection from "./components/About";
import TalentNumbers from "./components/TalentNumbers";
import OurServices from "./components/OurServices";
import IndustriesServe from "./components/IndustriesServe";
import Testimonial from "./components/Testimonial";
import Partnerships from "./components/Partnerships";
import CareerOpportunities from "./components/CareerOpportunities";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
    <Banner />
    <AboutSection />
    <TalentNumbers />
    <OurServices />
    <IndustriesServe />
    <Testimonial />
    <Partnerships />
    <CareerOpportunities />
    <BlogSection />
    </>
  );
}
