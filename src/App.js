import { RouterProvider } from 'react-router-dom';
import route from './routes/route';
import './App.css';



function App() {

  return (
    <main>
      <RouterProvider router={route}></RouterProvider>
    </main >
  );
}

export default App;
