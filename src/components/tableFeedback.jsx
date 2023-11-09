import React from 'react';
import apiCall from "@/callApi/feedback";
import DashboardNav from '@/components/Dashboard_navBar';
export default async function TableFeedBack() {
  const { data } = await apiCall();

  return (
    <>
    <DashboardNav/>
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Serial</th>
                <th className="px-4 py-2"> Name</th>
               
                <th className="px-4 py-2">Email</th>
            
                <th className="px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((t, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{t.id}</td>
                  <td className="border px-4 py-2">{t.name}</td>
                  
                  <td className="border px-4 py-2">{t.email}</td>
                 
                  <td className="border px-4 py-2">{t.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
