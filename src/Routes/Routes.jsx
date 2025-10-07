import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
   {
    path:'/apps',
    element:<Apps></Apps>
  }

])

export default router;