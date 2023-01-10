export const JSON_API = "http://localhost:8000/posts";
export const ADMIN = "said2k@mail.ru";

export const ACTION = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_ONE_PRODUCT: "GET_ONE_PRODUCT",
  SET_FAVORITES: "SET_FAVORITES",
};

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGHT: "GET_CART_LENGTH",
};
export function getLengthFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return favorites ? favorites.products.length : 0;
}
