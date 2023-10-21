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
import NoPage from './Pages/NoPage/NoPage';
import CartPrivate from './PrivateRoute/CartPrivate';
import AddProductPrivate from './PrivateRoute/AddProductPrivate';
import ProductDetailsPrivate from './PrivateRoute/ProductDetailsPrivate';
import UpdatePrivate from './PrivateRoute/UpdatePrivate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NoPage></NoPage>,
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
        element: <AddProductPrivate> <AddProduct></AddProduct></AddProductPrivate>
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPrivate>
           <ProductsPage></ProductsPage>
        </ProductDetailsPrivate>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.productId}`)

      },
      {
        path: "/cart/:userEmail",
        element: <CartPrivate>
          <Cart></Cart>
        </CartPrivate> ,
        loader: ({params}) => fetch(`http://localhost:5000/product/cart/${params.userEmail}`)
      },
      {
        path: "/update/:id",
        element: <UpdatePrivate> <UpdatePage></UpdatePage></UpdatePrivate>,
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
