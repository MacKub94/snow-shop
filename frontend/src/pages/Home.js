import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CategoryTiles from "../components/CategoryTiles/CategoryTiles";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <AboutUs />
      <Info />
    </>
  );
};

export default Home;
