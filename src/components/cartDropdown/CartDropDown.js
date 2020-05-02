import React from "react";
import { connect } from "react-redux";
import "./CartDropDown.scss";
import CustomBotton from "../customButton/CustomButton";
import CartItem from "../cartItem/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomBotton>CHECKOUT</CustomBotton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
