import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  // initialState: { isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
    registered:(state,action) =>{
      state.isAuthenticated = true;
    }
  },
});

export const { login, logout,registered } = AuthSlice.actions;
export default AuthSlice.reducer;
