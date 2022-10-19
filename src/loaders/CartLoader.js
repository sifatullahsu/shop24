import React, { useEffect, useState } from "react";
import { getCartLS, setCartLS } from "../Utilities/Utilities";
import { productsLoader } from "./productsLoader";


export const CartLoader = () => {
  const cart = getCartLS();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPromise = productsLoader()
    productsPromise.then(result => setProducts(result))
  }, []);


  return ({
    cart, products
  });
}





