import React from 'react';
import { useEffect, useState } from 'react';
import { getCartLS, setCartLS } from '../../Utilities/Utilities';
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
  // GET All Products From API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);



  // Cart Functionalities
  const cartLocalStorage = getCartLS();
  const [cart, setCart] = useState(cartLocalStorage);


  const handleAddToCart = (id) => {
    const newCart = structuredClone(cart);

    let isExistInCart = cart.hasOwnProperty(id);
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
    const newCart = {};

    setCart(newCart);
    setCartLS(newCart);
  }

  const handleQtyFromCart = (id, action) => {
    const newCart = structuredClone(cart);
    const qty = newCart[id];

    console.log(qty);

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






  // Cart Products Full Data
  const [cartDetails, setCartDtails] = useState([]);

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

    setCartDtails(newCart);
  }, [cart, products]);



  return (
    <section className='product-section'>
      <Products products={products} handleAddToCart={handleAddToCart}></Products>
      <Sidebar cartItems={cartDetails}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleRemoveAllFromCart={handleRemoveAllFromCart}
        handleQtyFromCart={handleQtyFromCart}
      ></Sidebar>
    </section>
  );
};

export default Shop;