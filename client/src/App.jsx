import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Layout from './layout/Layout'
import './styles/app.module.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  },

])

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
