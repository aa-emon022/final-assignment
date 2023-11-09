'use client'
import Footer from "@/components/Footer";
import  DashboardNavBar  from '@/components/Navbar'
import React, { useState } from 'react';
import {
  IsEmpty,
  ErrorToast,
  SuccessToast,
} from "@/utility/FromHelper";
import { Toaster } from "react-hot-toast";
import { Router, useRouter } from "next/navigation";

function App() {
  const Router=useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (IsEmpty(formData.firstName )) {
      ErrorToast("fill the filed");
    } 
    else if (IsEmpty(formData.lastName)) {
        ErrorToast("fill the filed");
      }
      else if (IsEmpty(formData.email)) {
        ErrorToast("fill the filed");
      }
      else if (IsEmpty(formData.phone)) {
        ErrorToast("fill the filed");
      }
      else if (IsEmpty(formData.message)) {
        ErrorToast("fill the filed");
      }
      else {
      const option = {
        method: "POST",
        headers: { // Changed 'Headers' to 'headers'
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const res = await fetch("http://localhost:3000/api/contact/contactPost", option);
      const resJson = await res.json();
      if (resJson["status"] === "success") {
        SuccessToast("success full");
        Router.refresh();
      } else {
        ErrorToast(" failed");
      }
    }
  };
  
   
    
  

  return (

    <>
    <Toaster position="top-center" reverseOrder={false} />
     <DashboardNavBar />
        <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default App;
