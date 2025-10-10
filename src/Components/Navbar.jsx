import { Github } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar  shadow-sm  ">
      <div className="navbar-start ml-0 sm:ml-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <Link to="/">
  <img className="max-w-7" src={logo} alt="Logo" />
</Link>
          <Link to="" className="text-2xl font-bold text-purple-600">
            HERO.IO
          </Link>
        </div>
      </div>
     <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/all-apps"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Apps
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Installation
          </NavLink>
        </li>
      </ul>
    </div>
      <div className="navbar-end mr-0 sm:mr-10">
        <a
          href="https://github.com/Sumaiiya-Haque"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-purple-600 text-white flex items-center gap-2 px-4 py-2 rounded-md hover:bg-purple-700 transition"
        >
          <Github
            className="border bg-white text-purple-600 rounded-full fill-purple-600 pt-1"
            size={25}
          />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
