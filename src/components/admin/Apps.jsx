import React from 'react'

const Apps = ({app}) => {
    console.log(app,"htisi si gsi")
  return (
    <div className=" rounded-lg dark:border-gray-700 ">
        <div className="  h-52 mb-4 rounded bg-gray-200">
            <div className="flex items-start ">
                <img src={app.image} class="object-cover h-48 w-56 px-5 py-5" alt="image" />
                    <div class="flex items-center justify-center h-48 mb-4 rounded ">
                        <div >
                        <p class="text-2xl text-[#6558f5] font-bold ">{app.name}</p>
                        
                        </div>
                        <div className=" items-end justify-end   ">
                            <div className="absolute right-10 text-xl">
                                <div className='px-20 py-2 bg-[#8dd7cf] border-2 border-[#5ac5b9' >{app.points}  Points</div>
                            </div>
                        </div>
                    </div>
            </div>         
        </div>
      </div>
  )
}

export default Apps
