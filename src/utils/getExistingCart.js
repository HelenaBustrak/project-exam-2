
export default function getExistingCart() {
  const shoppingCart = localStorage.getItem("cart");

  if (shoppingCart === null) {
    return [];
  } else {
    return JSON.parse(shoppingCart);
  }
}
