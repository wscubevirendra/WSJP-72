import React from 'react'
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

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }

      ]

    },
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
        }

      ]

    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
