import React, { useState } from 'react';

import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import useApps from '../Hooks/useApps';
import { SearchIcon } from 'lucide-react';

import AppsNotFound from './AppsNotFound';
import { Link, NavLink, useNavigate } from 'react-router';

const AllApps = () => {



    
    const {apps}= useApps();
    const [search,setSearch] = useState('');

    const term = search.trim().toLocaleLowerCase()
    const searchedApps= term?apps.filter(app=>app.title.toLocaleLowerCase().includes(term)):apps


      const navigate = useNavigate();

  if (searchedApps.length === 0) {
    navigate("/apps-not-found");
  }
    
     return (
<>
<div className='bg-gray-100 pb-5'>
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-sm py-3 text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/*parent card */}
      <div className='flex justify-between max-w-[1100px] sm:mx-auto mx-5 my-5'>
    <h1 className='text-xl font-bold '>Apps Found ({searchedApps.length}) </h1>
{/* ml-5 sm:ml-21 mb-5 */}
    <label className="input">
  <SearchIcon className='text-gray-400'></SearchIcon> 
  <input 
  value={search}
  onChange={e=>setSearch(e.target.value)} type="search" placeholder="Search Apps" />
</label>

</div>

     
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[1100px] sm:mx-auto mx-5 mb-5">
        {/* card
         */}

         
       {searchedApps.map((trendingApp) => (
  <Link to={`/app/${trendingApp.id}`} key={trendingApp.id}>
    <div className="card bg-white shadow-sm hover:scale-105 transition ease-in-out">
      <figure className=" px-10 py-3 bg-pink-100 min-h-52">
        <img className='' src={trendingApp.image} alt={trendingApp.title} />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-[20px] text-center">
          {trendingApp.title}
        </h2>

        <div className="flex justify-between">
          <button className="border-gray-300 border px-2 sm:px-4 py-1 flex items-center gap-2 rounded-xl font-bold bg-green-50 text-green-500">
            <img className="w-4" src={downloadImg} alt="" />
            {trendingApp.downloads}
          </button>
          <button className="border-gray-300 border px-2 sm:px-4 py-1 flex gap-2 items-center rounded-xl font-bold bg-red-50 text-red-400">
            <img className="w-4" src={ratingImg} alt="" />
            {trendingApp.ratingAvg}
          </button>
        </div>
      </div>
    </div>
  </Link>
))}

      </div>
       </div>

    </>
  );
};

export default AllApps;




