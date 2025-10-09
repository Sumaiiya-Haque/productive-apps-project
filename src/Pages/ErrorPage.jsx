import React from 'react';
import errorPage from '../assets/images/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1100px] mx-auto'>
                <img className='mx-auto max-w-[380px] my-25' src={errorPage}alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;