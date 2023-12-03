/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw Error("Work data load to failed!");
  }
  return res.json();
}
import React from "react";
import Stats from "./Stats";

const WorkList = async () => {
  const works = await getData();
  return (
    <section className="my-14">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/2">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            Work list
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            We provide the Perfect Solution to your business growth
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          {works.map((work, i) => {
            return (
              <div key={i} className="my-8 w-full p-4 lg:w-1/3">
                <div className="bg-da-green-light mb-4 h-16 w-16 rounded-xl p-4">
                  <img src="/images//Activity.png" alt="Activity" />
                </div>
                <h2 className="font-poppins mb-4 text-2xl font-semibold capitalize">
                  {work.title}
                </h2>
                <p className="font-avenir mb-8 text-lg">{work.des}</p>
                <button
                  className="hover:border-da-green hover:text-da-green flex rounded-md border border-transparent px-6 py-2 transition duration-300"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ml-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default WorkList;
