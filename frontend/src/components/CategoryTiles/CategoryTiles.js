import React, { useContext } from "react";
import "./CategoryTiles.scss";
import image1 from "../../images/menclo.png";
import image2 from "../../images/womenclo.png";
import image3 from "../../images/ski.png";
import image4 from "../../images/snowboard.png";
import image5 from "../../images/accesories.png";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";

const CategoryTiles = () => {
  const { updateFilters } = useContext(ProductsContext);
  return (
    <section className="category-tiles">
      <div className="category-tiles-center">
        <div className="tile tile1">
          <Link
            to="/shop"
            onClick={() => {
              updateFilters("category", "Cloths");
              updateFilters("sex", "Men");
            }}
          >
            <img src={image1} alt="tile" />
            <h1>Men's clothing</h1>
          </Link>
        </div>
        <div className="tile tile2">
          <Link
            to="/shop"
            onClick={() => {
              updateFilters("category", "Cloths");
              updateFilters("sex", "Women");
            }}
          >
            <img src={image2} alt="tile" />
            <h1>Women's clothing</h1>
          </Link>
        </div>
        <div className="tile tile3">
          <Link
            to="/shop"
            onClick={() => {
              updateFilters("category", "Ski");
            }}
          >
            <img src={image3} alt="tile" />
            <h1>Ski's</h1>
          </Link>
        </div>
        <div className="tile tile4">
          <Link
            to="/shop"
            onClick={() => {
              updateFilters("category", "Snowboard");
            }}
          >
            <img src={image4} alt="tile" />
            <h1>Snowboard</h1>
          </Link>
        </div>
        <div className="tile tile5">
          <Link
            to="/shop"
            onClick={() => {
              updateFilters("category", "Accessories");
            }}
          >
            <img src={image5} alt="tile" />
            <h1>Accessories</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
