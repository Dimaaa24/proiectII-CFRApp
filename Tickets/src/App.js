
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// navigatu

function App() {
  return (
    <>
     
    <nav className='navMenu' >
    <a>
    <Link to="/">Home</Link>
    </a>
    <a>
    <Link to="/login">Login</Link>
    </a>
    <a>
    <Link to="/register">Register</Link>
    </a>
    <div className="dot"></div>
      
       
      
    </nav>
  <Routes>
  
    
    <Route path ="/" element = {<Home/>}/>
    <Route path ="/login" element = {<Login/>}/>
    <Route path ="/register" element = {<Register/>}/>

    
  </Routes>
  </>
  )

}

export default App;
