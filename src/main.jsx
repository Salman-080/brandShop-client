import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Categories from './Pages/Categories/Categories';
import AddProduct from './Pages/AddProduct/AddProduct';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import Cart from './Pages/Cart/Cart';
import UpdatePage from './Pages/UpdatePage/UpdatePage';
import Provider from './AuthProvider/Provider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category/:brandName",
        element: <Categories></Categories>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/product/:productId",
        element: <ProductsPage></ProductsPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.productId}`)

      },
      {
        path: "/cart",
        element: <Cart></Cart>,
        loader: () => fetch("http://localhost:5000/product/cart")
      },
      {
        path: "/update/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)

      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/register",
        element: <Register></Register>

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
