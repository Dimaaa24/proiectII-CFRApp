import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ForgotPassword from './pages/ForgotPassword';
import Menu from './pages/Menu';
import { useState } from 'react';
// Navigation bar

const App = () => {
  const [isMenuPage, setIsMenuPage] = useState(false); // Starea pentru a urmări dacă ești pe pagina Menu

  // Funcție pentru a actualiza starea când navighezi către pagina Menu
  const handleNavigateToMenu = () => {
    setIsMenuPage(true);
  };
 
  return (

    <main className="overflow-hidden">
    {!isMenuPage && <Navbar />} {/* Afișează Navbar-ul doar dacă nu ești pe pagina Menu */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/menu" element={<Menu onPageLoad={handleNavigateToMenu} />} />
      </Routes>
      <Footer />
    </main>
  );
};



export default App;
