import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

import NavLinks from "./NavLinks";
import { logan } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-blue-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink to="/" className="hidden lg:flex text-3xl font-bold">
            Muscle Gains
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-200 rounded-box "
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-15 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={logan} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
