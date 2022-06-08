import React from "react";
import { Button } from "../../../button";
import { Slider } from "../../../slider";
export const Controls = () => {
  return (
    <div className="controls">
      <Button action={"raise"} content={"raise"} />
      <Button action={"fold"} content={"fold"} />
      <Button action={"check"} content={"check"} />
      <Slider />
    </div>
  );
};
