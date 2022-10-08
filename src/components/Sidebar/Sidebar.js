import React from 'react';
import Cart from '../Cart/Cart';

const Sidebar = (props) => {

  return (
    <div className='sidebar'>
      <Cart cartFunctionality={props}></Cart>
    </div>
  );
};

export default Sidebar;