import React from "react";
import { Link } from "react-router-dom";
import "./HeroStyle.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="info-container">
        <h2>new gear available</h2>
        <Link to="/shop">
          <h3>shop now</h3>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
