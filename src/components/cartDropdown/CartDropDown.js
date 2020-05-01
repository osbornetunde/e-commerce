import React from "react";
import "./CartDropDown.scss";
import CustomBotton from "./../customButton/CustomButton";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomBotton>CHECKOUT</CustomBotton>
    </div>
  );
};

export default CartDropDown;
