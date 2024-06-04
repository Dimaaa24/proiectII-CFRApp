import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ForgotPassword from './pages/ForgotPassword';
import Menu from './pages/Menu';
import { useState, useEffect } from 'react';
import AdminPage from './pages/AdminPage.jsx';
import UserPage from './pages/UserPage';

const App = () => {
  const [isMenuPage, setIsMenuPage] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    // Update state based on the current path
    if (location.pathname === '/menu') {
      setIsMenuPage(true);
    } else {
      setIsMenuPage(false);
    }
  }, [location.pathname]);

  const shouldShowNavbar = () => {
    return location.pathname !== '/adminpage' && location.pathname !== '/userpage' && !isMenuPage;
  };

  return (
    <main className="overflow-hidden">
      {shouldShowNavbar() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
      {/* <Footer /> */}
    </main>
  );
};

export default App;