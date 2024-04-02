import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import ServiceList from "./ServiceList.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { BrowseRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <ServiceList />
    </div>
  );
}
export default App;
