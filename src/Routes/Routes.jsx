import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";




export const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'login',
                element: <Login/>
            },
            {
                path: 'signUp',
                element: <SignUp/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children: [

            {


            },


            //organizer route
            {
                path: 'add-a-camp'
            }
        ]
    }
]);
