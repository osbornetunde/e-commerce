import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./CartDropDown.scss";
import CustomBotton from "../customButton/CustomButton";
import CartItem from "../cartItem/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartDropDown = ({ cartItems, toggleCartHidden }) => {
  const history = useHistory();

  const goToCheckoutPage = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomBotton onClick={goToCheckoutPage}>CHECKOUT</CustomBotton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartDropDown);
