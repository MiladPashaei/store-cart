import actionTypes from "./actionTypes";
import { useDispatch } from "react-redux";

export const addItemToCartHandler = (product) => (dispatch, getState) => {
  dispatch({ type: actionTypes.ADD_ITEM_TO_CART, payload: product });
};
