import React from "react";
import "./ShopHero.scss";
import { Link } from "react-router-dom";

const ShopHero = () => {
  return (
    <>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <h2> / Products</h2>
    </>
  );
};

export default ShopHero;
