import React, { useEffect } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';



export default function SignUp() {
  const navigate = useNavigate();

  // Access the authentication status from the context


  useEffect(() => {
    const logout = async () => {
      try {
        const token = window.localStorage.getItem('refresh_token');
        const response=await axiosInstance.post('api/token/blacklist/', {
          "refresh": token,
        });
        

        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        
        navigate('/login');
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    logout();
  }, [navigate]);

  return <div>Logout</div>;
}


