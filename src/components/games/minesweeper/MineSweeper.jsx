import React from "react";
import { MineSweeperLayout } from "../../layout";
import { Levels } from "./levels";
import { MineField } from "./mineField";
import { Scores } from "./score";
export const MineSweeper = () => {
  return (
    <MineSweeperLayout>
      <MineField />
      <Scores />
      <Levels />
    </MineSweeperLayout>
  );
};
