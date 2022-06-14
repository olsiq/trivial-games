import React from "react";
import { Flag } from "./flags";
import { Timer } from "./timer";
import { Box } from "./box";

import classes from "./minefield.module.css";

export const MineField = () => {
  const array = new Array(50).fill(1);
  const cells = array.map((el, index) => <Box key={index} />);
  return (
    <div className={classes.minefieldWrapper}>
      <h1>Minesweeper</h1>
      <div className={classes.controls}>
        <Flag />
        <Timer />
      </div>
      <div className={classes.mineField}>{cells}</div>
    </div>
  );
};
