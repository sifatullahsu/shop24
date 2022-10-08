import React from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl  text-center my-5'>Order Page</h2>

      <Cart></Cart>
    </div>
  );
};

export default Order;