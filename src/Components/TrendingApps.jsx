import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import useApps from "../Hooks/useApps";

const TrendingApps = () => {
  const { apps } = useApps();

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
   
    if (apps && apps.length > 0) {
      setLoading(false);
    }
  }, [apps]);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner text-purple-600 loading-lg"></span>
      </div>
    );
  }

  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-sm py-3 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* parent card */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1100px] sm:mx-auto mx-5">
        {featuredApps.map((trendingApp) => (
          <Link to={`/app/${trendingApp.id}`} key={trendingApp.id}>
            <div className="card bg-white shadow-sm hover:scale-105 transition ease-in-out">
              <figure className="max-w-full px-10 py-3 bg-pink-100 min-h-52">
                <img src={trendingApp.image} alt={trendingApp.title} />
              </figure>
              <div className="card-body">
                <h2 className="font-bold text-[20px] text-center">
                  {trendingApp.title}
                </h2>

                <div className="flex justify-between">
                  <button className="border-gray-300 border px-1 sm:px-4 py-1 flex items-center gap-2 rounded-xl font-bold bg-green-50 text-green-500">
                    <img className="w-4" src={downloadImg} alt="" />
                    {trendingApp.downloads}
                  </button>
                  <button className="border-gray-300 border px-1 sm:px-4 py-1 flex gap-2 items-center rounded-xl font-bold bg-red-50 text-red-400">
                    <img className="w-4" src={ratingImg} alt="" />
                    {trendingApp.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center my-10">
        <NavLink
          to="/all-apps"
          className="px-15 text-[15px] font-bold text-white bg-purple-600 rounded py-4 sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl "
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default TrendingApps;




