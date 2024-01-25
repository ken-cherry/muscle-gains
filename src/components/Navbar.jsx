import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Muscle Gains</a>
      </div>
      <div className="nav-center flex-1">
        <div className="nav-links ">
          {navigation.map((item) => {
            const { id, to, text } = item;
            return (
              <NavLink to={to} className="nav-link" key={id}>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex-none hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
