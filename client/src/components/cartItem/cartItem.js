import React from "react";
import "./cartItem.scss";

const cartItem = ({ item: { price, name, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="items" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {" "}
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default cartItem;
