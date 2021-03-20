import React, { useContext } from "react";
import "./NavbarStyle.scss";
import { FaBars } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";
import { CartContext } from "../../context/cartContext";
import logo from "../../images/logo.png";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const { updateFilters } = useContext(ProductsContext);
  const { totalItems } = useContext(CartContext);
  const { loginWithRedirect, logout, myUser, toogleSidebar } = useContext(
    UserContext
  );
  return (
    <nav>
      <div className="navbar-center">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          {/* <h1>
            <span>S</span>now<span>S</span>hop
          </h1> */}
        </Link>
        <div className="nav-menu-bars" onClick={toogleSidebar}>
          <FaBars />
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/shop"
              onClick={() => {
                updateFilters("category", "Cloths");
              }}
            >
              <h4>Cloths</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                updateFilters("category", "Ski");
              }}
            >
              <h4>Ski</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                updateFilters("category", "Snowboard");
              }}
            >
              <h4>Snowboard</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              onClick={() => {
                updateFilters("category", "Accessories");
              }}
            >
              <h4>Accessories</h4>
            </Link>
          </li>
        </ul>
        <ul className="navbar-btns">
          <Link to="cart">
            <li className="cart">
              <BiShoppingBag />
              {totalItems > 0 && (
                <p className="cart-items-value">{totalItems}</p>
              )}
            </li>
          </Link>
          <li>
            {myUser ? (
              <button
                className="login"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            ) : (
              <button className="login" onClick={loginWithRedirect}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
