import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Register';
import Profile from './components/menu/Profile';
import AdminLogin from './components/admin/AdminLogin';
import Admin from './components/admin/Admin';



function App() {
    // Function to check if the current route is the login page
    const isLoginPage = () => {
      return window.location.pathname === '/login';
    };
    const [buttonVisible, setButtonVisible] = useState(true);
    const [signInVisible, setSignInVisible] = useState(true);
  const handleButtonClick = () => {
    setButtonVisible(false);
    setSignInVisible(false);
  };
  return (
    <Router>
   <div className="flex items-center justify-center h-screen">
        {buttonVisible && !isLoginPage() && (
          <Link to="/login">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleButtonClick}
            >
              Login
            </button>
          </Link>
        )}
         {signInVisible && !isLoginPage() && (
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
        )}

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
