//* find neighbour cells function

export const findNeighbors = (cellPosition, col, indexOfCell) => {
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
