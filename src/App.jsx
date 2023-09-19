import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,  Routes , Route   } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from './pages/Menu';
import Footer from './components/Footer';

function App() {


  return (
    <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer/>
    </Router>
    
  );
}

export default App
