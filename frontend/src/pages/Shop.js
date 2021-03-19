import React, { useContext } from "react";
import "./Shop.scss";
import ProductsList from "../components/ProductsList/ProductsList";
import ShopFilters from "../components/ShopFilters/ShopFilters";
import ShopHero from "../components/ShopHero/ShopHero";
import { ProductsContext } from "../context/productsContext";
import Loading from "../components/loading/Loading";

const Shop = () => {
  const { productsLoading } = useContext(ProductsContext);

  if (productsLoading) {
    return <Loading />;
  } else {
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
  }
};

export default Shop;
