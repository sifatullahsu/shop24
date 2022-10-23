import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContextComp';
import CartCalculation from '../CartCalculation/CartCalculation';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const { cartData, handleRemoveFromCart, handleQtyFromCart } = useContext(CartContext);

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
    </div>
  );
};

export default Cart;