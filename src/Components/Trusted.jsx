import React from "react";

const Trusted = () => {
  return (
    <div className="bg-purple-600 py-12">
      <div>
        <h1 className="text-3xl text-white font-bold text-center">
          Trusted By Millions,Built For You
        </h1>
      </div>
      {/* parent div */}
      
      <div className="sm:flex flex-col  sm:flex-row justify-between max-w-[800px]  mx-auto ">
        {/* div1 */}
        <div className="pt-5 text-center space-y-3 ">
        <p className="text-white text-[12px]">Total Downloads</p>
        <h1 className="text-white sm:text-6xl text-5xl font-bold">29.6M</h1>
        <p className="text-white text-[12px]">21% More Than Last Month</p>
      </div>

      {/* div 2 */}
       <div className="pt-5 text-center space-y-3 ">
        <p className="text-white text-[12px]">Total Downloads</p>
        <h1 className="text-white sm:text-6xl text-5xl font-bold">906K</h1>
        <p className="text-white text-[12px]">21% More Than Last Month</p>
      </div>

      {/* div3 */}

       <div className="pt-5 text-center space-y-3 ">
        <p className="text-white text-[12px]">Total Downloads</p>
        <h1 className="text-white sm:text-6xl text-5xl font-bold">132+</h1>
        <p className="text-white text-[12px]">21% More Than Last Month</p>
      </div>
      </div>
    </div>
  );
};

export default Trusted;
