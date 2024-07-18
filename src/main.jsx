import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import SignupPage from './pages/user/SignupPage';
import SigninPage from './pages/user/SigninPage';
import UserLayout from './layout/UserLayout';
import App from './App';
import ErrorPage from './ErrorPage';
import Dashboard from './components/user/Dashboard';
import AdminLayout from './layout/AdminLayout';
import AdminSignup from './components/admin/AdminSignup';
import AdminLogin from './components/admin/AdminSignin';
import AuthLayout from './layout/AuthLayout';
import Vehicle from './components/user/Vehicle';
import VehicleDetail from './pages/user/VehicleDetail';
import Reservation from './pages/user/Reservation';
import AdminApp from './pages/admin/AdminApp';
import UserRoutes from './components/protected-routes/UserRoutes';
import { Provider } from 'react-redux';
import {store} from './Redux/store'; 
import AdminRoutes from './components/protected-routes/AdminRoutes';
import AboutUs from './components/user/About';
import ContactUs from './components/user/ContactUs';

const router = createBrowserRouter([
  {
    element: 
    (
       <UserRoutes>
        <UserLayout />
       </UserRoutes>
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'user/dashboard',
        element:<Dashboard />,
      },
      {
        path: "/about",
        element: <AboutUs/> ,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: '/vehicle',
        element:<Vehicle />,
      },
      {
        path: '/vehicle-detail',
        element: <VehicleDetail />,
      },
      {
        path: 'vehicle/reservation',
        element: <Reservation />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
  {
    element: (
    <AdminRoutes>
      <AdminLayout />
    </AdminRoutes>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminApp />
      }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/user/signup',
        element: <SignupPage />,
      },
      {
        path: '/user/login',
        element: <SigninPage />,
      },
      {
        path: 'admin/signup',
        element: <AdminSignup />,
      },
      {
        path: 'admin',
        element: <AdminLogin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
      
    
  </React.StrictMode>
);
