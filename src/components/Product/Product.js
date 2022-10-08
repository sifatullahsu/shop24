import React from 'react';

const Product = (props) => {
  const {product, handleAddToCart} = props;
  const {id, name, img, category, price} = product;
  

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='category'>{category}</div>
      <h3>{name}</h3>
      <div className='price'>Price: {price}</div>
      <button className='add-to-cart' onClick={() => {handleAddToCart(id)}}>Add to Cart</button>
    </div>
  );
};

export default Product;