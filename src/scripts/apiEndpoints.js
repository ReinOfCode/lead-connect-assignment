export const GET_ALL_PRODUCTS = "products";
export const GET_ALL_CART_PRODUCTS = "carts";
export const removeCartItems = (id) => {
  if (!id) return;
  return `carts${id}`;
};
