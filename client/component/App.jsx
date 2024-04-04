import React, { useState, Component } from "react";
import Navbar from "./Navbar.jsx";
import ServiceList from "./ServiceList.jsx";

function App() {
  const [user, setUser] = useState("");
  const handleLogin = (user) => {
    setUser(user);
  };
  return (
    <div>
      <Navbar onLogin={handleLogin} />
      <ServiceList user={user} />
    </div>
  );
}
export default App;
