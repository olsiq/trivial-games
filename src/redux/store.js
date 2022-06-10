import { configureStore } from "@reduxjs/toolkit";
import hangManSlice from "./hangManSlice";

import pokerSlice from "./pokerSlice";

export const store = configureStore({
  reducer: {
    Poker: pokerSlice,
    Hangman: hangManSlice,
  },
});
