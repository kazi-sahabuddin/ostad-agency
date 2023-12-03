"use client";
const Subcriber = () => {
  return (
    <section className="my-10 py-10">
      <div className="container w-full lg:w-10/12">
        <div className="w-full text-center lg:mx-auto lg:w-1/2">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            Subscribe
          </h3>
          <h1 className="font-poppins mb-5 text-3xl font-semibold leading-10">
            Subscribe to get the lastest news aboudt us
          </h1>
          <p className=" text-da-grey text-lg">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <div className="w-full lg:mx-auto lg:w-1/2">
          <div className="my-8 flex justify-between rounded-lg border border-black p-1">
            <input
              className="w-4/6 p-2 focus:outline-none"
              type="text"
              placeholder="Enter Your Eamil"
            />
            <button
              className="w 2/6 rounded-md border px-6 py-2 transition duration-300 border-da-orange bg-da-orange text-white hover:text-da-orange hover:bg-white"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subcriber;
