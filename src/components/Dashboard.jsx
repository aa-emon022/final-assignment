import React from 'react';
import Link from 'next/link';
import CallApi from '@/callApi/blog';
import DashboardNavBar from './Dashboard_navBar';
import RemoveBtn from '@/components/RemoveBtn';

export default async function Dashboard() {


  return (
    <>
      <div className="bg-gray-100 min-h-screen" >
      
        
          <DashboardNavBar />
       
        <div className='md:m-[1rem] '>
          <h1 className="text-center mt-[10rem]">welcome</h1>
        </div>
      </div>
    </>
  );
}
