import React from 'react';
import Product from '../Product/Product';

const Products = ({products, handleAddToCart}) => {
  return (
    <div className='products'>
      {products.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>)}
    </div>
  );
};

export default Products;