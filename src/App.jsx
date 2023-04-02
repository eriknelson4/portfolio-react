import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import About from './Components/About/About';
import Portfolio from "./Components/Portfolio/Portfolio";
import Admin from "./Components/Admin/Admin";
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
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
