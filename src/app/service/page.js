import React from 'react';
import Navbar from '@/components/Navbar';
import CallApi from '@/callApi/service';
import Link from 'next/link';

export default async function page() {
  const { data } = await CallApi();

  return (
    <>
      <Navbar />
      <div className="md:m-[1rem]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((t, index) => (
          <div key={index} className="bg-[#EEA47F] p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="text-xl font-bold flex justify-center">{t.title}</div>
              
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">{t.counts}</div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
