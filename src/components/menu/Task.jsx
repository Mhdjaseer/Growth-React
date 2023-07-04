import React from 'react';

const Task = ({ username, userApps, appDetail }) => {
  const filteredUserApps = userApps.filter(app => app.user === username.id);

  console.log(filteredUserApps, "this is my filtered app data");

  return (
    <div>

        <h1 className='font-bold'>Compleated  task on the app data </h1>

      {filteredUserApps.map(app => {
        // Find the app details with matching id
        const appDetails = appDetail.find(detail => detail.id === app.app);

        if (appDetails) {
          return (
            <div className=" rounded-lg dark:border-gray-700 ">
        <div className="  h-52 mb-4 rounded bg-gray-200">
            <div className="flex items-center items-center ">
    <div className='flex items-center justify-center h-48 mb-4 rounded '>
            <div key={app.id}>
              
              <p className='font-bold'>Name: {appDetails.name}</p>
              <p>Category: {appDetails.category}</p>
              <p>Subcategory: {appDetails.subcategory}</p>
              <p>Points: {appDetails.points}</p>
              <p>App Link: <a href={appDetails.app_link}>{appDetails.app_link}</a></p>
              </div>
    </div>         
        </div>
      </div>
            </div>
          );
        }

        return null; // App details not found
      })}
    </div>
  );
};

export default Task;
