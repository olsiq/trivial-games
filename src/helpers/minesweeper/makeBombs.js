//* make an Array of Mines
export const makeBombs = (bombs, gridLength) => {
  const uniqNums = new Set();

  while (uniqNums.size < bombs) {
    uniqNums.add(Math.floor(Math.random() * gridLength));
  }

  return [...uniqNums];
};
