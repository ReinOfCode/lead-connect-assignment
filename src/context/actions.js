import { apiCallMethod } from "handler/apiCallMethod";
import { getStateFromSessionStorage } from "handler/sessionStoragedata";
import {
  GET_ALL_CART_PRODUCTS,
  GET_ALL_PRODUCTS,
  removeCartItems,
} from "scripts/apiEndpoints";
import {
  CONTEXT_STATE,
  DECREMENT_CART_COUNT,
  DELETE,
  GENERATE_USER_ID,
  GET,
  INCREASE_CART_COUNT,
} from "scripts/constants";

export const initialState = {
  cartCount: 0,
  id: null,
};

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case INCREASE_CART_COUNT:
      return { ...state, cartCount: state.cartCount + 1 };
    case DECREMENT_CART_COUNT:
      return { ...state, cartCount: state.cartCount - 1 };
    case GENERATE_USER_ID:
      return { ...state, id: Math.floor(Math.random() * 10) };
    default:
      throw new Error("Default case of reducer");
  }
};

// Generate UserId
export const generateUserId = (dispatcher) => {
  dispatcher({ type: GENERATE_USER_ID });
};

// TODO: Add toaster maybe to show action has been dispatched
// add product to cart
export const addProductToCart = (dispatcher, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiCallMethod({
        endPoint: GET_ALL_CART_PRODUCTS,
        body: data,
      });
      dispatcher({ type: INCREASE_CART_COUNT });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

// Remove Product from cart
export const removeProductFromCart = (dispatcher, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiCallMethod({
        endPoint: removeCartItems(id),
        method: DELETE,
      });
      resolve(res);
      dispatcher({ type: INCREASE_CART_COUNT });
      return res;
    } catch (error) {
      reject(error);
    }
  });
};

// Get All Products
export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiCallMethod({
        endPoint: GET_ALL_PRODUCTS,
        method: GET,
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

// Get Cart Data
export const getCartData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiCallMethod({
        endPoint: GET_ALL_CART_PRODUCTS,
        method: GET,
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const getInitialState = () => {
  const storageState = getStateFromSessionStorage(CONTEXT_STATE);
  if (storageState) {
    return JSON.parse(JSON.stringify(storageState));
  } else {
    return initialState;
  }
};
