import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Введите имя пользователя");
      return;
    }

    const user = { username, token: "fakeToken" }; // Симуляция входа после регистрации
    console.log("Registering user:", user); // Проверка
    dispatch(login(user)); // Записываем (диспачим)) пользователя в Redux
    navigate("/home"); // Перенаправляем на главную
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


/*import React, { useState } from "react";
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
*/