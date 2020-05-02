import React from "react";
import { connect } from "react-redux";
import "./cartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../asset/cart.svg";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemCount } from "./../../redux/cart/cartSelectors";

const cartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(cartIcon);
