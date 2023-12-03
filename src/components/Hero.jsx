/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw Error("Hero data load to failed!");
  }
  return res.json();
}

import Navbar from "./Navbar";
import Brands from "./Brands";
import Image from "next/image";

const Hero = async () => {
  const hero = await getData();
  return (
    <section className="bg-da-green-light pb-10">
      <Navbar />
      <div className="container flex w-full items-center justify-between py-14 lg:w-10/12">
        <div className="w-full lg:mr-14 lg:w-1/2">
          <h1 className="font-poppins mb-8 text-6xl font-bold text-black">
            {hero.title}
          </h1>
          <p className="mb-14 text-xl text-black">{hero.description}</p>
          <button
            type="button"
            className="rounded-md border px-6 py-2 transition duration-300 border-da-green bg-da-green hover:border-da-green hover:text-da-green text-xl text-white hover:border hover:bg-transparent"
          >
            Get started
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mb-8 flex flex-wrap">
            <img
              className="object-cover rounded-xl w-full h-72 md:w-1/2 lg:w-2/3 lg:pr-4"
              src={hero.image1}
              alt="image"
            />

            <img
              className="object-cover rounded-xl w-full h-72 md:w-1/2 lg:w-1/3 lg:pl-4"
              src={hero.image2}
              alt="image"
            />
          </div>

          <div className="mt-8 flex flex-wrap">
            <img
              className="w-full h-48 object-cover rounded-xl md:w-1/2 lg:w-1/3 lg:pr-4"
              src={hero.image3}
              alt="image"
            />
            <img
              className="w-full h-48 object-cover rounded-xl md:w-1/2 lg:w-2/3 lg:pl-4"
              src={hero.image4}
              alt="image"
            />
          </div>
        </div>
      </div>
      <Brands />
    </section>
  );
};

export default Hero;
