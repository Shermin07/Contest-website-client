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
        
     },
     {
        path:'/login',
        element: <Login></Login>
     },
     {
        path:'/register',
        element:<Register></Register>
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
                element:<CreatedContest></CreatedContest>
            },
            {
                path:'/dashboard/contestSubmittedPage',
                element:<ContestSubmitted></ContestSubmitted>
            }
        ]

    }
  ]);