import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Введите имя пользователя");
      return;
    }

    const user = { username, token: "fakeToken" };
    console.log("Logging in user:", user); // Проверка
    dispatch(login(user)); // Диспатчим в Redux
    navigate("/home"); // Переход на HomePage
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <nav>
        <Link to="/register">Go to Register</Link>
        <br />
        <Link to="/some-wrong-path">Test 404</Link>
      </nav>
    </div>
  );
};

export default Login;