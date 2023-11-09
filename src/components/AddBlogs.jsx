"use client";
import React, { useState } from "react";
import {
  IsEmpty,
  ErrorToast,
  SuccessToast,
} from "@/utility/FromHelper";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import DashboardNavBar from './Dashboard_navBar' 
export default function addBlogs() {
  const [data, setData] = useState({ title: "", des: "" });
  const router = useRouter();

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (IsEmpty(data.title )) {
      ErrorToast("fill the filed");
    } 
    else if (IsEmpty(data.des)) {
        ErrorToast("fill the filed");
      }else {
      const option = {
        method: "POST",
        headers: { // Changed 'Headers' to 'headers'
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch("http://localhost:3000/api/topic", option);
      const resJson = await res.json();
      if (resJson["status"] === "success") {
        SuccessToast("success full");
        router.refresh();
      } else {
        ErrorToast(" failed");
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <DashboardNavBar />
      <div className="mt-[3rem]">
        <form className="flex flex-col space-y-4 lg:w-1/2 md:w-3/4 sm:w-full mx-auto" onSubmit={formSubmit}>
          <input
            className="border border-slate-600 px-3 py-2 md:w-1/2 w-full mx-auto"
            type="text"
            placeholder="Add Title"
            onChange={(e) => {
              inputOnChange("title", e.target.value);
            }}
          />
          <div className="w-full pt-[2rem]">
           
            <textarea
              onChange={(e) => {
                inputOnChange("des", e.target.value);
              }}
              placeholder="Add Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
          </div>
          <button
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit mx-auto"
            type="submit"
          >
            Add Topic
          </button>
        </form>
      </div>
    </>
  );
}
