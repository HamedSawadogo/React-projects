import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <NavLink to={"/"}>Accueil</NavLink>
          <NavLink to={"/"}>A propos</NavLink>
          <NavLink to={"/"}>Connection</NavLink>
          <NavLink to={"/"}>Donnection</NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
