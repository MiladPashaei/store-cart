import { INIT_STATE } from "./Inital_STATE";
import actionTypes from "../Actions/actionTypes";

export const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      console.log("actionactivated");
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
  }
  return state;
};
