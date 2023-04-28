import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
export const store = configureStore({
  reducer: {
    counterSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});