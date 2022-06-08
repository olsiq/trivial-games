import React from "react";
import { Card } from "../../../../components";

export const Player = ({ name = "Player" }) => {
  return (
    <div className="myHand">
      <div className="cards">
        <Card value={"2C"} type={"player"} />
        <Card value={"2S"} type={"player"} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};
