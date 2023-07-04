import React from 'react'

const Profile = ({username}) => {
  return (
    <div className=" rounded-lg dark:border-gray-700 ">
        <div className="  h-52 mb-4 rounded bg-gray-200">
            <div className="flex items-center items-center ">
    <div className='flex items-center justify-center h-48 mb-4 rounded '>
      <ul className='px-56'>
        <li><span className='font-bold'>Name  :</span> {username.username}</li>
        <li><span className='font-bold'>Email  :</span>{username.email}</li>
      </ul>
    </div>
    </div>         
        </div>
      </div>
  )
}

export default Profile
