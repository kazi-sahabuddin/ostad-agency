/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");
  if (!res.ok) {
    throw Error("Team data load to fail");
  }
  return res.json();
}
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Teams = async () => {
  const data = await getData();
  return (
    <section className="my-14">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/3">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            Team Member
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            Check our awesome team members
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          {data.map((item, i) => {
            return (
              <div key={i} className="p-4">
                <div className="rounded-xl shadow-lg">
                  <div className="relative">
                    <img className="w-full" src={item.image} alt="Devon" />
                    <div className="absolute bottom-8 left-1/2 w-36 -translate-x-1/2 transform rounded-full bg-white p-2 text-center flex">
                      <div className=" border-r border-[#E3E3E3] px-3 py-2 text-lg text-[#737588]">
                        <a target="_blank" href={item.facebook}>
                          <FaFacebookF />
                        </a>
                      </div>
                      <div className="border-r border-[#E3E3E3] px-3 py-2 text-lg text-[#737588]">
                        <a target="_blank" href={item.twitter}>
                          <FaTwitter />
                        </a>
                      </div>
                      <div className=" px-3 py-2 text-lg text-[#737588]">
                        <a target="_blank" href={item.instagram}>
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h1 className="font-poppins pb-8 pt-6 text-center text-3xl font-semibold capitalize">
                    {item.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
