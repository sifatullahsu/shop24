import React, { useContext, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContextComp';


const Header = () => {

  const { user, userLogout } = useContext(AuthContext);

  const [menuResponsive, setMenuResponsive] = useState(false)

  const handleUserLogout = () => {
    userLogout()
      .then(result => { })
      .catch(error => console.error(error))
  }

  const route = !user?.uid ? [
    { name: 'Home', route: '/' },
    { name: 'Order', route: '/order' },
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Login', route: '/login' },
    { name: 'Registe', route: '/register' }
  ] : [
    { name: 'Home', route: '/' },
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Order', route: '/order' },
    // { name: 'Order Review', route: '/order-review' },
    // { name: 'Manage Inventory', route: '/manage-inventory' },
  ];

  return (
    <header className='p-5 bg-gray-900'>
      <div className='container mx-auto flex justify-between '>
        <Link to='/'>
          <h3 className='text-2xl text-white font-semibold'>SHOP24</h3>
        </Link>
        <p>{user?.email}</p>
        <button onClick={() => setMenuResponsive(!menuResponsive)} className='h-6 w-6 md:hidden'>
          {menuResponsive ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </button>
        <div className='flex items-center'>

          <ul className='inline'>
            {
              route.map((item, index) => {
                return (
                  <li key={index} className='inline mx-3'>
                    <NavLink to={item.route} className="text-white">{item.name}</NavLink>
                  </li>
                );
              })
            }
            {
              user?.uid &&
              <li className='inline mx-3'>
                <button onClick={handleUserLogout} className="text-white">Logout</button>
              </li>
            }
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;