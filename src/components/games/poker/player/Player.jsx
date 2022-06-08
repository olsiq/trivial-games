import React from "react";

import { useSelector } from "react-redux";
import { playerSelector } from "../../../../redux";

import { Card } from "../../../../components";

export const Player = ({ name = "Player" }) => {
  const [card1, card2] = useSelector(playerSelector);
  return (
    <div className="myHand">
      <div className="cards">
        <Card value={card1} type={"player"} />
        <Card value={card2} type={"player"} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};
