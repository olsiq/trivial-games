export const levelSelector = (state) => state.MineSweeper.level;
export const statusSelector = (state) => state.MineSweeper.status;
export const timerSelector = (state) => state.MineSweeper.timer;
export const flagsSelector = (state) => state.MineSweeper.flags;
export const minefieldSelector = (state) => state.MineSweeper.minefield;
export const mineSelector = (state) =>
  state.MineSweeper.minefield[0].innerValue;
