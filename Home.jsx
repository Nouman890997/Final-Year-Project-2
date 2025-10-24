import React, { useState, useEffect } from "react";


import HeroSection from "../Components/Hero/Hero";
import TopPets from "../Components/TopPets/TopPets";
import Doctors from "../Components/Doctors/Doctors"
import SmallBanners from "../Components/SmallBanner/SmallBanner"

function Home() {
 
  return (
    <>
      <HeroSection/>
      <TopPets/>
      <Doctors/>
      <SmallBanners/>
    </>
  );
}

export default Home;
