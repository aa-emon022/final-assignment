'use client'
import React, { useState } from 'react';
import {
    IsEmpty,
    ErrorToast,
    SuccessToast,
  } from "@/utility/FromHelper";
  import { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';

const ContactForm = () => {
    const Router=useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    e.preventDefault();
    if (IsEmpty(formData.name )) {
        ErrorToast("fill the filed");
      } 
     
        else if (IsEmpty(formData.email)) {
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
        const res = await fetch("http://localhost:3000/api/feedback/feedbackPost", option);
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
    <><Toaster position="top-center" reverseOrder={false} />
    
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
      
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='FeedBack Please'
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default ContactForm;
