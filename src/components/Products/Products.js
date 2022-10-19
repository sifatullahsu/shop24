import React from 'react';
import Product from '../Product/Product';

const Products = ({ products }) => {

  return (
    <div className='products'>
      {
        products.map(product => <Product
          key={product.id}
          product={product}
        ></Product>)
      }
    </div>
  );
};

export default Products;