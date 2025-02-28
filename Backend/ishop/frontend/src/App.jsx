import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WebsiteLayout from './website/Pages/WebsiteLayout'
import AdminLayout from './admin/Pages/AdminLayout'
import Home from './website/Pages/Home'
import DashBoard from './admin/Pages/DashBoard'
import ViewCategory from './admin/Pages/Category/ViewCategory'
import AddCategory from './admin/Pages/Category/AddCategory'

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
        }

      ]

    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
