import React from "react";
import { useLoaderData } from "react-router";

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
                <div className="card bg-base-100  shadow-sm">
  <figure className="max-w-full max-h-52  px-10 pb-4  pt-6">
    <img
      src={trendingApp.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{trendingApp.title}</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
