import { createSlice } from "@reduxjs/toolkit";
import * as image from "../../images";

const images = { ...image };

const words = ["hello", "avatar", "react", "redux", "node"];
const initialState = {
  image: images.imag0,
  word: words[0].toUpperCase().split(""),
  wrongLetter: 0,
  correctLetter: 0,
  correctLetters: [],
  lettersPressed: [],
  status: "not over yet",
};

export const hangmanSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    tryLetter: (state, action) => {
      state.lettersPressed.push(action.payload);
      if (state.word.includes(action.payload)) {
        state.correctLetter++;
        state.correctLetters.push(action.payload);
      } else {
        state.wrongLetter++;
        state.image = images[`imag${state.wrongLetter}`];
      }

      if (state.wrongLetter === 6) {
        state.status = "YOU LOST";
        alert(state.status);
      } else if (state.correctLetter === state.word.length) {
        state.status = "YOU WIN";
        alert(state.status);
      }
    },

    reset: (state) => {
      state.image = images.imag0;
      state.word = words[Math.floor(Math.random() * words.length)]
        .toUpperCase()
        .split("");
      state.wrongLetter = 0;
      state.correctLetter = 0;
      state.lettersPressed = [];
      state.correctLetters = [];
      state.gameOver = false;
      state.status = "not over yet";
    },
  },
});

export const { reset, tryLetter } = hangmanSlice.actions;
export default hangmanSlice.reducer;
