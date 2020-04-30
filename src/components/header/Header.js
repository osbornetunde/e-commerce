import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../asset/original.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      <Link className="option" to="/about">
        About Us
      </Link>
    </div>
  </div>
);

export default Header;
