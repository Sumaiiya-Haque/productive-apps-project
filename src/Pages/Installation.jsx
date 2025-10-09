import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import { toast } from "react-toastify";

const Installation = () => {

    const [sortOrder,setSortOrder] =useState('none') 

  const [installed, setInstalled] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) setInstalled(savedList);
  }, []);

// const sortedItem = () =>{
//     if(sortOrder === 'downloads-asc'){
//         return [...installed].sort((a,b)=>a.downloads - b.downloads)
//     }else if(sortOrder === 'downloads-desc'){
//        return [...installed].sort((a,b)=>b.downloads - a.downloads) 
//     }else{
//        return installed
//     }
// }



const parseDownloads = (value) => {
  if (typeof value === "string") {
    if (value.includes("M+")) return parseFloat(value) * 1000000;
    if (value.includes("K+")) return parseFloat(value) * 1000;
     if (value.includes("B+")) return parseFloat(value) * 1000000000;
  }
  return Number(value);
};

const sortedItem = () => {
  if (sortOrder === "downloads-asc") {
    return [...installed].sort(
      (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
    );
  } else if (sortOrder === "downloads-desc") {
    return [...installed].sort(
      (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
    );
  } else {
    return installed;
  }
};







const handleRemove = id =>{
const existingList = JSON.parse(localStorage.getItem('installed'))
let updatedList = existingList
.filter(p=>p.id !== id)
// for ui instant update
setInstalled(updatedList)

   
    localStorage.setItem('installed',JSON.stringify(updatedList))

    // setInstalled(true);
    toast('✅ App Uninstalled Successfully!')
}




  return (
    <div className="bg-gray-100 pb-5">
      <div className="text-center py-5">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-sm py-3 text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between max-w-[1100px] sm:mx-auto mx-5 my-5">
        <h1 className="text-xl font-bold "> Apps Found ({installed.length})  </h1>

       {/* <button className="btn btn-soft">Sort By Size</button> */}

      <label className="form-control w-full max-w-xs">
         <select className="select select-bordered" value={sortOrder} onChange={e=>setSortOrder(e.target.value)}>
        <option value='none'>Sort By Size</option>
        <option value='downloads-asc'>Low-&gt;High</option>
        <option value='downloads-desc'>High-&gt;Low</option>
       </select>
      </label>
      </div>

      {/* card */}

      <div className="flex flex-col gap-4 max-w-[1100px] sm:mx-auto mx-5 mb-5 ">
        {sortedItem().map((ins) => (
          <div className="flex justify-between items-center shadow-sm bg-white rounded-xl gap-5 px-5 h-25 ">
           <div className="flex gap-3 items-center">
             <div>
              <img className="w-25 p-3" src={ins.image} alt="" />
            </div>
            <div className="">
              <h1 className="font-bold text-xl ">{ins.title}</h1>
              <div className="">
                <div className="flex gap-4">
                  <div className="flex  gap-1 ">
                    <img className="w-4" src={downloadImg} alt="" />
                    <p className="font-bold text-gray-600">{ins.downloads}</p>
                  </div>
                  <div className="flex gap-1">
                    <img className="w-4" src={ratingImg} alt="" />
                    <p className="font-bold text-gray-600">{ins.downloads}</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-600">{ins.size}MB</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div>
  <button onClick={()=>handleRemove(ins.id)}    className="font-medium border px-5 rounded-xl bg-purple-600
   text-white py-1 cursor-pointer ">Uninstall</button>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Installation;

{/* <div>
                <button className="font-medium border px-5 rounded-xl bg-purple-600 text-white py-1">Uninstall</button>
            </div> */}
