import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [bisible, setBisible] = useState(false)

  const logoutHandler = () => {
    logOut()
    .then(result => {
      
  }).catch(error => {})
  
  }

  console.log(user)

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className={({ isActive }) => (isActive ? "bg-gray-300 font-semibold" : "")} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? "bg-gray-300 font-semibold" : "")} to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dubai Chef Club</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-gray-300 font-semibold" : "")} to="/">Home</NavLink>
            </li>
            <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-gray-300 font-semibold" : "")} to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <>
          {user ? 
          <> 
          <h1 className={`font-semibold mr-2 ${bisible ? "" : "hidden"} translate-x-2`}>
            {user.displayName}</h1> 
            <div className="avatar placeholder mx-3">
            <div  onMouseEnter={() => setBisible(true)}
            onMouseLeave={() => setBisible(false)}
             className="bg-neutral-focus cursor-pointer text-neutral-content rounded-full w-8">
              <img src={user ? user.photoURL : ''} alt="" />
            </div>
          </div>
           <h1 className="mr-3 font-semibold btn h-2"><Link onClick={logoutHandler} to="">Log Out</Link></h1> 
           </>
           : <h1 className="mr-3 font-semibold btn btn-secondary"><Link to="/login">Login</Link></h1>}
           </>
          
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
