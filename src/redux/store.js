import { configureStore } from "@reduxjs/toolkit";
import poker from "./pokerSlice";

export const store = configureStore({
  reducer: poker,
});
