import React, { useState } from "react";
import withLayout from "../components/withLayout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered with Email: ${email}`);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button-primary">Register</button>
      </form>
    </div>
  );
};

export default withLayout(Register);
