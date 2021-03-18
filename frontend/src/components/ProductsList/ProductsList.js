import React, { useContext } from "react";
import "./ProductsList.scss";
import { ProductsContext } from "../../context/productsContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers";
const ProductsList = () => {
  const { filteredProducts } = useContext(ProductsContext);

  if (filteredProducts.length === 0) {
    return (
      <h2 className="no-match">Sorry, no products matching the filters</h2>
    );
  }
  return (
    <div className="products-list">
      {filteredProducts.map((p) => {
        return (
          <Link to={`/products/${p.id}`} key={p.id}>
            <div className="product-cart">
              <img src={p.image} alt="" />
              <div className="product-info">
                <h3>{p.title}</h3>
                <h3>{formatPrice(p.price)}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
