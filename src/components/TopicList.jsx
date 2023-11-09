import Link from "next/link";
import React from "react";
import DataSet from "@/callApi/blog";
import Feedback from "@/components/feedback";
import Footer from "./footer";

export default async function TopicList() {
  const { data } = await DataSet();

  return (
    <>
      <div className="flex flex-col md:flex-row w-full mb-8">
        <div className="w-full md:w-2/3 mx-auto md:mx-0 mb-8 md:mb-0 md:pr-4">
          {data.map((e, index) => (
            <div
              className="card-body  card bg-gray-300 glass mb-4 md:mb-3 bg-opacity-27 border-opacity-71 backdrop-blur-[5.7px] webkit-backdrop-blur-[5.7px] border border-black rounded-16 shadow-2xl"
              key={index}
            >
              <h2 className="card-title">{e.title}</h2>
              <p>{e.des}</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${e.id}`}>
                  <button className="btn btn-primary">Read More!</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3">
          <div className="overflow-y-scroll mb-8 md:mb-0">
            <h1 className="text-2xl text-black flex justify-center mt-9">
              Upcoming Blog
            </h1>
            {data.map((e, index) => (
              <div className="mb-4" key={index}>
                <div className="card-body shadow-md bg-slate-300 rounded-2xl">
                  <h2 className="card-title">{e.title}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-300 p-4">
            <Feedback />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
