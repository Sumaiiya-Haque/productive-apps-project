import React from "react";
import heroPng from '../assets/images/hero.png'
import googlePlay from '../assets/images/googleplay.png'
import appStore from '../assets/images/Appstore.png'
import Trusted from "../Components/Trusted";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-center ">
        <h1 className="text-5xl font-bold pt-10 pb-5">
          We Build <br /> <span className="text-purple-600 ">Productive</span> Apps
        </h1>
        <p className=" max-w-[700px] mx-auto text-sm text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
          
        </p>
      </div>
      {/* button */}
      <div className="text-center my-5">
        <a href="https://play.google.com/store/apps?hl=en" className="btn btn-outline mr-6 !px-6  !bg-white"
         target="_blank"
  rel="noopener noreferrer"><img className="max-w-6" src={googlePlay} alt="" />  Google Play</a>
        <a href="https://www.apple.com/app-store/"
         target="_blank"
  rel="noopener noreferrer" className="btn btn-outline !px-8 !bg-white"> <img className="max-w-6" src={appStore} alt="" /> App Store</a>
      </div>
      <div className="max-w-[600px] mx-auto">
        <img src={heroPng} alt="" />
      </div>
       <div>
         <Trusted></Trusted>
       </div>
    </div>

      


  );
  
};

export default Home;
