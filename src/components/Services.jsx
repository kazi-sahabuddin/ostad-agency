/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw Error("Service fail to load");
  }
  return res.json();
}

const Services = async () => {
  const data = await getData();
  return (
    <section className="my-14">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/3">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            Our all Services
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            We Provide BestWeb design services
          </h1>
        </div>

        <div className="gird-cols-1 grid lg:grid-cols-2 lg:gap-4">
          {data.map((item, i) => {
            return (
              <div key={i} className="p-4">
                <div className="rounded-xl px-4 py-10 shadow-lg">
                  <h1 className="font-poppins mb-4 pl-4 text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="font-poppins pl-4 text-lg font-normal text-[#9D9D9D]">
                    {item.des}
                  </p>
                  <div className="flex">
                    <div className="h-48 w-2/3 p-4">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                        src={item.image1}
                        alt="images"
                      />
                    </div>
                    <div className="h-48 w-1/3 p-4">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                        src={item.image2}
                        alt="images"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-80 w-1/2 p-4">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                        src={item.image3}
                        alt="images"
                      />
                    </div>
                    <div className="h-80 w-1/2 p-4">
                      <img
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                        src={item.image4}
                        alt="images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
