import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
      username: '',
      password: '',
    });
    const [formData, updateFormData] = useState(initialFormData);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
  
      axiosInstance
        .post(`/api/token/`, {
          username: formData.username,
          password: formData.password,
        })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
          navigate('/admin');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" class="mx-auto h-10 w-auto" />
        
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
    
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          
          <div class="flex items-center justify-between">
            <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          
          <div class="mt-2">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          
          <div>
            <input type="submit" value="Login" onClick={handleSubmit} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
          </div>
        </form>
      </div>
    </div>
    
    
  
    );
  };
  

  
export default AdminLogin
