"use client"
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'

export default function EditBlog({ id, title, counts }) {
  const Router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDes, setNewDes] = useState(counts);
console.log(id)
  const formHandleChange = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/services?id=${id}`, {
        method: "PUT",
        headers: {Accept: "application/json", "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDes })
      });
      
     const resJson = await res.json();
       console.log(resJson)
      if (resJson["status"] === 'success') {
      
        Router.push("/deshboard");
      } else {
        throw new Error("Failed");
      }
    } catch (e) {
      console.log("failed");
    }
  }

  return (
    <>
      <div className="bg-gray-100">
        <form onSubmit={formHandleChange} className="bg-white shadow-md p-6 rounded-lg">
         <label className="block text-sm font-medium text-gray-600">Title</label>
          <input className="w-full px-3 py-2 mt-1 text-sm text-gray-900 placeholder-gray-500 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-300" type='text' onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
          <label className="block text-sm font-medium text-gray-600 mt-4">Title</label>
          <textarea className="w-full px-3 py-2 mt-1 text-sm text-gray-900 placeholder-gray-500 border rounded-lg focus:ring focus:ring-indigo-200 focus:border-indigo-300" type='text' onChange={(e) => setNewDes(e.target.value)} value={newDes} />
          <button  className="w-full py-2 mt-4 font-semibold text-white bg-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-700 hover:border-indigo-700 transition-all duration-300 ease-in-out" type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}

