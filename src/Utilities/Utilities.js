const getCartLS = () => {
  const cartItems = localStorage.getItem('cart-items');
  return cartItems ? JSON.parse(cartItems) : {};
}

const setCartLS = (data) => localStorage.setItem('cart-items', JSON.stringify(data));


export {getCartLS, setCartLS};