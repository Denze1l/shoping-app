import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { Notification: null },
  reducers: {
    showNotification(action, payload) {
      StaticRange.Notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
