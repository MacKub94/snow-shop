import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import CategoryTiles from "../components/CategoryTiles/CategoryTiles";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <Bestsellers />
      <AboutUs />
      <Info />
      <Newsletter />
    </>
  );
};

export default Home;
