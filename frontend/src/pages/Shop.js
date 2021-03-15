import React, { useContext } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import ShopFilters from "../components/ShopFilters/ShopFilters";
import ShopHero from "../components/ShopHero/ShopHero";

const Shop = () => {
  return (
    <div>
      <ShopHero />
      <ShopFilters />
      <ProductsList />
    </div>
  );
};

export default Shop;
