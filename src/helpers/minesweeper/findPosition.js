// * finds the cells position

export const cellPosition = (cell, col, totalCells) => {
  const topLeftCorner = (cell) => cell === 0;
  const topRightCorner = (cell) => cell === col - 1;
  const bottumLeftCorner = (cell) => cell === totalCells - col;
  const bottumRightCorner = (cell) => cell === totalCells - 1;
  const firstRow = (cell) => cell > 0 && cell < col - 1;
  const lastRow = (cell) => cell > totalCells - col && cell < totalCells - 1;
  const firstColumn = (cell) => cell % col === 0;
  const lastColumn = (cell) => cell % col === col - 1;

  let position;
  if (topLeftCorner(cell)) {
    position = "top-left-cell";
  } else if (topRightCorner(cell)) {
    position = "top-right-cell";
  } else if (bottumLeftCorner(cell)) {
    position = "buttom-left-cell";
  } else if (bottumRightCorner(cell)) {
    position = "buttom-right-cell";
  } else if (firstRow(cell)) {
    position = "first-row";
  } else if (lastRow(cell)) {
    position = "last-row";
  } else if (firstColumn(cell)) {
    position = "first-column";
  } else if (lastColumn(cell)) {
    position = "last-column";
  } else {
    position = "middle";
  }

  return position;
};
