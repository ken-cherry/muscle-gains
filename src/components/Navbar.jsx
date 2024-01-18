import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span>Muscle Gains</span>
        <div className="nav-links">
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
    </nav>
  );
};

export default Navbar;
