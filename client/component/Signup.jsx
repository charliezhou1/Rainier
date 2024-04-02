import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Sign up");

    //console.log(`Sign up ${email}`);
  };
  return (
    <div>
      <h2>Sign Up Here</h2>
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
      </form>
    </div>
  );
};

export default Signup;
