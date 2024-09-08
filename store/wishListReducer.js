//Action type
 const WISH_LIST_ADD_ITEM = "wishList/addItem";
 const WISH_LIST_REMOVE_ITEM = "wishList/removeItem";

//Action Creator
export function addWishListItem(productId) {
  return {
    type: WISH_LIST_ADD_ITEM,
    payload: { productId },
  };
}
export function removeWishListItem(productId) {
  return {
    type: WISH_LIST_REMOVE_ITEM,
    payload: { productId },
  };
}

//Reducer
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISH_LIST_ADD_ITEM: {
      return [...state, action.payload];
    }
    case WISH_LIST_REMOVE_ITEM:
      return state.filter(
        (wishItem) => wishItem.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
