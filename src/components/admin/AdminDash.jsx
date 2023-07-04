import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';

import Apps from './Apps';
import AppAdd from './AppAdd';

const AdminDash = () => {
  const [admin, setAdmin] = useState([]);
  const [error, setError] = useState('');
  const [showAddApp, setShowAddApp] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axiosInstance.get('api/admin/');
      const userData = response.data;
      setAdmin(userData);
    } catch (error) {
      setError('Failed to fetch user data.');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  
  const handleAddAppClick = () => {
    setShowAddApp(true);
  };

  const handleHomeClick = () => {
    setShowAddApp(false);
  };


  return (
    <div>
      <div className='relative'>
        <nav className='bg-white flex flex-col'></nav>
      </div>

      <div className='flex'>
        <div className='left-0 bg-gray-400 w-64 h-screen'>
          <div className='h-full px-3 py-4 overflow-y-auto'>
            <ul className='font-medium'>
              <li className='pb-4'>
                <p className='flex p-3 text-white rounded-md bg-[#6558f5] border border-[#6558f5]' onClick={handleHomeClick}>
                  <span className='mx-auto'>Home</span>
                </p>
              </li>
              <li className='pb-4'>
                <p className='flex p-3 text-[#6558f5] rounded-md bg-white border border-[#6558f5]'onClick={handleAddAppClick}>
                  <span className='mx-auto'>add app</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-white w-full p-4'>
          <div className='p-4 w-full bg-white'>
           

{showAddApp ? <AppAdd /> : admin.map((app) => <Apps key={app.id} app={app} />)}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
