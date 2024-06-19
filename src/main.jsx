import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SignupPage from './pages/user/SignupPage';
import SigninPage from './pages/user/SigninPage';
import UserLayout from './layout/UserLayout';
import App from './App'
import ErrorPage from './ErrorPage';
import Dashboard from './components/user/Dashboard';
import AdminLayout from './layout/AdminLayout';
import AdminSignup from './components/admin/AdminSignup';
import AdminLogin from './components/admin/AdminSignin';
import AuthLayout from './layout/AuthLayout';



const router = createBrowserRouter([{
  element: <UserLayout />,
  children: [
    {
      path: "/",
      element: <App />
    },
    
    {
      path: "user/dashboard",
      element: <Dashboard />,
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]
},
{
  element: <AdminLayout />,
  children: [
    

  ]
},
{
  element: <AuthLayout />,
  children: [
    {
      path: "/user/signup",
      element: <SignupPage />
    },
    {
      path: "/user/login",
      element: <SigninPage />
    },
    {
      path: "admin/signup",
      element: <AdminSignup />
    },
    {
      path: "admin/login",
      element: <AdminLogin />
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
