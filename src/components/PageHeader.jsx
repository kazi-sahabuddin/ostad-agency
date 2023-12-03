import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Navbar from "./Navbar";

const PageHeader = ({ title }) => {
  return (
    <section className="bg-gray-100 pb-10">
      <Navbar />
      <div className="container w-full py-14 lg:w-10/12">
        <div className="">
          <h1 className="font-poppins mb-4 text-4xl font-light capitalize">
            {title}
          </h1>
          <div className="flex items-center">
            <p className="font-poppins mr-2 text-lg font-semibold">Home</p>
            <p className="mr-2">
              <FaChevronRight />
            </p>
            <p className="font-poppins text-da-green text-lg font-semibold capitalize">
              {title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
