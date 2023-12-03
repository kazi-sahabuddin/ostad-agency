/* eslint-disable @next/next/no-img-element */
async function getDate() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Testimonial List calling Fail");
  }
  return res.json();
}
const Testimonials = async () => {
  const data = await getDate();

  return (
    <section className="my-14">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/3">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            testimonial list
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            Better Agency/SEO Solution At Your Fingertips
          </h1>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {data.map((item, i) => {
            return (
              <div key={i} className="rounded-xl p-8 shadow-xl">
                <div className="mx-auto h-28 w-28 rounded-lg">
                  <img
                    className="h-28 w-28 rounded-xl"
                    src={item.image}
                    alt="bal chal"
                  />
                </div>
                <p className="font-poppins my-10 text-center text-lg font-normal text-[#9D9D9D]">
                  {item.msg}
                </p>
                <h2 className="font-poppins text-center text-2xl font-semibold uppercase">
                  {item.name}
                </h2>
                <h4 className="font-poppins mt-3 text-center text-lg font-normal">
                  {item.designation}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
