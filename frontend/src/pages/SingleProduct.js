import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopHero from "../components/ShopHero/ShopHero";
import { ProductsContext } from "../context/productsContext";
import "./SingleProduct.scss";
import { formatPrice } from "../helpers";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { singleProduct, fetchSingleProduct } = useContext(ProductsContext);
  const { brand, description, image, price, title } = singleProduct;
  const { addToCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);
  useEffect(() => {
    fetchSingleProduct(`/api/products/${id}`);
  }, [id]);

  return (
    <div>
      <ShopHero product={singleProduct} />
      <div className="single-product">
        <div className="image-section">
          <img src={image} alt={title} />
        </div>
        <div className="info-section">
          <h2>{title}</h2>
          <h3>{formatPrice(price)}</h3>
          <h4>{brand}</h4>
          <p>{description}</p>

          <div className="amount-container">
            <AiFillMinusCircle
              className="icon"
              onClick={() => {
                if (amount === 1) {
                  setAmount(1);
                } else {
                  setAmount(amount - 1);
                }
              }}
            />
            <h3>{amount}</h3>
            <AiFillPlusCircle
              className="icon"
              onClick={() => {
                setAmount(amount + 1);
              }}
            />
          </div>
          <Link to="/cart" onClick={() => addToCart(singleProduct, amount)}>
            <button>Add to cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
