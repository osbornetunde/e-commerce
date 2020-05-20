import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  AddItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cartActions";
import "./checkoutItem.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  AddItemToCart,
  removeItemFromCart,
}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => AddItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, {
  clearItemFromCart,
  AddItemToCart,
  removeItemFromCart,
})(CheckoutItem);
