import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import cardSlice from "./card-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    addItem: cardSlice.reducer,
  },
});

export default store;
