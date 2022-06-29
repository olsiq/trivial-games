export const levelSelector = (state) => state.MineSweeper.level;
export const statusSelector = (state) => state.MineSweeper.status;
export const timerSelector = (state) => state.MineSweeper.timer;
export const flagsSelector = (state) => state.MineSweeper.flags;
export const flagedBoxSelector = (index) => (state) =>
  state.MineSweeper.minefield[index].isFlaged;
export const minefieldSelector = (state) => state.MineSweeper.minefield;
export const mineSelector = (state) =>
  state.MineSweeper.minefield[0].innerValue;

export const highScoresSelector = (level) => (state) =>
  state.MineSweeper.highScores[level];
export const columnSelector = (state) => state.MineSweeper.columns;
export const rowsSelector = (state) => state.MineSweeper.rows;
