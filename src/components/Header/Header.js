import React from "react";
// Routing
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <header className="text-gray-600 body-font  bg-green-500   container mx-auto">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl">Consumers Reports</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              className="mr-10 p-1 cursor-pointer text-black text-lg hover:text-gray-900 "
            >
              Home
            </NavLink>
            <NavLink
              to="/reviews"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              className="mr-10  p-1 cursor-pointer  text-black text-lg  hover:text-gray-900"
            >
              Reviews
            </NavLink>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              className="mr-10   p-1 cursor-pointer  text-black text-lg  hover:text-gray-900"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/blogs"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              className="mr-10  p-1 cursor-pointer  text-black text-lg   hover:text-gray-900"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "2px solid black" : "",
                };
              }}
              className="mr-10   p-1 cursor-pointer  text-black text-lg  hover:text-gray-900"
            >
              About US
            </NavLink>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
