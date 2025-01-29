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
