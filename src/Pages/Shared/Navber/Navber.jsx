import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext, auth } from "../../../Provider/AuthProvider";


const Navber = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const handleSignOut = () =>{
    logOut(auth)
    .then(result =>{
        console.log(result)
       
       
    } )
    .catch(error =>{
        console.log(error)
    })
  }


    const navLinks = <>

   <li><NavLink to='/'> Home  </NavLink></li>
   <li><NavLink to='/allContest'> All Contest  </NavLink></li>
   
  
    </>
    return (
        <div>
        <div className="navbar bg-opacity-40 bg-base-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <img className="h-14 rounded" src="https://img.freepik.com/free-vector/contest-lettering-background_23-2147874438.jpg?size=626&ext=jpg&ga=GA1.1.732846257.1688661449&semt=ais"></img>
    <a className="btn btn-ghost text-orange-500 text-xl font-serif">Talent Contest</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    {navLinks}

    </ul>
  </div>
  <div className="navbar-end">

  <div className="dropdown dropdown-end">
        <label tabIndex={0} >
        {user && user.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"
                  alt="Default User"
                />
              )}

          
          </label>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 bg-base-100 rounded-box w-52 mt-4">
        <Link>{user ? user.displayName : "Guest"}</Link>
              <Link>Dashboard</Link>
              {user ? (
                <li><Link onClick={handleSignOut}>LogOut</Link></li>
              ) : (
                <li><NavLink to='/login'>Login</NavLink></li>
              )}
        
         
         
        </ul>
      </div>
   
   
  </div>
</div>    
        </div>
    );
};

export default Navber;