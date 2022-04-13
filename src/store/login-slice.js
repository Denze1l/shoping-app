import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLogged: false },
  reducers: {
    loginFunc(state) {
      state.isLogged = true;
    },
    logoutFunc(state) {
      state.isLogged = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
