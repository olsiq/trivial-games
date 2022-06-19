import React from "react";
import { Levels } from "./levels";
import { MineField } from "./mineField";
import { Scores } from "./score";
export const MineSweeper = () => {
  return (
    <div>
      <MineField />
      <Scores />
      <Levels />
    </div>
  );
};
