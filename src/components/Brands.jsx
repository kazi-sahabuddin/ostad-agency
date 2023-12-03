/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw Error("Hero section data load to failed");
  }
  return res.json();
}

const Brands = async () => {
  const data = await getData();
  return (
    <div className="bg-da-grey-light">
      <div className="container mt-10 flex w-full items-center justify-between py-10 lg:w-10/12">
        {data.map((item, i) => {
          return <img key={i} src={item.image} alt={item.name} />;
        })}
      </div>
    </div>
  );
};

export default Brands;
