import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, SetIsLoggedIn] = useState(false);
  const [error, setErrorMessage] = useState("");
  const handleLogin = async (e) => {
    console.log("start to handlelogin");
    e.preventDefault();
    try {
      console.log("start to axios");
      const response = await axios.post("/api/loginaccount", {
        username: email,
        password: password,
      });
      console.log(response.data);
      console.log("sign in success");
      SetIsLoggedIn(true);
    } catch (err) {
      console.error("Login user error", err);
      setErrorMessage(`Login error. Please try again`);
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        <button type="submit">Login</button>
      </form>
      {login ? <p>Hi {email}, you logged in</p> : <p> {error}</p>}
    </div>
  );
};

export default Login;
