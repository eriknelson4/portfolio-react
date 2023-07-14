import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import About from './Pages/Home/Home';
import { useUI } from './Context/UIContext';
import ProtectedRoute from "./Components/ProtectedRoute";

const Skills = lazy(() => import('./Pages/Skills/Skills'));
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Admin = lazy(() => import('./Pages/Admin/Admin'));
const Users = lazy(() => import('./Pages/Admin/Users/Users'));
const Settings = lazy(() => import('./Pages/Admin/Settings/Settings'));
const Items = lazy(() => import('./Pages/Admin/Items/Items'));
const Guitar = lazy(() => import('./Pages/Guitar/Guitar'));
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />

      <Route path="/portfolio"
        element={
          <Suspense fallback={<p>...</p>}>
            <Portfolio />
          </Suspense>
        }
      />

      <Route path="/contact"
        element={
          <Suspense fallback={<p>...</p>}>
            <Contact />
          </Suspense>
        }
      />

      <Route path="/skills"
        element={
          <Suspense fallback={<p>...</p>}>
            <Skills />
          </Suspense>
        }
      />

      <Route path="/guitar"
        element={
          <Suspense fallback={<p>...</p>}>
            <Guitar />
          </Suspense>
        }
      />

      <Route path="/admin/users"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Suspense fallback={<p>...</p>}>
              <Users />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route path="/admin/settings"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Suspense fallback={<p>...</p>}>
              <Settings />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route path="/admin/items"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Suspense fallback={<p>...</p>}>
              <Items />
            </Suspense>
          </ProtectedRoute>
        }
      />
      <Route path="/admin"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Suspense fallback={<p>...</p>}>
              <Admin />
            </Suspense>
          </ProtectedRoute>
        }
      />

      <Route path='*' element={<NotFound />}/>

    </Routes>
  )
}

export default App;
