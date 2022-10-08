import React from 'react';

const CartItem = (props) => {
  const { item, handleAddToCart, handleRemoveFromCart, handleQtyFromCart } = props;
  const { id, name, price, img, quantity } = item;

  return (
    <div className='cart-item'>
      <div className='remove'>
        <button onClick={() => handleRemoveFromCart(id)}>X</button>
      </div>
      <div className='cart-item-info'>
        <img src={img} alt="" />
        <div>
          <h5>{name}</h5>
          <div className='cart-footer'>
            <div>
              Price: ${price}
            </div>
            <div className='cart-qty'>
              <button onClick={() => handleQtyFromCart(id, 'subtract')}>-</button>
              <div>{quantity}</div>
              <button onClick={() => handleQtyFromCart(id, 'add')}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;