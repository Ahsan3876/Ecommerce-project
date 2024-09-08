//Action types
const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItem";
const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseItem";

//Action Creator
export function decreaseItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}
export function increaseItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}
export function cartRemoveItem(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function cartAddItem(productData) {
  return {
    type: CART_ADD_ITEM,
    payload: productData,
  };
}

//Reducer
export default function cardItemsReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === existingItem.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case CART_REMOVE_ITEM: {
      return state.filter(
        (cardItem) => cardItem.productId !== action.payload.productId
      );
    }
    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

    case CART_ITEM_DECREASE_QUANTITY: {
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    }

    default:
      return state;
  }
}
