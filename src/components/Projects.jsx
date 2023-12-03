/* eslint-disable @next/next/no-img-element */

async function getDate() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("Project List calling Fail");
  }
  return res.json();
}

const Projects = async () => {
  const data = await getDate();
  return (
    <section className="my-14">
      <div className="container w-full lg:w-10/12">
        <div className="w-full lg:w-1/3">
          <h3 className="font-poppins text-da-green mb-4 text-xl font-medium uppercase">
            All projects
          </h3>
          <h1 className="font-poppins mb-10 text-3xl font-semibold leading-10">
            Better Agency/SEO Solution At Your Fingertips
          </h1>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full rounded-2xl px-6 py-8 shadow-lg lg:w-auto"
              >
                <a target="_blank" href={item.live}>
                  <img
                    className="w-full rounded-2xl shadow-lg"
                    src={item.image}
                    alt="project"
                  />
                  <h2 className="font-poppins mt-8 text-xl font-semibold uppercase">
                    {item.title}
                  </h2>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
