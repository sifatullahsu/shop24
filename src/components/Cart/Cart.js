import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {

  const { cartItems, handleAddToCart, handleRemoveFromCart, handleRemoveAllFromCart, handleQtyFromCart } = props.cartFunctionality;

  let subTotal = 0;
  let shipping = 0;

  for (const item of cartItems) {
    subTotal = subTotal + (item.price * item.quantity);
    shipping = shipping + item.shipping;
  }

  const tax = subTotal * 0.1;
  const grandTotal = subTotal + shipping + tax;

  return (
    <div className='cart'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem item={item}
          key={item.id}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleQtyFromCart={handleQtyFromCart}
        ></CartItem>)}
      </div>

      <div className='calculation'>
        <div className='calculation-item'>
          <span>Subtotal: </span>
          <span>${subTotal}</span>
        </div>

        <div className='calculation-item'>
          <span>Tax: (10%) </span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className='calculation-item'>
          <span>Shipping: </span>
          <span>${shipping}</span>
        </div>

        <div className='calculation-item'>
          <span>Total: </span>
          <span>${grandTotal}</span>
        </div>

        <button className='clear' onClick={handleRemoveAllFromCart}>Clear All</button>
      </div>
    </div>
  );
};

export default Cart;