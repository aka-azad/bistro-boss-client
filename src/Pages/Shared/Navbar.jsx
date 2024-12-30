import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const navControls = (
    <>
      <li>
        <Link
          className={`btn btn-ghost py-0 hover:bg-transparent ${
            location.pathname == "/" ? "btnLinkActive" : ""
          }`}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`btn btn-ghost py-0 hover:bg-transparent ${
            location.pathname == "/contact-us" ? "btnLinkActive" : ""
          }`}
          to={"/contact-us"}
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          className={`btn btn-ghost py-0 hover:bg-transparent ${
            location.pathname == "/dashboard" ? "btnLinkActive" : ""
          }`}
          to={"/dashboard"}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className={`btn btn-ghost py-0 hover:bg-transparent ${
            location.pathname == "/our-menu" ? "btnLinkActive" : ""
          }`}
          to={"/our-menu"}
        >
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          className={`btn btn-ghost py-0 hover:bg-transparent ${
            location.pathname == "/our-shop" ? "btnLinkActive" : ""
          }`}
          to={"/our-shop"}
        >
          Our Shop
        </Link>
      </li>
    </>
  );
  return (
    <div className="z-[5000]">
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navControls}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-end">
          <div className="flex-shrink-0  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navControls}</ul>
          </div>
          <Link to={"/login"} className="btn">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
