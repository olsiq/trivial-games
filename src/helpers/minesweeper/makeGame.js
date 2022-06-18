import { findNeighbors } from "./findNeighbours";
import { makeBombs } from "./makeBombs";
import { cellPosition } from "./findPosition";

//? return the grid with all the values of the game
export const gameData = (row, col, bombs) => {
  const grid = new Array(row * col).fill(0);
  const bombsArray = makeBombs(bombs, row * col);
  bombsArray.forEach((bomb) => {
    grid[bomb] = "bomb";
    const bombPosition = cellPosition(bomb, col, col * row);
    const bombNeighbours = findNeighbors(bombPosition, col, bomb);
    bombNeighbours.forEach((neighbour) => {
      grid[neighbour] !== "bomb" && grid[neighbour]++;
    });
  });
  grid.forEach((el, index, array) => (el === 0 ? (array[index] = " ") : el));

  return grid;
};
