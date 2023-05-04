import React from 'react';
import App from '../App';
import ViewDetails from '../components/ViewDetails/ViewDetails';
import Navbar from '../components/Navbar';
import Login from '../components/Login&Register/Login';
import Register from '../components/Login&Register/Register';
import Trams from '../Trams';
import AuthProvider from '../components/AuthProvider/AuthProvider';
import Blog from "../components/Blog/Blog"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivateRouder from '../PrivateRouder/PrivateRouder';
import Banner from '../components/ViewDetails/Banner';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <App></App>
        },
        {
            path: "/cards/:id",
            element: <PrivateRouder><ViewDetails></ViewDetails></PrivateRouder>,
        },
        // {
        //   path: "view/:id",
        //   element: <PrivateRouder><Banner></Banner></PrivateRouder>
          
        // },
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
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ]
    },
  ]);

const Routes = () => {
    return (
        <div>
            <AuthProvider><RouterProvider router={router} /></AuthProvider>
        </div>
    );
};

export default Routes;