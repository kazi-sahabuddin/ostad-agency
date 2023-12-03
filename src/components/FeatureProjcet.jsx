/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw Error("Featured project data load to failed!");
  }
  return res.json();
}
function getM(date) {
  const d = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[d.getMonth()];
}
function getD(date) {
  const d = new Date(date);
  return d.getDate();
}
function getY(date) {
  const d = new Date(date);
  return d.getFullYear();
}

const FeatureProjcet = async () => {
  const data = await getData();
  return (
    <section className="bg-da-green-light my-10 py-10">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/2">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            Feature Projects
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            We provide the Perfect Solution to your business growth
          </h1>
        </div>
        <div className="flex items-center">
          <div className="w-full lg:w-1/2">
            <div className="">
              <img
                className="mb-4 h-auto w-11/12 rounded-3xl"
                src={data[0].image}
                alt="Projects"
              />
              <p className="font-poppins text-da-grey mb-4 text-sm font-normal">
                App Design -{" "}
                {`${getM(data[0].created_at)} ${getD(
                  data[0].created_at
                )}, ${getY(data[0].created_at)}`}
              </p>
              <h3 className="font-poppins mb-4 text-2xl font-bold text-black">
                {data[0].title}
              </h3>
            </div>
          </div>
          <div className="flex w-full flex-wrap lg:w-1/2">
            <div className="w-full p-4 lg:w-1/2">
              <img
                className="mb-4 h-52 w-full rounded-3xl"
                src={data[1].image}
                alt="Projects"
              />
              <p className="font-poppins text-da-grey mb-4 text-sm font-normal">
                App Design -{" "}
                {`${getM(data[1].created_at)} ${getD(
                  data[1].created_at
                )}, ${getY(data[1].created_at)}`}
              </p>
              <h3 className="font-poppins mb-4 text-lg font-bold text-black">
                {data[1].title}
              </h3>
            </div>

            <div className="w-full p-4 lg:w-1/2">
              <img
                className="mb-4 h-52 w-full rounded-3xl"
                src={data[2].image}
                alt="Projects"
              />
              <p className="font-poppins text-da-grey mb-4 text-sm font-normal">
                App Design -{" "}
                {`${getM(data[2].created_at)} ${getD(
                  data[2].created_at
                )}, ${getY(data[2].created_at)}`}
              </p>
              <h3 className="font-poppins mb-4 text-lg font-bold text-black">
                {data[2].title}
              </h3>
            </div>

            <div className="w-full p-4 lg:w-1/2">
              <img
                className="mb-4 h-52 w-full rounded-3xl"
                src={data[3].image}
                alt="Projects"
              />
              <p className="font-poppins text-da-grey mb-4 text-sm font-normal">
                App Design -{" "}
                {`${getM(data[3].created_at)} ${getD(
                  data[3].created_at
                )}, ${getY(data[3].created_at)}`}
              </p>
              <h3 className="font-poppins mb-4 text-lg font-bold text-black">
                {data[3].title}
              </h3>
            </div>

            <div className="w-full p-4 lg:w-1/2">
              <img
                className="mb-4 h-52 w-full rounded-3xl"
                src={data[4].image}
                alt="Projects"
              />
              <p className="font-poppins text-da-grey mb-4 text-sm font-normal">
                App Design -{" "}
                {`${getM(data[4].created_at)} ${getD(
                  data[4].created_at
                )}, ${getY(data[4].created_at)}`}
              </p>
              <h3 className="font-poppins mb-4 text-lg font-bold text-black">
                {data[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjcet;
