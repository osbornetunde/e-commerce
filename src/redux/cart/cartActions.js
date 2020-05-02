import cartActionTypes from "./cartActionTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const AddItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});
