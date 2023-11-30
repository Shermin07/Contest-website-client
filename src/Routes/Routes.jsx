import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllContest from "../Pages/AllContest/AllContest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import Participated from "../Dashboard/Participated/Participated";
import WinningContestPage from "../Dashboard/WinningContestPage/WinningContestPage";
import AddContest from "../Dashboard/Creator/AddContest";
import CreatedContest from "../Dashboard/Creator/CreatedContest/CreatedContest";
import ContestSubmitted from "../Dashboard/Creator/ContestSubmitted/ContestSubmitted";
import Error from "../Pages/Error/Error";
import ManageUsers from "../Dashboard/Admin/ManageUsers/ManageUsers";
import ManageContests from "../Dashboard/Admin/ManageContests/ManageContests";
import axios from "axios";
import ContestDetails from "../Pages/ContestDetails/ContestDetails";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {

        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/home')
     },
     {
        path:'/allContest',
        element: <AllContest></AllContest>,
        loader:() => fetch('http://localhost:5000/dashboard/addContest')
        
     },
     {
        path:'/login',
        element: <Login></Login>
     },
     {
        path:'/register',
        element:<Register></Register>
     },
     {
        path:'*',
        element:<Error></Error>
     },
     {
        path: '/contest/:contestId',
        element: <ContestDetails></ContestDetails>,
      },
      {
        path:'/paymentPage',
        element:<PaymentPage></PaymentPage>
      }


    ]
    },

    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/participated',
                element: <Participated></Participated>,
                loader: () =>fetch('http://localhost:5000/dashboard/participated')
            },
            {
                path:'/dashboard/winningContest',
                element:<WinningContestPage></WinningContestPage>
            },
            {
                path:'/dashboard/addContest',
                element:<AddContest></AddContest>
            },
            {
                path:'/dashboard/createdContest',
                element:<CreatedContest></CreatedContest>,
                loader: () => fetch('http://localhost:5000/dashboard/addContest')
            },
            {
                path: '/dashboard/contestSubmittedPage/:contestId',
                element:<ContestSubmitted></ContestSubmitted>,
                loader: ({ params }) => axios.get(`http://localhost:5000/dashboard/contestSubmittedPage/${params.contestId}`).then(res => res.data),
            },
            {
                path:'/dashboard/manageUsers',
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'/dashboard/manageContests',
                element:<ManageContests></ManageContests>
            }
        ]

    }
  ]);