import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/about",
    text: "About",
  },
  {
    id: 3,
    to: "/pricing",
    text: "Pricing",
  },
  {
    id: 4,
    to: "/newsletter",
    text: "Newsletter",
  },
];

const NavLinks = () => {
  return (
    <>
      {navigation.map((item) => {
        const { id, to, text } = item;
        return (
          <li key={id}>
            <NavLink to={to} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
