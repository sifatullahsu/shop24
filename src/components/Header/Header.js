import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextComp';
import { CartContext } from '../../contexts/CartContextComp';


const Header = () => {

  const { user, userLogout } = useContext(AuthContext);
  const data2 = useContext(CartContext);;

  const [menuResponsive, setMenuResponsive] = useState(false)

  const handleUserLogout = () => {
    userLogout()
      .then(result => {
        console.log(result);
      })
      .catch(error => console.error(error))
  }

  const route = [
    { id: 1, name: 'Home', route: '/' },
    { id: 2, name: 'Order', route: '/order' },
    { id: 3, name: 'Order Review', route: '/order-review' },
    { id: 4, name: 'Manage Inventory', route: '/manage-inventory' },
    { id: 5, name: 'Login', route: '/login' },
    { id: 6, name: 'Registe', route: '/register' }
  ];

  return (
    <header className='p-5 bg-gray-900'>
      <div className='container mx-auto flex justify-between '>
        <h3 className='text-2xl text-white'>LOGO</h3>
        <p>{user?.email}</p>
        <button onClick={() => setMenuResponsive(!menuResponsive)} className='h-6 w-6 md:hidden'>
          {menuResponsive ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </button>
        <div className='flex items-center'>
          <ul className='inline'>
            {route.map(item => <li key={item.id} className='inline mx-3'><NavLink to={item.route} className="text-white">{item.name}</NavLink></li>)}
            <li className='inline mx-3'><button onClick={handleUserLogout} className="text-white">Logout</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;