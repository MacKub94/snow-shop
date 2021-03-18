import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CategoryTiles from "../components/CategoryTiles/CategoryTiles";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTiles />
      <AboutUs />
      <Info />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
