import React, { createContext, useEffect, useState } from 'react';
import { productsLoader } from '../loaders/productsLoader';
import { getCartLS, setCartLS } from '../Utilities/Utilities';

export const CartContext = createContext();

const CartContextComp = ({ children }) => {

  // ====================================================================

  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsLoader()
      .then(data => setProducts(data))
  }, []);

  // ====================================================================

  const [cart, setCart] = useState({});

  useEffect(() => {
    const cartLocalStorage = getCartLS();
    setCart(cartLocalStorage);
  }, []);

  // ====================================================================

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const newCart = [];

    for (const cartItem in cart) {
      const id = cartItem;
      const qty = cart[id];

      const newProducts = [...products];
      const productData = newProducts.find(product => product.id === cartItem);

      if (productData) {
        productData.quantity = qty;
        newCart.push(productData);
      }
    }

    setCartData(newCart);
  }, [cart, products]);

  // ====================================================================

  // Subtotal, Tax (10%), Shipping, Total

  const [cartCal, setCartCal] = useState({});

  useEffect(() => {
    const newCartCal = { subtotal: 0, tax: 0, shipping: 0, total: 0 };

    for (const item of cartData) {
      newCartCal['subtotal'] = newCartCal['subtotal'] + (item.price * item.quantity);
      newCartCal['shipping'] = newCartCal['shipping'] + item.shipping;
    }

    newCartCal['tax'] = newCartCal['subtotal'] * 0.1;
    newCartCal['total'] = newCartCal['subtotal'] + newCartCal['shipping'] + newCartCal['tax'];

    setCartCal(newCartCal);
  }, [cartData]);

  // ====================================================================



  const handleAddToCart = (id) => {
    const newCart = structuredClone(cart);

    let isExistInCart = newCart.hasOwnProperty(id);
    if (!isExistInCart) {
      newCart[id] = 1;
    }
    else {
      newCart[id] = newCart[id] + 1;
    }

    setCart(newCart);
    setCartLS(newCart);
  }


  const handleRemoveFromCart = (id) => {
    const newCart = structuredClone(cart);
    delete newCart[id];

    setCart(newCart);
    setCartLS(newCart);
  }

  const handleRemoveAllFromCart = () => {
    setCart({});
    setCartLS({});
  }

  const handleQtyFromCart = (id, action) => {
    const newCart = structuredClone(cart);
    const qty = newCart[id];

    if (qty === 1 && action === 'subtract') {
      handleRemoveFromCart(id)
    }
    else {
      if (action === 'add') {
        newCart[id] = qty + 1;
      }
      else {
        newCart[id] = qty - 1;
      }

      setCart(newCart);
      setCartLS(newCart);
    }
  }



  // ====================================================================

  const cartInfo = {
    cartData,
    cartCal,
    handleAddToCart,
    handleRemoveFromCart,
    handleRemoveAllFromCart,
    handleQtyFromCart
  }

  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComp;