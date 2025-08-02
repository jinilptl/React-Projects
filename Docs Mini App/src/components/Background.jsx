import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 z-0">
      <div className="p-6 text-left">
        <h1 className="text-3xl font-semibold text-white">Document</h1>
      </div>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-white/10 select-none leading-none text-center">
          DOCS
        </h1>
      </div>
    </div>
  );
};

export default Background;
