import React from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl  text-center my-5'>Order Page</h2>

      <div style={{ maxWidth: '350px', margin: '0 auto' }}>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Order;