import { configureStore } from "@reduxjs/toolkit";

import hangmanSlice from "./slices/hangManSlice";
import pokerSlice from "./slices/pokerSlice";
import gamesSlice from "./slices/headerSlice";
import mineSweeperSlice from "./slices/minesweeperSlice";
export const store = configureStore({
  reducer: {
    Poker: pokerSlice,
    Hangman: hangmanSlice,
    Header: gamesSlice,
    MineSweeper: mineSweeperSlice,
  },
});
