import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import withLayout from "../components/withLayout";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  console.log("User state in HomePage:", user); // Отладка

  if (!user) {
    return <Navigate to="/login" />; // Перенаправляем, если пользователь не залогинен
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log("Redux User State:", user); // Для теста

  return (
    <div>
      <h1>Home Page</h1>  
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout} className="button-danger">Logout</button>
    </div>
  );
};

export default HomePage;


  /*

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button
            onClick={handleLogout}
            className="button-danger"
          >
            Logout
          </button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default withLayout(HomePage);

/*
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import withLayout from "../components/withLayout";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((state) => state.user.value); // Получение пользователя из Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Выход из учетной записи
  };

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout} className="button-danger">
            Logout
          </button>
        </div>
      ) : (
        <Navigate to="/login" /> // Если пользователь не авторизован, перенаправляем на /login
      )}
    </div>
  );
};

export default withLayout(HomePage);
*/