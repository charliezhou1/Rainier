import React, { useState } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar({ onLogin }) {
  const handleLogin = (user) => {
    onLogin(user);
  };
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
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
          </div>
          <div className="navbar-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="routes">
          <Routes>
            <Route
              exact="true"
              path="/"
              element={<Login onLogin={onLogin} />}
            ></Route>
            <Route exact="true" path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
