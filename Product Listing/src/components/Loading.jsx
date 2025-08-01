import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
