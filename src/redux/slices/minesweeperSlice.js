import { createSlice } from "@reduxjs/toolkit";
import { gameData } from "../../helpers/minesweeper/makeGame";

const data = gameData(5, 10, 7);

const mineField = data.map((cell, idx) => {
  return {
    index: idx,
    hasMine: cell === "bomb",
    isFlaged: false,
    innerValue: cell === "bomb" ? "💣" : `${cell}`,
    isOpened: false,
  };
});

//helpers  -> findNeighbours
const findNeighbours = () => [1, 2, 3];
const initialState = {
  level: "easy",
  status: "not started yet",
  timer: " 0:0",
  flags: 10,

  minefield: mineField,
};

const mineSweeperSlice = createSlice({
  name: 'mineSweeper"',
  initialState,
  reducers: {
    open: (state, action) => {
      switch (action.payload) {
        case "bomb":
          state.minefield[action.payload].isOpened = true;
          state.status = "Game Over";
          break;
        case 0:
          state.minefield[action.payload].isOpened = true;

          const neighbours = findNeighbours();
          console.log(neighbours);
          break;
        default:
          state.minefield[action.payload].isOpened = true;
          break;
      }
    },
  },
});
export const { open } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
