import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/userSlice";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  /*
  //testing
  console.log("App component is rendering");  // Добавим этот лог

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching login action");  // Лог перед логином
    dispatch(login({ username: "testUser", token: "fakeToken" }));
  }, [dispatch]);
*/
const dispatch = useDispatch();

//useEffect(() => {
//  dispatch(login({ username: "testUser", token: "fakeToken" })); // Симуляция входа
//}, [dispatch]);

useEffect(() => {
  const user = { username: "testUser", token: "fakeToken" }; 
  console.log("Auto-login user:", user); // Проверка
  dispatch(login(user)); // Авто-логин
}, [dispatch]);

  return ( 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>    
  );
};

export default App;