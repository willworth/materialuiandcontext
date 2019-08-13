import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <h4>A simple Material UI and React Context Demo App</h4>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          {" "}
          About
        </NavLink>
        <NavLink activeClassName="active" to="/testing">
          {" "}
          Testing React Projects
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
