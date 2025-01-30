import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, // Подключаем userReducer
  },
});

//export default store; // Изменяем экспорт

/*
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Путь правильный ??
import { createSlice } from "@reduxjs/toolkit";

// Загружаем пользователя из localStorage
const loadUserFromStorage = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

const userSlice = createSlice({
  name: "user",
  initialState: { value: loadUserFromStorage() }, // Загружаем состояние
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Сохраняем в localStorage
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("user"); // Удаляем из localStorage
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
*/