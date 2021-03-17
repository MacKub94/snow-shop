import React, { useContext } from "react";
import "./Shop.scss";
import ProductsList from "../components/ProductsList/ProductsList";
import ShopFilters from "../components/ShopFilters/ShopFilters";
import ShopHero from "../components/ShopHero/ShopHero";

const Shop = () => {
  return (
    <>
      <ShopHero />
      <div className="shop-center">
        <div className="filters-list">
          <ShopFilters />
        </div>
        <div className="shop-products-list">
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default Shop;
