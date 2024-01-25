import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink to="/" className="text-3xl font-bold">
            Muscle Gains
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-200 rounded-box"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
