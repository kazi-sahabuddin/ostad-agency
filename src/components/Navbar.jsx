import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  return (
    <header>
      <nav className="container mb-4 flex w-full items-center py-4 lg:w-10/12">
        <div className="py-1">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="Desgin acgency" />
          </Link>
        </div>
        <ul className="hidden flex-1 items-center justify-end gap-6 text-lg font-medium text-black md:flex lg:gap-12">
          <li>
            <Link
              href={"/"}
              className="hover:border-b-2 hover:border-da-green pb-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/team"}
              className="hover:border-b-2 hover:border-da-green pb-2"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"/services"}
              className="hover:border-b-2 hover:border-da-green pb-2"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="hover:border-b-2 hover:border-da-green pb-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"/testimonials"}
              className="hover:border-b-2 hover:border-da-green pb-2"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <button
              className="border-da-green border-soli rounded-md border px-6 py-2 transition duration-300 hover:bg-da-green"
              type="button"
            >
              Login
            </button>
          </li>
          <li>
            <button
              className="rounded-md border px-6 py-2 transition duration-300 bg-da-green hover:border-da-green hover:text-da-green text-white hover:border hover:bg-transparent"
              type="button"
            >
              Register
            </button>
          </li>
        </ul>
        <div className="flex h-6 w-6 flex-1 cursor-pointer justify-end md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            fill="#00000"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
