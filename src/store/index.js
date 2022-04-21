import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import cardSlice from "./card-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    addItem: cardSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
