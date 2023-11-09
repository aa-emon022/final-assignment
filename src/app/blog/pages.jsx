import React from 'react';

export default function pages({ title, des, createAt }) {
  return (
    <div className="bg-blue-100 h-screen flex justify-center items-start ">
      <div className="container p-4 shadow-lg rounded-lg border  border-gray-300 bg-white  mt-[7rem]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-blue-900">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-600">
          {des}
        </p>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-400">
          Created at {createAt}
        </p>
      </div>
    </div>
  );
}
