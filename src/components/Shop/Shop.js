import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';

const Shop = () => {
  const products = useLoaderData();

  return (
    <section className='product-section'>
      <Products products={products}></Products>
      <Sidebar></Sidebar>
    </section>
  );
};

export default Shop;