import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <h1></h1>
          <div className="w-68 min-h-screen bg-orange-800 text-white">
            <h1 className="mt-4 ml-4 font-extrabold text-2xl">Dashboard</h1>
            <ul className="menu bg-orange-800">
 <h1 className="font-semibold text-xl ml-4">User</h1>  
              
<li ><NavLink to='/dashboard/participated'>My Participated Contests</NavLink></li>
<li><NavLink>My Winning Contest </NavLink></li>
<li><NavLink>My Profile</NavLink></li>
            </ul>
            </div>  
            <div className="flex">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;