import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AllApps from "../Pages/AllApps";
import AppsNotFound from "../Pages/AppsNotFound";

import AppDetails from "../Pages/AppDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../Components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./AppData.json"),
      },
      //    {
      //   path:'/apps',
      //   element:<Apps></Apps>
      // },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/all-apps",
        element: <AllApps></AllApps>,
      },
      {
        path: "/apps-not-found",
        element: <AppsNotFound></AppsNotFound>,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
    ],
  },

  <ToastContainer></ToastContainer>,
]);

export default router;
