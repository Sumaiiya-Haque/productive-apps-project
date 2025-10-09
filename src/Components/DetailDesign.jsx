import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";

import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import totalReviews from '../assets/images/icon-review.png'
import { toast } from "react-toastify";

const DetailDesign = () => {

 
  const [installed, setInstalled] = useState(false)

  const handleInstall = () => {
    setInstalled(true);
    toast('✅ App Installed Successfully!');
  };

    
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const {
    image,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
    downloads,
    companyName,
  } = app;


 
  return (
    <div className="flex my-5 gap-4 max-w-[1100px] mx-auto">
      <div>
        <img
          className=" p-10 border-amber-100 border-2 rounded"
          src={image}
          alt=""
        />
      </div>

      <div className="">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">
          Developed By <span className="text-purple-600">Productive.io</span>
        </p>

        <div className="py-3 flex gap-8">
            {/* 1 */}
          <div>
            <img className="w-5" src={downloadImg}alt="" />
            <p className="text-sm text-gray-500">Downloads</p>
            <p className="font-bold text-2xl">{downloads}</p>
          </div>
          {/* 2 */}
          <div>
            <img className="w-5" src={ratingImg}alt="" />
            <p className="text-sm text-gray-500">Average Ratings</p>
            <p className="font-bold text-2xl">{ratingAvg}</p>
          </div>
          {/* 3 */}
          <div>
            <img className="w-5" src={totalReviews}alt="" />
            <p className="text-sm text-gray-500">Total Reviews</p>
            <p className="font-bold text-2xl">{reviews}K</p>
          </div>
        </div>
       <button
      onClick={handleInstall}
      disabled={installed}
      className={`border px-3 rounded py-1 font-medium transition 
        ${installed ? 'bg-gray-400 px-15 text-white' : 'bg-green-600 text-white hover:bg-green-600 cursor-pointer'}
      `}
    >
      {installed ? 'Installed' : `Install Now (${size} MB)`}
    </button>

    {/* <button className="border px-3 bg-green-600 text-white font-medium rounded py-1">Install Now ({size} MB)</button> */}
      </div>
    </div>
  );
};


export default DetailDesign;
