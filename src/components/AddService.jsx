"use client"
import React, { useState } from 'react';
import {
  IsEmpty,
  ErrorToast,
  SuccessToast,
} from '@/utility/FromHelper';
import { Toaster } from 'react-hot-toast';

export default function Service() {
  const [data, setData] = useState({ title: '', counts: '' });

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formHandle = async (e) => {
    e.preventDefault();
    if (IsEmpty(data.title)) {
      ErrorToast(' Fill in the blanks');
    } else if (IsEmpty(data.counts)) {
      ErrorToast('Fill in the blanks');
    } else {
      const options = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      const Res = await fetch('http://localhost:3000/api/services', options);
      const resJson = await Res.json();

      if (resJson['status'] === 'success') {
        SuccessToast(' success');
      } else {
        ErrorToast('failed');
      }
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full max-w-md">
          <form onSubmit={formHandle} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                onChange={(e) => {
                  inputOnChange('title', e.target.value);
                }}
                type="text"
                placeholder="Title"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="counts">
                Number
              </label>
              <input
                onChange={(e) => {
                  inputOnChange('counts', e.target.value);
                }}
                type="number"
                placeholder="Number"
                id="counts"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out border-2 border-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
