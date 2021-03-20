import React, { useContext } from "react";
import "./SidebarStyle.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { ProductsContext } from "../../context/productsContext";
import { CartContext } from "../../context/cartContext";
import { FaTimes } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";

const Sidebar = () => {
  const { updateFilters } = useContext(ProductsContext);
  const { totalItems } = useContext(CartContext);
  const {
    loginWithRedirect,
    logout,
    myUser,
    toogleSidebar,
    isSidebarOpen,
  } = useContext(UserContext);

  return (
    <aside className={isSidebarOpen ? "sidebar-active" : ""}>
      <div className="close-icon" onClick={toogleSidebar}>
        <FaTimes />
      </div>
      <ul className="sidebar-links">
        <Link
          to="/shop"
          onClick={() => {
            toogleSidebar();
            updateFilters("category", "Cloths");
          }}
        >
          <li>
            <h4>Cloths</h4>
          </li>
        </Link>
        <Link
          to="/shop"
          onClick={() => {
            toogleSidebar();
            updateFilters("category", "Ski");
          }}
        >
          <li>
            <h4>Ski</h4>
          </li>
        </Link>
        <Link
          to="/shop"
          onClick={() => {
            toogleSidebar();
            updateFilters("category", "Snowboard");
          }}
        >
          <li>
            <h4>Snowboard</h4>
          </li>
        </Link>
        <Link
          to="/shop"
          onClick={() => {
            toogleSidebar();
            updateFilters("category", "Accessories");
          }}
        >
          <li>
            <h4>Accessories</h4>
          </li>
        </Link>
        <li className="login">
          {myUser ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          ) : (
            <button onClick={loginWithRedirect}>Login</button>
          )}
        </li>
        <Link to="cart">
          <li className="cart">
            <BiShoppingBag />
            {totalItems > 0 && <p className="cart-items-value">{totalItems}</p>}
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
