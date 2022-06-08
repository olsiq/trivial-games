import React from "react";
import { useSelector } from "react-redux";
import { opponentSelector } from "../../../../redux";
import { Card } from "../../../../components";
export const Opponent = () => {
  const [card1, card2] = useSelector(opponentSelector);

  return (
    <div className="opponent">
      <h2>opponent</h2>
      <div className="cards">
        <Card value={card1} type={"opponent"} />
        <Card value={card2} type={"opponent"} />
      </div>
    </div>
  );
};
