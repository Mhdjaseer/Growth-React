import React from 'react'
import axiosInstance from '../../axios'

const Points = ({username}) => {
  return (
    <div>
       <div className=" rounded-lg dark:border-gray-700 ">
        <div className="  h-52 mb-4 rounded bg-gray-200">
            <div className="flex items-center items-center ">
    <div className='flex items-center justify-center h-48 mb-4 rounded '>
                <div className=" text-xl">
                    <div className='px-20 py-2 bg-[#8dd7cf] border-2 border-[#5ac5b9' >Total Points:{username.profile.total_points}</div>
                </div>
            </div> 
      
        {/* <h3>{username.profile.total_points}</h3> */}
    </div>
    </div>
            </div>         
        </div>
      
  )
}

export default Points
