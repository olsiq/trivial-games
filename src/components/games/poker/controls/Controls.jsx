import React from "react";
import { Button } from "../../../button";
export const Controls = () => {
  return (
    <div className="controls">
      <Button action={"raise"} content={"raise"} />
      <Button action={"fold"} content={"fold"} />
      <Button action={"check"} content={"check"} />
    </div>
  );
};
