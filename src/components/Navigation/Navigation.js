import React from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../../config";

export const Navigation = () => (
  <nav className="navigation navigation--ml-auto">
    <ul className="navigation__list">
      {navigation.map(({ title, path, id }) => (
        <li key={id} className="navigation__list-item">
          <NavLink exact className="navigation__list-item-link" to={path}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
