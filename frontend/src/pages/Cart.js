import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../context/cartContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { formatPrice } from "../helpers";

const Cart = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);

  return (
    <div className="cart-center">
      {cart.map((item, index) => {
        return (
          <div className="card-item" key={index}>
            <h4>{item.title}</h4>
            <h4>{formatPrice(item.price)}</h4>
            <AiFillMinusCircle onClick={() => decreaseAmount(item.id)} />
            <h4>{item.amount}</h4>
            <AiFillPlusCircle onClick={() => increaseAmount(item.id)} />
            <button onClick={() => removeItem(item.id)}>Remove item</button>
          </div>
        );
      })}
      <button onClick={() => clearCart()}>Clear Cart</button>
      <h2>{formatPrice(totalPrice)}</h2>
    </div>
  );
};

export default Cart;
