import React from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import DetailDesign from '../Components/DetailDesign';
import Ratings from '../Components/Ratings';
import Description from '../Components/Description';



const AppDetails = () => {
    // const {id} = useParams()
    const {apps,loading,error} = useApps();
    // const app = apps.find(a=>String(a.id) === id);

      if (loading) {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }



// const navigate = useNavigate();

// if (!app) {
//   navigate("/error");
//   return null;
// }

    
    // const {image,ratingAvg,ratings,reviews,size,title,downloads,companyName} = app
    return (
        <div>
            <DetailDesign></DetailDesign>

            <Ratings ></Ratings>
            <Description></Description>
        </div>
    );
};

export default AppDetails;