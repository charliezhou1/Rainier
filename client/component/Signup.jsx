import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    console.log("Sign up");
    try {
      const response = await axios.post("/api/createaccount", {
        username: email,
        password: password,
      });
      setMessage(
        `Hi ${email}, welcome! You created account successfully. Please log in now.`
      );
      console.log(response.data);
    } catch (err) {
      console.error("Create user error");
    }

    //console.log(`Sign up ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
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
        <input
          type="password"
          placeholder="Reenter your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>

        <button type="submit">Signup</button>
        {errorMessage && <p>{errorMessage}</p>}
        {<p>{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
