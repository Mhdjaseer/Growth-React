import React, { useState, useRef } from 'react';
import img from '../../assets/icons8-image-96.png';
import axiosInstance from '../../axios';

const AppAdd = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [appName, setAppName] = useState('');
  const [appLink, setAppLink] = useState('');
  const [appCategory, setAppCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [numberInput, setNumberInput] = useState('');

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileUrl = URL.createObjectURL(selectedFile);
    setFile(fileUrl);
  };

  const handleAppNameChange = (event) => {
    setAppName(event.target.value);
  };

  const handleAppLinkChange = (event) => {
    setAppLink(event.target.value);
  };

  const handleAppCategoryChange = (event) => {
    setAppCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const handlePostData = async () => {
    
    try {
        
        const Data = {
            name: appName,
            app_link: appLink,
            category: appCategory,
            subcategory: subCategory,
            points: numberInput,
            image: file,
            // created_by: 1,
          };
      const headers = {
        'Content-Type': 'multipart/form-data',
      };
  
      const response = await axiosInstance.post('/api/admin/', Data, { headers });
      console.log(response.data);
      console.log('success');
    } catch (error) {
      console.error(error);
    }
  };
  






  const handleSubmit = (event) => {
    event.preventDefault();
    handlePostData()
    // Handle form submission with the captured values
    // You can access the captured values using the state variables
    console.log('File:', file);
    console.log('App Name:', appName);
    console.log('App Link:', appLink);
    console.log('App Category:', appCategory);
    console.log('Sub Category:', subCategory);
    console.log('Number Input:', numberInput);
  };

  return (
    <div className="rounded-lg dark:border-gray-700">
      <div className="h-52 mb-4 rounded bg-gray-200">
        <div className="flex items-center justify-center h-full">
          <div>
            {!file && (
              <div>
                <img
                  src={img}
                  alt="image"
                  className="w-56 cursor-pointer"
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
            )}
            {file && (
              <img src={file} className="cover-image h-36" alt="Selected File" />
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center pt-10">
            <input
              type="text"
              className="mr-72 w-56 p-2 rounded border-2 border-black"
              placeholder="App name"
              value={appName}
              onChange={handleAppNameChange}
            />
            <input
              type="text"
              className="p-2 rounded w-56 border-2 border-black"
              placeholder="App link"
              value={appLink}
              onChange={handleAppLinkChange}
            />
          </div>
          <div className="flex items-center justify-center pt-28">
            <select
              value={appCategory}
              onChange={handleAppCategoryChange}
              className="p-2 rounded mr-72 w-56 border-2 border-black"
            >
              <option value="">App Category</option>
              <option value="option1">Social</option>
              <option value="option2">Entertainment</option>
              <option value="option3">Game</option>
            </select>

            <select
              value={subCategory}
              onChange={handleSubCategoryChange}
              className="p-2 rounded w-56 border-2 border-black"
            >
              <option value="">Sub Category</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex items-center justify-center pt-10">
            <input
              type="number"
              className="mr-2 p-4 bg-green-400 text-gray-700 rounded"
              placeholder="Number Input"
              value={numberInput}
              onChange={handleNumberInputChange}
            />
            <span className="p-4 font-bold bg-green-400 rounded">points</span>
          </div>
          <div className="flex items-center justify-center pt-10">
            <input
              type="submit"
              className="mr-2 p-4 bg-red-400 text-gray-700 rounded"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppAdd;
