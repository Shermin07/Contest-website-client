import { NavLink } from "react-router-dom";


const Navber = () => {


    const navLinks = <>

   <li><NavLink to='/'> Home  </NavLink></li>
    
    
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
   
    <ul className="menu menu-horizontal px-1">
    
      <li tabIndex={0}>
        <details>
          <summary> <a className="btn">Button</a></summary>
          <ul className="p-2">
            <li><a>User</a></li>
            <li><a>Dashboard</a></li>
            <li><a>Logout</a></li>
          </ul>
        </details>
      </li>
    
    </ul>
  </div>
</div>    
        </div>
    );
};

export default Navber;