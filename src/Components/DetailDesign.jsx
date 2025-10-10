import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";
import downloadImg from "../assets/images/icon-downloads.png";
import ratingImg from "../assets/images/icon-ratings.png";
import totalReviews from "../assets/images/icon-review.png";
import { toast } from "react-toastify";

const DetailDesign = () => {
  const [installed, setInstalled] = useState(false);

  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  
  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const alreadyInstalled = existingList.some((a) => String(a.id) === id);
    if (alreadyInstalled) {
      setInstalled(true);
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const {
    image,
    ratingAvg,
    reviews,
    size,
    title,
    downloads,
  } = app;

  const handleInstalled = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const isDuplicate = existingList.some((a) => a.id === app.id);

    if (!isDuplicate) {
      const updatedList = [...existingList, app];
      localStorage.setItem("installed", JSON.stringify(updatedList));
      setInstalled(true);
      toast("✅ App Installed Successfully!");
    } else {
      toast("⚠️ App already installed!");
    }
  };

  return (
    <div className="flex my-5 gap-4 max-w-[1100px] sm:mx-auto mx-5">
      <div>
        <img
          className="p-10 border-amber-100 border-2 rounded"
          src={image}
          alt=""
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">
          Developed By <span className="text-purple-600">Productive.io</span>
        </p>

        <div className="py-3 flex gap-8">
          <div>
            <img className="w-5" src={downloadImg} alt="" />
            <p className="text-sm text-gray-500">Downloads</p>
            <p className="font-bold text-2xl">{downloads}</p>
          </div>
          <div>
            <img className="w-5" src={ratingImg} alt="" />
            <p className="text-sm text-gray-500">Average Ratings</p>
            <p className="font-bold text-2xl">{ratingAvg}</p>
          </div>
          <div>
            <img className="w-5" src={totalReviews} alt="" />
            <p className="text-sm text-gray-500">Total Reviews</p>
            <p className="font-bold text-2xl">{reviews}K</p>
          </div>
        </div>

        {/* ✅ Install Button */}
        <button
          onClick={handleInstalled}
          disabled={installed}
          className={`border px-3 rounded py-1 font-medium transition 
            ${
              installed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }
          `}
        >
          {installed ? "Installed" : `Install Now (${size} MB)`}
        </button>
      </div>
    </div>
  );
};

export default DetailDesign;



// import React, { useState } from "react";
// import useApps from "../Hooks/useApps";
// import { useParams } from "react-router";

// import downloadImg from "../assets/images/icon-downloads.png";
// import ratingImg from "../assets/images/icon-ratings.png";
// import totalReviews from '../assets/images/icon-review.png'
// import { toast } from "react-toastify";

// const DetailDesign = () => {



 
//   const [installed, setInstalled] = useState(false)

//   // const handleInstall = () => {
//   //   setInstalled(true);
//   //   toast('✅ App Installed Successfully!');
   
//   // };

    
//   const { id } = useParams();
//   const { apps, loading } = useApps();
//   const app = apps.find((a) => String(a.id) === id);

//     if (loading) {
//     return <div className="text-center py-10 text-xl">Loading...</div>;
//   }

//   const {
//     image,
//     ratingAvg,
//     ratings,
//     reviews,
//     size,
//     title,
//     downloads,
//     companyName,
//   } = app;

//    const handleInstalled = () =>{
//     const existingList = JSON.parse(localStorage.getItem('installed'))
//     let updatedList = []
//     if(existingList){
//       // const isDuplicate = existingList.some(a=>a.id === app.id)
//       // if(isDuplicate) return alert('kk')
//       updatedList = [...existingList,app]
//     }else{
//       updatedList.push(app)
//     }
//     localStorage.setItem('installed',JSON.stringify(updatedList))
//      setInstalled(true);
//     toast('✅ App Installed Successfully!');
//   }





 
//   return (
//     <div className="flex my-5 gap-4 max-w-[1100px] sm:mx-auto mx-5">
//       <div>
//         <img
//           className=" p-10 border-amber-100 border-2 rounded"
//           src={image}
//           alt=""
//         />
//       </div>

//       <div className="">
//         <h1 className="text-2xl font-bold">{title}</h1>
//         <p className="text-sm text-gray-600">
//           Developed By <span className="text-purple-600">Productive.io</span>
//         </p>

//         <div className="py-3 flex gap-8">
//             {/* 1 */}
//           <div>
//             <img className="w-5" src={downloadImg}alt="" />
//             <p className="text-sm text-gray-500">Downloads</p>
//             <p className="font-bold text-2xl">{downloads}</p>
//           </div>
//           {/* 2 */}
//           <div>
//             <img className="w-5" src={ratingImg}alt="" />
//             <p className="text-sm text-gray-500">Average Ratings</p>
//             <p className="font-bold text-2xl">{ratingAvg}</p>
//           </div>
//           {/* 3 */}
//           <div>
//             <img className="w-5" src={totalReviews}alt="" />
//             <p className="text-sm text-gray-500">Total Reviews</p>
//             <p className="font-bold text-2xl">{reviews}K</p>
//           </div>
//         </div>
//        <button
       
//       onClick={() => {
//   // handleInstall();
//   handleInstalled();
// }}
//       disabled={installed}
//       className={`border px-3 rounded py-1 font-medium transition 
//         ${installed ? 'bg-gray-400 px-15 text-white' : 'bg-green-600 text-white hover:bg-green-600 cursor-pointer'}
//       `}
//     >
//       {installed ? 'Installed' : `Install Now (${size} MB)`}
//     </button>

   
//       </div>
//     </div>
//   );
// };


// export default DetailDesign;
