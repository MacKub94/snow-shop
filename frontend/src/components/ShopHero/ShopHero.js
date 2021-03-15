import React from "react";
import "./ShopHero.scss";
import { Link } from "react-router-dom";

const ShopHero = ({ product }) => {
  if (product) {
    return (
      <div className="shopHero">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/shop">
          <h3> / Products</h3>
        </Link>
        <h3> / {product.title}</h3>
      </div>
    );
  } else
    return (
      <div className="shopHero">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <h3> / Products</h3>
      </div>
    );
};

export default ShopHero;
