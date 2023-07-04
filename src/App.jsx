import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/Register';
import Profile from './components/menu/Profile';
import AdminLogin from './components/admin/AdminLogin';
import Admin from './components/admin/Admin';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
