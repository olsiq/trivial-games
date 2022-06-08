import React from "react";
import { Card } from "../../../../components";
export const Opponent = () => {
  return (
    <div className="opponent">
      <h2>opponent</h2>
      <div className="cards">
        <Card value={"1B"} type={"opponent"} />
        <Card value={"1B"} type={"opponent"} />
      </div>
    </div>
  );
};
