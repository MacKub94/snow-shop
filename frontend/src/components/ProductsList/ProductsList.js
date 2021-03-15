import React, { useContext } from "react";
import "./ProductsList.scss";
import { ProductsContext } from "../../context/productsContext";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const { filteredProducts } = useContext(ProductsContext);
  return filteredProducts.map((p) => {
    return (
      <div className="product-cart" key={p.id}>
        <div className="product-cart--image">
          <img src={p.image} alt="" />
          <h3>{p.title}</h3>
          <h4>{p.price}</h4>
          <Link to={`/products/${p.id}`}>Link</Link>
        </div>
      </div>
    );
  });
};

export default ProductsList;
