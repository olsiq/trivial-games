import { createSlice } from "@reduxjs/toolkit";

//helpers  -> findNeighbours
const findNeighbours = () => [1, 2, 3];
const initialState = {
  level: "easy",
  status: "not started yet",
  timer: "zero",
  flags: 15,
  minefield: [
    {
      index: 0,
      hasMine: false,
      hasFlag: false,
      innerValue: 1,
      isOpened: false,
    },
    {
      index: 1,
      hasMine: false,
      hasFlag: false,
      innerValue: 2,
      isOpened: false,
    },
  ],
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
