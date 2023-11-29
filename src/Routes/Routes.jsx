import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";

import AvailableCamp from "../Page/AvailableCamp/AvailableCamp";
import CampDetails from "../Page/CampDetails/CampDetails";
import AddCamp from "../Page/Dashboard/OrganizerDashboard/AddCamp";
import ManageCamps from "../Page/Dashboard/OrganizerDashboard/ManageCamps";
import ErrorPage from "../Page/Error/ErrorPage";
import UpdateCamp from "../Page/Dashboard/OrganizerDashboard/UpdateCamp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "available-camp",
        element: <AvailableCamp />,
      },
      {
        path: "camp-details/:id",
        element: <CampDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {},

      //organizer route
      {
        path: "add-a-camp",
        element: <AddCamp />,
      },
      {
        path: "manage-camps",
        element: <ManageCamps />,
      },
      // {
      //   path: "update-camp/:id",
      //   element: <UpdateCamp/>

      // }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
