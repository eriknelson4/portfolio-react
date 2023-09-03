import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from "./Components/ProtectedRoute";
import { UIProvider } from './Context/UIContext';
import './Styles/index.scss';

import Home from './Pages/Home/Home';
const Skills = lazy(() => import('./Pages/Skills/Skills'));
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Guitar = lazy(() => import('./Pages/Guitar/Guitar'));
const Admin = lazy(() => import('./Pages/Admin/Admin'));
const Experiments = lazy(() => import('./Pages/Experiments/Experiments'));
const Users = lazy(() => import('./Pages/Admin/Users/Users'));
const Settings = lazy(() => import('./Pages/Admin/Settings/Settings'));
const Items = lazy(() => import('./Pages/Admin/Items/Items'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));

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
    path: '/experiments',
    element: <Suspense><Experiments/></Suspense>
  },
  {
    path: '/skills',
    element: <Suspense><Skills/></Suspense>
  },
  {
    path: '/guitar',
    element: <Suspense><Guitar/></Suspense>
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