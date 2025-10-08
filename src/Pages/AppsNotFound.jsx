import React from "react";
import appError from "../assets/images/App-Error.png";
import { NavLink } from "react-router";

const AppsNotFound = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <img className="max-w-[300px] mx-auto my-10" src={appError} alt="" />

      <h1 className="text-2xl font-bold text-center">OPPS!! APP NOT FOUND</h1>
      <p className="text-center text-gray-600 text-sm my-5">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <div className="max-w-[1100px] mx-auto my-10 flex justify-center">
        <NavLink
          to="/all-apps"
          className=" px-15 text-[15px] font-bold text-white bg-purple-600 rounded py-4  sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  "
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default AppsNotFound;
