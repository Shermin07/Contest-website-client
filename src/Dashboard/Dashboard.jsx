import { NavLink, Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";


const Dashboard = () => {
 
    return (
      <div>
        <Navber></Navber>
          <div className="flex">
           
           <div className="w-68 min-h-screen bg-orange-800 text-white">
             <h1 className="mt-4 ml-4 font-extrabold text-2xl">Dashboard</h1>
 
             <ul className="menu bg-orange-800">
  <h1 className="font-semibold text-xl ml-4">User </h1>  
 
 <li ><NavLink to='/dashboard/participated'>My Participated Contests</NavLink></li>
 <li><NavLink to='/dashboard/winningContest'>My Winning Contest </NavLink></li>
 <li><NavLink>My Profile</NavLink></li>
 
             </ul>

             <ul className="menu bg-orange-800">
  <h1 className="font-semibold text-xl ml-4">Creator </h1>  
 
 <li ><NavLink to='/dashboard/addContest'>Add Contest</NavLink></li>
 <li><NavLink to='/dashboard/createdContest'> Created Contest </NavLink></li>
 <li><NavLink to='/dashboard/contestSubmittedPage'> Contest Submitted </NavLink></li>  
             </ul>

             <ul className="menu bg-orange-800">
  <h1 className="font-semibold text-xl ml-4">Admin </h1>  
  <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
  <li><NavLink to='/dashboard/manageContests'>Manage Contests</NavLink></li>
</ul>
            
 
            
             </div>  
             <div className="flex">
               
                 <Outlet></Outlet>
             </div>
 
          
         </div>
      
      </div>
    );
};

export default Dashboard;