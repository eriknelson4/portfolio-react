import { Route, Routes } from "react-router-dom";
import About from './Pages/Home/Home';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Admin from "./Pages/Admin/Admin";
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills';
import Users from './Pages/Admin/Users/Users';
import Settings from './Pages/Admin/Settings/Settings';
import Items from './Pages/Admin/Items/Items';
import { useUI } from './Context/UIContext';
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const { userRole } = useUI();

  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/users"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/settings"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/items"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Items />
          </ProtectedRoute>
        }
      />
      <Route path="/admin"
        element={
          <ProtectedRoute userRole={ userRole }>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App;
