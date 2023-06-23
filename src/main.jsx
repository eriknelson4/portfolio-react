import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
const Skills = lazy(() => import('./Pages/Skills/Skills'));
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Admin = lazy(() => import('./Pages/Admin/Admin'));
const Users = lazy(() => import('./Pages/Admin/Users/Users'));
const Settings = lazy(() => import('./Pages/Admin/Settings/Settings'));
const Items = lazy(() => import('./Pages/Admin/Items/Items'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));
import ProtectedRoute from "./Components/ProtectedRoute";
import { UIProvider } from './Context/UIContext';
import './Styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/portfolio',
    element: <Suspense><Portfolio/></Suspense>
  },
  {
    path: '/contact',
    element: <Suspense><Contact/></Suspense>
  },
  {
    path: '/skills',
    element: <Suspense><Skills/></Suspense>
  },
  {
    path: '/admin',
    element: <Suspense><ProtectedRoute><Admin/></ProtectedRoute></Suspense>
  },
  {
    path: '/admin/users',
    element: <Suspense><ProtectedRoute><Users/></ProtectedRoute></Suspense>
  },
  {
    path: '/admin/settings',
    element: <Suspense><ProtectedRoute><Settings/></ProtectedRoute></Suspense>
  },
  {
    path: '/admin/items',
    element: <Suspense><ProtectedRoute><Items/></ProtectedRoute></Suspense>
  },
  {
    path: '*',
    element: <Suspense><NotFound/></Suspense>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UIProvider>
    <RouterProvider router={ router } />
  </UIProvider>
);