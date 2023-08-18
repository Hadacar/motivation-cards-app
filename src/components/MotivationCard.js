import React, { useState } from 'react';
import image from "../images/indir.jpg"

const MotivationCard = ({ user, motivationWord,}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md ${isFullScreen && "bg-white" }${isFullScreen ? 'fixed inset-0 z-50' : '' } group hover:bg-blue-500 duration-700`}
      onClick={toggleFullScreen}
    >
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-40"></div>
      )}
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">{user}</h2>
            <p className="text-gray-600 italic mb-4">{motivationWord}</p>
            <img src={image} alt="Motivation" className="max-w-full h-auto mb-4" />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={toggleFullScreen}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <h2 className="text-xl font-semibold group-hover:text-gray-200 duration-700">{user}</h2>
      <p className="text-gray-600 italic group-hover:text-white duration-700">{motivationWord}</p>
    </div>
  );
};

export default MotivationCard;
