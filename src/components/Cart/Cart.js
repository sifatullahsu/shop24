import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextComp';
import CartCalculation from '../CartCalculation/CartCalculation';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const { cartData, handleRemoveFromCart, handleRemoveAllFromCart, handleQtyFromCart } = useContext(CartContext);

  return (
    <div className='cart'>
      <div className='cart-items'>
        {
          cartData.map(item => {
            return <CartItem
              key={item.id}
              item={item}
              handleRemoveFromCart={handleRemoveFromCart}
              handleQtyFromCart={handleQtyFromCart}
            ></CartItem>
          })
        }
      </div>

      <CartCalculation></CartCalculation>

      <button className='cart-clear' onClick={handleRemoveAllFromCart}>Clear All</button>
    </div>
  );
};

export default Cart;