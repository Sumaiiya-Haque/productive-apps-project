import React from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
      <>
<div className='bg-blue-950 '>
         <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10 flex justify-between max-w-[1100px] mx-auto">
  <nav className="grid grid-flow-col gap-4">

     <div className="flex">
          <img className=" max-w-7" src={logo} alt="" />
          <Link to="" className="text-2xl font-bold text-purple-600">
            HERO.IO
          </Link>
        </div>
   
  </nav>
  <nav>
    <h1 className='text-xl font-bold text-gray-300'>Social Links</h1>
    <div className="grid grid-flow-col gap-4 text-gray-300 ">
     <Facebook></Facebook>
     <Twitter></Twitter>
     <Youtube></Youtube>
    </div>
  </nav>

</footer>
        <aside>
    <p className='text-center text-gray-300 text-sm border-t py-4 max-w-[1100px] mx-auto'>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO Industries Ltd</p>
  </aside>
</div>
      </>


    );
};

export default Footer;