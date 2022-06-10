import { createSlice } from "@reduxjs/toolkit";
import { roundCards } from "../helpers";

const initialState = {
  cards: roundCards(7),
  playerBalance: 100,
  opponentBalance: 100,
  round: 0,
  bet: 10,
  stage: 1,
  status: "not started yet",
  currentPlayer: true,
  pot: 0,
};

const pokerSlice = createSlice({
  name: "poker",
  initialState,
  reducers: {
    fold: (state) => {
      state.round === 0 && (state.status = "currently playing");
      state.round++;
      state.stage = 5;
      if (state.currentPlayer) {
        state.opponentBalance += state.bet;
        state.playerBalance -= state.bet;
      } else {
        state.opponentBalance -= state.bet;
        state.playerBalance += state.bet;
      }
    },
    raise: (state, action) => {
      state.round === 0 && (state.status = "currently playing");
      // state.stage++;
    },
    check: (state) => {
      state.round === 0 && (state.status = "currently playing");
      state.stage < 5 && state.stage++;
    },
    shuffle: (state) => {},
    newRound: (state) => {
      state.round++;
      state.stage = 1;
      state.bet = 10;
      state.cards = roundCards(7);
      state.pot = 10;
      state.opponentBalance -= 5;
      state.playerBalance -= 5;
    },
    endRound: (state) => {},
  },
});

export const { fold, raise, check, shuffle, newRound, endRound } =
  pokerSlice.actions;
export default pokerSlice.reducer;
