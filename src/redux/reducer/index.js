import handleCart from "./handleCart";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cart: handleCart,
});

export default rootReducers;
