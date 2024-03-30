import React from "react";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
