// ! error propably at cell check values, for ex if first cell , cell index is 0 not 1

const cellPosition = (cell, col, totalCells) => {
  let position;
  if (cell === 1) {
    position = "top-left-cell";
  } else if (cell === col) {
    position = "top-right-cell";
  } else if (cell === totalCells - (col - 1)) {
    position = "buttom-left-cell";
  } else if (cell === totalCells) {
    position = "buttom-right-cell";
  } else if (cell > 1 && cell < col) {
    position = "first-row";
  } else if (cell > totalCells - col && cell < totalCells) {
    position = "last-row";
  } else if (cell % col === 1) {
    position = "first-column";
  } else if (cell % col === 0) {
    position = "last-column";
  } else {
    position = "middle";
  }
  console.log(position);
  return position;
};

//find neighbour cells function
const findNeighbors = (cellPosition, col, indexOfCell) => {
  let Cells = [];
  switch (cellPosition) {
    case "top-left-cell":
      Cells = [indexOfCell + 1, indexOfCell + col, indexOfCell + (col + 1)];

      break;
    case "top-right-cell":
      Cells = [indexOfCell - 1, indexOfCell + (col - 1), indexOfCell + col];

      break;
    case "buttom-left-cell":
      Cells = [indexOfCell - col, indexOfCell - (col - 1), indexOfCell + 1];

      break;
    case "buttom-right-cell":
      Cells = [indexOfCell - 1, indexOfCell - col, indexOfCell - (col + 1)];

      break;
    case "buttom-right-col":
      Cells = [indexOfCell - 1, indexOfCell - col, indexOfCell - (col + 1)];

      break;
    case "first-column":
      Cells = [
        indexOfCell - col,
        indexOfCell - (col - 1),
        indexOfCell + 1,
        indexOfCell + col,
        indexOfCell + (col + 1),
      ];

      break;
    case "last-column":
      Cells = [
        indexOfCell - col,
        indexOfCell + col,
        indexOfCell - 1,
        indexOfCell - (col + 1),
        indexOfCell + (col - 1),
      ];

      break;
    case "first-row":
      Cells = [
        indexOfCell - 1,
        indexOfCell + 1,
        indexOfCell + (col - 1),
        indexOfCell + col,
        indexOfCell + (col + 1),
      ];

      break;
    case "last-row":
      Cells = [
        indexOfCell - 1,
        indexOfCell + 1,
        indexOfCell - (col + 1),
        indexOfCell - (col - 1),
        indexOfCell - col,
      ];

      break;
    case "middle":
      Cells = [
        indexOfCell + 1,
        indexOfCell - 1,
        indexOfCell - col,
        indexOfCell + col,
        indexOfCell - (col - 1),
        indexOfCell - (col + 1),
        indexOfCell + (col + 1),
        indexOfCell + (col - 1),
      ];

      break;

    default:
      console.error("switch statement");
      break;
  }
  return Cells;
};
const makeGrid = (row, col, bombs) => {
  const grid = new Array(row * col).fill(0);
  const bombsArray = makeBombs(bombs, row * col);
  bombsArray.forEach((bomb) => {
    grid[bomb] = "bomb";
    const bombPosition = cellPosition(bomb, col, col * row);
    const bombNeighbours = findNeighbors(bombPosition, col, bomb);
    bombNeighbours.forEach((neighbour) => {
      grid[neighbour]++;
    });
  });
  console.log(grid, bombsArray);
};

const makeBombs = (bombs, gridLength) => {
  const uniqNums = new Set();

  while (uniqNums.size < bombs) {
    uniqNums.add(Math.floor(Math.random() * gridLength));
  }

  return [...uniqNums];
};

makeGrid(4, 5, 2);

// find Cells Position function
