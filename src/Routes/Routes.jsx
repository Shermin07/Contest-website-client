import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllContest from "../Pages/AllContest/AllContest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
  ]);