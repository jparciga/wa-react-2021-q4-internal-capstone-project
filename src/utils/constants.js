export const API_BASE_URL = "https://wizeline-academy.cdn.prismic.io/api/v2";
export const PRICE_FORMATTER = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export const NAVIGATION = {
  HOME: "/home",
  SHOP: "/products",
  SEARCH: "/search",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ABOUT: "/about",
};
export const URL_PARAMS = {
  PRODUCT_ID: ":productId",
};
