import React from 'react';

import {
  createBrowserRouter
} from "react-router";
import Root from '../Layouts/Root';
import HomeLayout from '../Layouts/HomeLayout';
import About from '../Pages/About';
import BillPayment from '../Pages/BillPayment';
import BillDetails from '../Pages/BillDetails';
import AuthForm from '../Components/AuthForm';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h2>Error 404</h2>,
    children: [
      {
        index: true,
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/paybills",
        element:<BillPayment></BillPayment>,
      },
      {
        path: "/billdetails/:id",
        element: <BillDetails></BillDetails>,
      },
      {
        path: "/login",
        element: <AuthForm></AuthForm>,
      }
    ]
  },
]);