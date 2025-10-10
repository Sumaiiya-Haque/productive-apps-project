
import useApps from '../Hooks/useApps';
import DetailDesign from '../Components/DetailDesign';
import Ratings from '../Components/Ratings';
import Description from '../Components/Description';
import { PacmanLoader } from 'react-spinners';



const AppDetails = () => {
    // const {id} = useParams()
    const {loading} = useApps();
    // const app = apps.find(a=>String(a.id) === id);

      if (loading) {
    return <div className='flex justify-center items-center mt-100px'>
            <PacmanLoader />
        </div>
  }




    return (
        <div>
            <DetailDesign></DetailDesign>

            <Ratings ></Ratings>
            <Description></Description>
        </div>
    );
};

export default AppDetails;