import { configureStore } from "@reduxjs/toolkit";

import hangmanSlice from "./hangManSlice";
import pokerSlice from "./pokerSlice";
import gamesSlice from "./headerSlice";
export const store = configureStore({
  reducer: {
    Poker: pokerSlice,
    Hangman: hangmanSlice,
    Header: gamesSlice,
  },
});
