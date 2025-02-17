import React from 'react'
import Listing from './components/Listing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsPage from './components/DetailsPage'
import Layout from './components/Layout'
import Cart from './Cart'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:category_slug?",
          element: <Listing />
        },
        {
          path: "/detail/:product_id",
          element: <DetailsPage />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }

  ])
  return (
    <RouterProvider router={routers} />
  )
}
