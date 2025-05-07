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
import ErrorPage from '../Pages/ErrorPage';
import TransactionHistory from '../Pages/TransactionHistory';
import Support from '../Pages/Support';
import SSLSecured from '../Components/SSLSecured';
import TermsAndConditions from '../Components/TermsAndConditions';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import Careers from '../Components/Careers';
import FAQs from '../Components/FAQs';
import ContactUs from '../Components/ContactUs';
import HelpCenter from '../Components/HelpCenter';
import ReportProblem from '../Components/ReportProblem';
import EncryptedPayments from '../Components/EncryptedPayments';
import TrustedUsers from '../Components/TrustedUsers';
import PrivateRoute from '../Provider/PrivateRoute';
import LoginRequiredNotice from '../Components/LoginRequiredNotice';
import Dashboard from '../Pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/pay-bills",
        element:<PrivateRoute>
          <BillPayment></BillPayment>
        </PrivateRoute>,
      },
      {
        path: "/billdetails/:id",
        element: <PrivateRoute>
          <BillDetails></BillDetails>
        </PrivateRoute>,
      },
      {
        path: "/transactionhistory",
        element: <PrivateRoute>
          <TransactionHistory></TransactionHistory>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <AuthForm></AuthForm>,
      },
      {
        path:"/support",
        element: <Support></Support>
      },
      {
        path:"/sslsecured",
        element:<SSLSecured></SSLSecured>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/careers",
        element: <Careers></Careers>,
      },
      {
        path: "/faq",
        element: <FAQs></FAQs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/helpcenter",
        element: <HelpCenter></HelpCenter>,
      },
      {
        path: "/reportproblem",
        element: <ReportProblem></ReportProblem>,
      },
      {
        path: "/encrypted-payment",
        element: <EncryptedPayments></EncryptedPayments>,
      },
      {
        path: "/trusted-users",
        element: <TrustedUsers></TrustedUsers>
      },
      {
        path:"/login-required",
        element: <LoginRequiredNotice></LoginRequiredNotice>,
      },
      {
        path:'/dashboard',
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }
    ]
  },
]);