import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-full my-50'>
            <PacmanLoader />
        </div>
    );
};

export default LoadingSpinner;