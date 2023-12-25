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
import ManageRegisterCamps from "../Page/Dashboard/OrganizerDashboard/manageRegisterCamps";
import PrivateRoute from "./PrivateRoute";
import OrganizerProfileManager from "../Page/Dashboard/OrganizerDashboard/OrganizerProfileManager";
import ContactUs from "../Page/Contact US/ContactUs";
import RegisterCamps from "../Page/Dashboard/ParticipantDashboard/RegisterCamps";
import PaymentHistory from "../Page/Dashboard/ParticipantDashboard/PaymentHistory";
import FeedBackAndRating from "../Page/Dashboard/ParticipantDashboard/FeedBackAndRating";
import HealthProfessional from "../Page/Dashboard/HealthProfessional/HealthProfessional";

import AddUpComingCamp from "../Page/Dashboard/OrganizerDashboard/AddUpCommingCamp";

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
        element: <PrivateRoute><AvailableCamp /></PrivateRoute>,
      },
      {
        path: "camp-details/:id",
        element: <CampDetails />,
      },
      {
        path: "contactUs",
        element: <ContactUs/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      //organizer route
      {
        path: "add-a-camp",
        element: <AddCamp />,
      },
      {
        path: "add-Upcoming-camp",
        element: <AddUpComingCamp />,
      },
      {
        path: "manage-camps",
        element: <ManageCamps />,
      },
      {
        path: "manage-registered-camps",
      element:<ManageRegisterCamps/>
      },
      {
        path: "organizer-profile",
        element: <OrganizerProfileManager/>
      },


      //Participant
      {
        path:"register-camps",
        element: <RegisterCamps/>
      },
      {
        path:"payment-history",
        element:<PaymentHistory/>
      },
      {
        path: "feedback-and-ratings",
        element: <FeedBackAndRating/>
      },
      {
        path: "participant-profile",
        element: <participantPrp/>
      },

      //Healh professional

      {
        path:"professional-profile",
        element: <HealthProfessional/>
      }
   



      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
