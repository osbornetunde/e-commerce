import React from "react";
import { connect } from "react-redux";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../asset/cart.svg";
import { toggleCartHidden } from "./../../redux/cart/cartActions";

const cartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(cartIcon);
