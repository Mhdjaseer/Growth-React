import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios';
import NavBar from './navbar/NavBar';
import Dashboard from './sidebar/Dashboard';
import Profile from './menu/Profile';
import Points from './menu/Points';
import Task from './menu/Task';

const Home = () => {
  const [userApps, setUserApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [appDetail, setAppDetail] = useState([]); 

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('/api/user-data/');
      const userData = response.data;
      setUsername(userData);
      // console.log(userData)
    } catch (error) {
      setError('Failed to fetch user data.');
    }
  };

  const fetchUserApps = async () => {
    try {
      const response = await axiosInstance.get('/api/user-apps/');
      const data = response.data;
      setUserApps(data);
      // console.log(data);
    } catch (error) {
      setError('Failed to fetch user apps.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAppDetail = async () => { 
    try {
      const response = await axiosInstance.get('/api/app-detial/'); 
      const data = response.data;
      setAppDetail(data);
      // console.log(data);
    } catch (error) {
      setError('Failed to fetch app detail.'); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchUserApps();
    fetchAppDetail(); // Updated function name
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar username={username} />
      <Dashboard userApps={userApps} appDetail={appDetail}  username={username} />
      
    </div>
  );
};

export default Home;
