import React from "react";
import { useSelector } from "react-redux";
import {
  opponentSelector,
  opponentBalalanceSelector,
  stageSelector,
} from "../../../../redux";

import { Card } from "../../../../components";

export const Opponent = () => {
  const [card1, card2] = useSelector(opponentSelector);
  const balance = useSelector(opponentBalalanceSelector);
  const stage = useSelector(stageSelector);
  return (
    <div className="opponent">
      <p>Balance: {balance} $</p>
      <h2>opponent</h2>
      <div className="cards">
        <Card value={stage === 5 ? card1 : "1B"} type={"opponent"} />
        <Card value={stage === 5 ? card2 : "1B"} type={"opponent"} />
      </div>
    </div>
  );
};
