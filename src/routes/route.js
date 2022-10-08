import { createBrowserRouter } from 'react-router-dom';
import Order from '../components/Order/Order';
import Shop from '../components/Shop/Shop';
import Main from '../layouts/Main';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>
      }
    ]
  }
]);


export default route;