import React from "react";
import { Card } from "../../../../components";
export const Player = () => {
  return (
    <div className="myHand">
      <Card value={"2C"} type={"player"} />
      <Card value={"2S"} type={"player"} />
    </div>
  );
};
