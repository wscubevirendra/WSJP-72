import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddQuiz from './pages/AddQuiz';
import ViewQuiz from './pages/ViewQuiz';
import Register from './pages/Register';
import { initializeApp } from "firebase/app";
import Login from './pages/Login';
const firebaseConfig = {
  apiKey: "AIzaSyBZMBwBSOCGQ6SWTF8B5MVN7VnsSC5KEnk",
  authDomain: "wsjp72.firebaseapp.com",
  databaseURL: "https://wsjp72-default-rtdb.firebaseio.com",
  projectId: "wsjp72",
  storageBucket: "wsjp72.firebasestorage.app",
  messagingSenderId: "727814567765",
  appId: "1:727814567765:web:222ba1d05682a37f01e1dc",
  measurementId: "G-MBSBY49JFT"
};

// Initialize Firebase
const FireBaseapp = initializeApp(firebaseConfig);

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "add-quiz",
          element: <AddQuiz />
        }, {
          path: "view-quiz",
          element: <ViewQuiz />
        }

      ]
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "login",
      element: <Login />
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
