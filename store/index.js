import { combineReducers, createStore } from "redux";
import productsListReducer from "./productListReducer";
import cardItemsReducer from "./cartItemsReducer";
import wishListReducer from "./wishListReducer";

const reducer = combineReducers({
  products: productsListReducer,
  cartsList: cardItemsReducer,
  wishList: wishListReducer,
});

console.log(reducer);
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
// console.log(store);
