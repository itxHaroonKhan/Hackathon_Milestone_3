"use client";
/* Full-Screen Loader */
import React from 'react';

const Loding = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
      <div className="relative w-40 h-40 animate-spin">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-300 border-t-blue-400 rounded-full"></div>
        <div className="absolute top-2 left-2 w-36 h-36 border-8 border-gray-200 border-t-blue-300 rounded-full animate-[spin_2s_linear_infinite]"></div>
        <div className="absolute top-4 left-4 w-32 h-32 border-8 border-gray-100 border-t-blue-200 rounded-full animate-[spin_3s_linear_infinite]"></div>
      </div>
      <p className="absolute bottom-10 text-lg font-medium text-gray-600">Loading...</p>
    </div>
  );
};

export default Loding;
