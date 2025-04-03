import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteLayout from './website/Pages/WebsiteLayout'
import AdminLayout from './admin/Pages/AdminLayout'
import Home from './website/Pages/Home'
import DashBoard from './admin/Pages/DashBoard'
import ViewCategory from './admin/Pages/Category/ViewCategory'
import AddCategory from './admin/Pages/Category/AddCategory'
import EditCategory from './admin/Pages/Category/EditCategory'
import ViewColor from './admin/Pages/Colors/ViewColor'
import AddColor from './admin/Pages/Colors/AddColor'
import ViewProduct from './admin/Pages/Product/ViewProduct'
import AddProduct from './admin/Pages/Product/AddProduct'
import MultipleImage from './admin/Pages/Product/MultipleImage'
import AdminLogin from './admin/Pages/Login'
import Store from './website/Pages/Store';
import Cart from './website/Pages/Cart';
import { useDispatch } from 'react-redux'
import { lsToCart } from './redux/slice/cartSlice'
import { lsToUser } from './redux/slice/userSlice'
import Register from './website/Pages/Register'
import UserLogin from './website/Pages/Login'


export default function App() {
  const dispatcher = useDispatch();
  useEffect(
    () => {
      dispatcher(lsToCart())
      dispatcher(lsToUser())
    },
    []
  )

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/store/:categorySlug?",
          element: <Store />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]

    },

    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <UserLogin />
    }

    ,
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <DashBoard />
        },
        {
          path: "category",
          element: <ViewCategory />
        },
        {
          path: "category/add",
          element: <AddCategory />
        },
        {
          path: "category/edit/:category_id",
          element: <EditCategory />
        },
        {
          path: "colors",
          element: <ViewColor />
        },
        {
          path: "colors/add",
          element: <AddColor />
        },
        {
          path: "product",
          element: <ViewProduct />
        },
        {
          path: "product/add",
          element: <AddProduct />
        },
        {
          path: "product/multiple-image/:productId",
          element: <MultipleImage />
        },


      ]

    },

    {
      path: "/admin/login",
      element: <AdminLogin />

    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
