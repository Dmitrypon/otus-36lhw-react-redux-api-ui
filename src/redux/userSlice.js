import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null, // Начальное состояние без пользователя
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("Dispatching login action:", action.payload); // Проверка
      state.value = action.payload; // Сохраняем пользователя
    },
    logout: (state) => {
      console.log("User logged out"); // Проверка
      state.value = null; // Очищаем при выходе
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

/*
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
*/
