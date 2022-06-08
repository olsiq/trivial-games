import React from "react";

import { useSelector } from "react-redux";
import { stageSelector, tableSelector } from "../../../../redux";

import { Card } from "../../../cards";
import { Controls } from "../controls";
export const Game = () => {
  const stage = useSelector(stageSelector);
  const [flop, turn, river] = useSelector(tableSelector);
  return (
    <div className="gamePlay">
      <Card value={"1B"} type={"deck"} />
      {stage > 1 && <Card value={flop} type={"flop"} />}
      {stage > 2 && <Card value={turn} type={"turn"} />}
      {stage > 3 && <Card value={river} type={"river"} />}

      <Controls />
    </div>
  );
};
//
