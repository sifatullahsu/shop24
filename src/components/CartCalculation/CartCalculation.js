import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextComp';

const CartCalculation = () => {

  const { cartCal, handleRemoveAllFromCart } = useContext(CartContext);
  const { subtotal, tax, shipping, total } = cartCal;

  return (
    <div className='calculation'>
      <div className='calculation-item'>
        <span>Subtotal: </span>
        <span>${subtotal}</span>
      </div>

      <div className='calculation-item'>
        <span>Tax: (10%) </span>
        <span>${tax?.toFixed(2)}</span>
      </div>

      <div className='calculation-item'>
        <span>Shipping: </span>
        <span>${shipping}</span>
      </div>

      <div className='calculation-item'>
        <span>Total: </span>
        <span>${total}</span>
      </div>
      {
        subtotal ?
          <button
            className='cart-button'
            onClick={handleRemoveAllFromCart}
          >Clear All</button>
          : ''
      }
    </div>
  );
};

export default CartCalculation;