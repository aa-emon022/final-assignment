import React from 'react';
import Navbar from '@/components/Navbar';
import CallApi from '@/callApi/blog';
import Footer from "@/components/Footer";

export default async function page() {
  const { data } = await CallApi();

  return (
    <>
      <Navbar />
      <div className="md:m-[1rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((t, index) => (
          <div key={index} className="bg-[#317773] text-white p-4 rounded-lg shadow-lg">
            <div className="mb-4">
              <div className="text-xl font-bold flex justify-center">{t.title}</div>
              
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">{t.des}</div>
              
            </div>
            <p className="mt-[3rem] ">Published:{t.createAt} </p>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
