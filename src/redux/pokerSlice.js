import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player: ["2C", "AD"],
  opponent: ["3H", "5H"],
  table: ["8H", "9C", "AC"],
  round: 0,
  bet: 10,
  stage: 4,
};

const pokerSlice = createSlice({
  name: "poker",
  initialState,
  reducers: {
    fold: (state) => {},
    raise: (state, action) => {},
    check: (state) => {},
    shuffle: (state) => {},
    newRound: (state) => {
      state.round++;
      state.stage = 1;
      state.bet = 10;
    },
  },
});

export const { fold, raise, check, shuffle, newRound } = pokerSlice.actions;
export default pokerSlice.reducer;
