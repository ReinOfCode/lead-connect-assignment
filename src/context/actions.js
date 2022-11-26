import { apiCallMethod } from "handler/apiCallMethod";
import { getSessionStorage } from "handler/sessionStoragedata";
import { GET_ALL_CART_PRODUCTS, GET_ALL_PRODUCTS } from "scripts/apiEndpoints";
import {
  ADD_PRODUCT_TO_CART,
  CART_PRODUCT,
  CONTEXT_STATE,
  GENERATE_USER_ID,
  GET,
  REMOVE_PRODUCT_FROM_CART,
} from "scripts/constants";

export const initialState = {
  id: null,
  [CART_PRODUCT]: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GENERATE_USER_ID:
      return { ...state, id: Math.floor(Math.random() * 10) };
    case ADD_PRODUCT_TO_CART:
      return { ...state, [CART_PRODUCT]: [...state[CART_PRODUCT], payload] };
    case REMOVE_PRODUCT_FROM_CART:
      const removeItem = state[CART_PRODUCT].filter((v) => v.id !== payload.id);
      return { ...state, [CART_PRODUCT]: removeItem };

    default:
      throw new Error("Default case of reducer");
  }
};

// Generate UserId
export const generateUserId = (dispatch) => {
  dispatch({ type: GENERATE_USER_ID });
};

// TODO: Add toaster maybe to show action has been dispatched
// add product to cart
export const addProductToCart = (dispatch, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await apiCallMethod({
        endPoint: GET_ALL_CART_PRODUCTS,
        body: data.id,
      });
      dispatch({ type: ADD_PRODUCT_TO_CART, payload: data });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

// Remove Product from cart
export const removeProductFromCart = (dispatch, product) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const res = await apiCallMethod({
      //   endPoint: removeCartItems(id),
      //   method: DELETE,
      // });
      dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: product });
      // resolve(res);
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
  const storageState = getSessionStorage(CONTEXT_STATE);
  if (storageState) {
    return JSON.parse(JSON.stringify(storageState));
  } else {
    return initialState;
  }
};
