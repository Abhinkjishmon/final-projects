import React from "react";
import "./style.css";

import Hero from "@/components/custom/landingpage/Hero";
import Whychoose from "@/components/custom/landingpage/Whychoose";
import SpendingTracker from "@/components/custom/landingpage/SpendingTracker";
import Services from "@/components/custom/landingpage/Services";
import ArticalPreview from "@/components/custom/landingpage/ArticalPreview";
import FAQ from "@/components/custom/landingpage/FAQ";
import HomeSlogen from "@/components/custom/landingpage/HomeSlogen";
import LandingPage from "@/components/custom/landingpage/LandingPage";



function Home() {
  return (
    <>
      <LandingPage />
      <HomeSlogen />
      <Hero />
      <Whychoose />
      <SpendingTracker/>
      <Services />
      <ArticalPreview />
      <FAQ/>
    </>
  );
}

export default Home;
