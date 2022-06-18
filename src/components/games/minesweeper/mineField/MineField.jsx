import React from "react";
import { useSelector } from "react-redux/es/exports";
import { minefieldSelector } from "../../../../redux";

import { Flag } from "./flags";
import { Timer } from "./timer";
import { Box } from "./box";

import classes from "./minefield.module.css";

export const MineField = () => {
  const array = useSelector(minefieldSelector);
  const boxes = array.map((box, index) => (
    <Box key={index} value={box.innerValue} isOpened={box.isOpened} />
  ));
  return (
    <div className={classes.minefieldWrapper}>
      <h1>Minesweeper</h1>
      <div className={classes.controls}>
        <Flag />
        <Timer />
      </div>
      <div className={classes.mineField}>{boxes}</div>
    </div>
  );
};
