import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "./../../firebase/firebase";
import "./Header.scss";
import { ReactComponent as Logo } from "../../asset/original.svg";
import CartIcon from "./../cartIcon/cartIcon";
import CartDropDown from "./../cartDropdown/CartDropDown";

const Header = ({ currentUser, cartHidden }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGNIN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cartHidden: cart.hidden,
});

export default connect(mapStateToProps)(Header);
