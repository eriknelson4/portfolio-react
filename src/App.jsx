import { Route, Routes } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from './Components/About/About';
import Portfolio from "./Components/Portfolio/Portfolio";
import Admin from "./Components/Admin/Admin";
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App;
