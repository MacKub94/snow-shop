import React, { useContext } from "react";
import "./Cart.scss";
import { CartContext } from "../context/cartContext";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { formatPrice } from "../helpers";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Cart = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    removeItem,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);

  const { loginWithRedirect, logout, myUser } = useContext(UserContext);

  if (cart.length === 0) {
    return (
      <div className="cart-center">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link to="/shop">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-center">
      <div className="cart-list">
        {cart.map((item, index) => {
          return (
            <ul className="card-item" key={index}>
              <li>
                <img src={item.image} alt={item.title} />
              </li>
              <li>
                <h4>{item.title}</h4>
              </li>
              <li>
                <h4>{formatPrice(item.price)}</h4>
              </li>
              <li className="amount">
                <AiFillMinusCircle
                  onClick={() => decreaseAmount(item.id)}
                  className="amount-icon"
                />
                <h4>{item.amount}</h4>
                <AiFillPlusCircle
                  onClick={() => increaseAmount(item.id)}
                  className="amount-icon"
                />
              </li>
              <li>
                <button onClick={() => removeItem(item.id)}>
                  <ImCross />
                </button>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="cart-btns">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => clearCart()}>Clear Cart</button>
      </div>
      <div className="cart-totals">
        <h2>{formatPrice(totalPrice)}</h2>
        {myUser ? (
          <Link to="/checkout">
            <button className="checkout">Checkout</button>
          </Link>
        ) : (
          <button className="checkout" onClick={loginWithRedirect}>
            Login to checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
