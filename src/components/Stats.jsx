/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw Error();
  }
  return res.json();
}

const Stats = async () => {
  const stat = await getData();
  return (
    <div className="container my-10 flex w-full items-start justify-between lg:w-10/12">
      <div className="mx-4 my-8 w-full rounded-2xl text-center shadow-xl lg:w-1/4">
        <div className="bg-da-green-light mx-auto mb-6 h-16 w-16 rounded-xl p-4">
          <img src="/images/followers.png" alt="Group" />
        </div>
        <h2 className="font-poppins mb-4 text-3xl font-semibold">
          {stat.followers}
        </h2>
        <p className="font-poppins mb-8 text-lg font-medium">followers</p>
      </div>
      <div className="mx-4 my-8 w-full rounded-2xl text-center shadow-xl lg:w-1/4">
        <div className="bg-da-green-light mx-auto mb-6 h-16 w-16 rounded-xl p-4">
          <img src="/images/Like.png" alt="Group" />
        </div>
        <h2 className="font-poppins mb-4 text-3xl font-semibold">
          {stat.solved}
        </h2>
        <p className="font-poppins mb-8 text-lg font-medium">Solved Problems</p>
      </div>
      <div className="mx-4 my-8 w-full rounded-2xl text-center shadow-xl lg:w-1/4">
        <div className="bg-da-green-light mx-auto mb-6 h-16 w-16 rounded-xl p-4">
          <img src="/images/Happy  1.png" alt="Group" />
        </div>
        <h2 className="font-poppins mb-4 text-3xl font-semibold">
          {stat.customers}
        </h2>
        <p className="font-poppins mb-8 text-lg font-medium">Happy client</p>
      </div>

      <div className="mx-4 my-8 w-full rounded-2xl text-center shadow-xl lg:w-1/4">
        <div className="bg-da-green-light mx-auto mb-6 h-16 w-16 rounded-xl p-4">
          <img src="/images/Vector.png" alt="Group" />
        </div>
        <h2 className="font-poppins mb-4 text-3xl font-semibold">
          {stat.projects}
        </h2>
        <p className="font-poppins mb-8 text-lg font-medium">Projects</p>
      </div>
    </div>
  );
};

export default Stats;
