import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mt-10 w-full lg:w-10/12">
        <div className="flex items-center justify-between">
          <div className="w-full text-white lg:w-1/3">
            <h1 className="font-poppins mb-5 text-4xl font-bold uppercase text-white">
              Web logo
            </h1>
            <p className=" mb-5 text-xl lg:pr-14">
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className="flex">
              <button className="text-center flex justify-center items-center border-da-green bg-da-green hover:text-da-green mr-4 h-12 w-12 transform rounded-full border text-2xl text-white duration-500 hover:bg-white">
                <FaFacebookF />
              </button>
              <button className="text-center flex justify-center items-center border-da-green bg-da-green hover:text-da-green mr-4 h-12 w-12 transform rounded-full border text-2xl text-white duration-500 hover:bg-white">
                <FaTwitter />
              </button>

              <button className="text-center flex justify-center items-center border-da-green bg-da-green hover:text-da-green mr-4 h-12 w-12 transform rounded-full border text-2xl text-white duration-500 hover:bg-white">
                <FaLinkedinIn />
              </button>

              <button className="text-center flex justify-center items-center border-da-green bg-da-green hover:text-da-green h-12 w-12 transform rounded-full border text-2xl text-white duration-500 hover:bg-white">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="w-full text-white lg:w-1/3">
            <h3 className="font-poppins mb-4 text-3xl font-semibold">
              Quick Link
            </h3>
            <ul className=" text-lg">
              <li>
                <a href="" className="mb-3">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="mb-3">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="" className="mb-3">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="mb-3">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full text-white lg:w-1/3">
            <h3 className="font-poppins mb-10 text-3xl font-semibold">
              Address
            </h3>
            <p className=" text-xl">
              Design Agency Head Office. <br />
              Airport Road <br />
              United Arab Emirate
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className=" text-lg text-white">Copyright Design Agency 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
