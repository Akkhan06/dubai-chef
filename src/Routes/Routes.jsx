import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import ViewDetails from '../components/ViewDetails/ViewDetails';
import Navbar from '../components/Navbar';
import Login from '../components/Login&Register/Login';
import Register from '../components/Login&Register/Register';
import Trams from '../Trams';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [
        {
            path: "/",
            element: <App></App>
        },
        {
            path: "view",
            element: <ViewDetails></ViewDetails>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "trams",
            element: <Trams></Trams>
        }
      ]
    },
  ]);

const Routes = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;