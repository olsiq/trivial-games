import { createSlice } from "@reduxjs/toolkit";
import { gameData, cellPosition, findNeighbors } from "../../helpers";

const bombs = 7;
const cols = 10;
const rows = 5;
const data = gameData(rows, cols, bombs);

const mineField = data.map((cell, idx) => {
  return {
    index: idx,
    hasMine: cell === "bomb",
    isFlaged: false,
    innerValue: cell === "bomb" ? "💣" : `${cell}`,
    isOpened: false,
  };
});

const initialState = {
  level: "easy",
  status: "not started yet",
  timer: " 0:0",
  flags: 10,
  toWin: cols * rows - bombs,
  minefield: mineField,
};

const mineSweeperSlice = createSlice({
  name: 'mineSweeper"',
  initialState,
  reducers: {
    open: (state, action) => {
      const box = state.minefield[action.payload];

      switch (box.innerValue) {
        case "💣":
          console.log("bomb");
          box.isOpened = true;
          state.status = "Game Over";
          alert("game over");
          break;
        case "0":
          // ! error below
          //recursion
          box.isOpened = true;
          state.toWin--;
          const position = cellPosition(box.index, 10, 50);
          const neighbours = findNeighbors(position, 10, box.index);
          console.log(
            `position is= ${position} and neighbours are = ${neighbours}`
          );
          neighbours.forEach((neighbour) => {
            // state.minefield[neighbour].isOpened = true;
            // --state.toWin;
            open(neighbour);
          });

          break;
        default:
          state.minefield[action.payload].isOpened = true;
          state.toWin--;
          break;
      }
    },
  },
});

export const { open } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
