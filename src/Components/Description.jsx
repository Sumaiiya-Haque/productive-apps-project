import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';

const Description = () => {
const {id} = useParams()
    const { apps,loading} = useApps();
  const app = apps.find((a) => String(a.id) === id);

        if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  console.log(app)
    return (
        <div className='max-w-[1100px] mx-auto'>
           <h1 className='text-2xl font-bold py-2'>Description</h1>
           <p className='text-gray-600 text-sm
           pb-4'>{app.description}</p> 
           <p className='text-gray-600 text-sm
           pb-4'>{app.description}</p>
           <p className='text-gray-600 text-sm
           pb-4'>{app.description}</p>
        </div>
    );
};

export default Description;
