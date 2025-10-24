import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Pets from './Pages/Pets';
import Veterinarian from './Pages/Veterinarian';
import Feed from './Pages/Feed';
import Medicines from './Pages/Medicines';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
// import Pets from './Pages/Pets';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footermain'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/veterinarian" element={<Veterinarian />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Medicines" element={<Medicines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pets/:petId" element={<Pets />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;