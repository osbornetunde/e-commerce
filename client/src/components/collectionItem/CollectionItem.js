import React from "react";
import { connect } from "react-redux";
import "./collectionItem.scss";
import CustomButton from "./../customButton/CustomButton";
import { AddItemToCart } from "./../../redux/cart/cartActions";

const CollectionItem = ({ item, AddItemToCart }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => AddItemToCart(item)}>
        {" "}
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { AddItemToCart })(CollectionItem);
