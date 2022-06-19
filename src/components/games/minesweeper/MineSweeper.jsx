import React from "react";
import { MineField } from "./mineField";
import { Scores } from "./score";
export const MineSweeper = () => {
  return (
    <div>
      <MineField />
      <Scores />
    </div>
  );
};
