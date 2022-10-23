import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import Order from '../components/Order/Order';
import Register from '../components/Register/Register';
import Shop from '../components/Shop/Shop';
import Main from '../layouts/Main';
import { productsLoader } from '../loaders/productsLoader';
import PrivateRoute from './PrivateRoute';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => productsLoader()
      },
      {
        path: '/order',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
]);


export default route;