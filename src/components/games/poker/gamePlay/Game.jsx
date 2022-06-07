import React from "react";
import { Card } from "../../../cards";
import { Controls } from "../controls";
export const Game = () => {
  return (
    <div className="gamePlay">
      <Card value={"1B"} type={"deck"} />
      <Card value={"8H"} type={"flop"} />
      <Card value={"4C"} type={"turn"} />
      <Card value={"5S"} type={"river"} />
      <Controls />
    </div>
  );
};
