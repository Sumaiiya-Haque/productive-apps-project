import React from "react";
import { useLoaderData } from "react-router";
import downloadImg from '../assets/images/icon-downloads.png'
import ratingImg from '../assets/images/icon-ratings.png'

const TrendingApps = () => {
    const trendingApps = useLoaderData();
    const {title,image,id,ratingAvg,downloads} = trendingApps;
    console.log(trendingApps);
  return (
    <div >
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="text-sm py-3 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/*parent card */}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1100px] sm:mx-auto mx-5">
        {/* card
         */}
{
    trendingApps.map(trendingApp =>
                <div className="card bg-white  shadow-sm hover:scale-105 transition ease-in-out max-h-[px]">
  <figure className="max-w-full   px-10 py-3 bg-pink-100 min-h-52">
    <img
      src={trendingApp.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="font-bold text-[20px] !text-center">{trendingApp.title}</h2>
   
    <div className="flex justify-between">
   <button className="border-gray-300 border px-2 sm:px-4 py-2 flex items-center gap-2 rounded-3xl font-bold">
  <img className="w-5" src={downloadImg} alt="" />
  {trendingApp.downloads}
</button>
    <button className="border-gray-300 border px-2 sm:px-4 py-2  flex gap-2 items-center rounded-3xl font-bold"><img className="w-5" src={ratingImg} alt="" />{trendingApp.ratingAvg}</button>
    </div>
  </div>
</div>
    )
}


      </div>
    </div>
  );
};

export default TrendingApps;
