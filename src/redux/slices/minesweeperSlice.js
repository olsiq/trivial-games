import { createSlice } from "@reduxjs/toolkit";
import {
  gameData,
  mineField,
  cellPosition,
  findNeighbors,
} from "../../helpers";

const bombs = 7;
const cols = 10;
const rows = 5;
const data = gameData(rows, cols, bombs);

const initialState = {
  level: "easy",
  status: "not started yet",
  rows: rows,
  colums: cols,
  timer: " 0:0",
  flags: bombs,
  bombs: bombs,
  toWin: cols * rows - bombs,
  minefield: mineField(data),
  highScores: {
    easy: [
      { name: "john Wick", time: "10" },
      { name: "thanos", time: "15" },
      { name: "sWitch", time: "25" },
      { name: "Thor", time: "29" },
      { name: "hulk", time: "30" },
    ],
    difficult: [
      { name: "john Wick", time: "10" },
      { name: "john Doe", time: "15" },
      { name: "sWitch", time: "25" },
      { name: "Thor", time: "29" },
      { name: "mike", time: "30" },
    ],
    expert: [
      { name: "Hawking", time: "10" },
      { name: "Sagan", time: "15" },
      { name: "sWitch", time: "25" },
      { name: "Thor", time: "29" },
      { name: "hulk", time: "30" },
    ],
  },
};

const mineSweeperSlice = createSlice({
  name: 'mineSweeper"',
  initialState,
  reducers: {
    open: (state, action) => {
      const box = state.minefield[action.payload];
      if (!box.isFlaged) {
        switch (box.innerValue) {
          case "💣":
            console.log("bomb");
            box.isOpened = true;
            state.status = "Game Over";

            //? show all mines
            state.minefield.map((el) => {
              if (el?.hasMine) {
                state.minefield[el.index].isOpened = true;
              }
            });
            break;
          // case "0":
          //   // ! error below
          //   //recursion
          //   box.isOpened = true;
          //   state.toWin--;
          //   //   const position = cellPosition(box.index, 10, 50);
          //   //   const neighbours = findNeighbors(position, 10, box.index);
          //   //   console.log(
          //   //     `position is= ${position} and neighbours are = ${neighbours}`
          //   //   );
          //   //   neighbours.forEach((neighbour) => {
          //   //     // state.minefield[neighbour].isOpened = true;
          //   //     // --state.toWin;
          //   //     open(neighbour);
          //   //   });

          //   break;
          default:
            state.minefield[action.payload].isOpened = true;
            state.toWin--;
            break;
        }
      }
    },
    flag: (state, action) => {
      const flagedBox = state.minefield[action.payload].isFlaged;
      const isBoxOpen = !state.minefield[action.payload].isOpened;
      if (isBoxOpen) {
        if (state.flags <= state.bombs) {
          if (flagedBox) {
            state.minefield[action.payload].isFlaged = !flagedBox;
            state.flags++;
          } else {
            if (state.flags > 0) {
              state.flags--;
              state.minefield[action.payload].isFlaged = !flagedBox;
            }
          }
        }
      }
    },
    newGame: (state, action) => {
      const { level, bombs, cols, rows } = action.payload;
      state.level = level;
      state.status = "not started yet";
      state.timer = " 0:0";
      state.flags = bombs;
      state.bombs = bombs;
      state.toWin = cols * rows - bombs;
      const data = gameData(rows, cols, bombs);
      state.minefield = mineField(data);
    },
  },
});

export const { open, flag, newGame } = mineSweeperSlice.actions;

export default mineSweeperSlice.reducer;
