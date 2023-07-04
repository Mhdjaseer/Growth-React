import React, {useState,useEffect}from 'react'
import NavBar from '../navbar/NavBar'
import AdminDash from './AdminDash';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const fetchUserData = async () => {
        try {
          const response = await axiosInstance.get('/api/user-data/');
          const userData = response.data;
          setUsername(userData);
          console.log(userData,"dgsag")
          // console.log(userData)
        } catch (error) {
          setError('Failed to fetch user data.');
        }
      };
      useEffect(() => {
        fetchUserData();

      }, []);
  return (
    <div>
      <NavBar username={username}/>
        <AdminDash/>

    </div>
  )
}

export default Admin
