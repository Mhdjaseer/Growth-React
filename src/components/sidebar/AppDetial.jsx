import React, { useState } from 'react';
import img from '../../assets/icons8-image-96.png';
import axiosInstance from '../../axios';

const AppDetial = ({ selectedApp }) => {
  const [file, setFile] = useState(null);

  function handleDrop(e) {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    if (fileList.length > 0) {
      const selectedFile = fileList[0];
      setFile(URL.createObjectURL(selectedFile));
      handlePostData(selectedFile);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  const handlePostData = async (file) => {
    
    try {
        
      const formData = new FormData();
      formData.append('file', file);
      formData.append('user', selectedApp.created_by);
      formData.append('app', selectedApp.id);
      formData.append('clicked', 'true');
  
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
  
      const response = await axiosInstance.post('/api/user-apps/', formData, { headers });
      console.log(response.data);
      console.log('success');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="rounded-lg dark:border-gray-700">
      <div className="h-52 mb-4 rounded bg-gray-200">
        <div className="flex items-start">
          <img src={selectedApp.image} className="object-cover h-48 w-56 px-5 py-5" alt="image" />
          <div className="flex items-center justify-center h-48 mb-4 rounded ">
            <div>
              <p className="text-2xl text-[#6558f5] font-bold">{selectedApp.name}</p>
              <a href="#" className="underline text-blue-400">
                {selectedApp.app_link}
              </a>
            </div>
            <div className="items-end justify-end">
              <div className="absolute right-10 text-xl">
                <div className="px-20 py-2 bg-[#8dd7cf] border-2 border-[#5ac5b9']">
                  {selectedApp.points} Points
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: '1px solid black', padding: '1rem', height: '500px' }}
      >
        <div className="flex items-center justify-center h-full">
          {!file && (
            <div>
              <img src={img} alt="image" className="w-56" />
              <p>Drag and drop files here</p>
            </div>
          )}
          {file && <img src={file} className="cover-image h-96" alt="Selected File" />}
        </div>
      </div>
    </div>
  );
};

export default AppDetial;
