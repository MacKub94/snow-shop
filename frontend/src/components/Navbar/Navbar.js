import React from "react";
import "./NavbarStyle.scss";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-center">
        <div className="navbar-mobile">
          <div className="logo">
            <h1>
              <span>S</span>now<span>S</span>hop
            </h1>
          </div>
          <div className="nav-menu-bars">
            <FaBars />
          </div>
        </div>
        <div className="navbar-links"></div>
        <div className="navbar-btns"></div>
      </div>
    </nav>
  );
};

export default Navbar;
