import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameList: ["Poker", "Black Jack", "Mine Sweeper", "Hang Man"],
  active: "Poker",
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    changeGame: (state, action) => {
      state.active !== action.payload && (state.active = action.payload);
    },
  },
});

export const gameListSelector = (state) => state.Header.gameList;
export const activeSelector = (state) => state.Header.active;

export const { changeGame } = gamesSlice.actions;
export default gamesSlice.reducer;
