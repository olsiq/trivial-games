import React from "react";
import { Button } from "../../../button";
import { Slider } from "../../../slider";

import "./controls.css";

export const Controls = () => {
  return (
    <div className="controls">
      <div className="controlsBtnsWrapper">
        <Button action={"raise"} content={"raise"} />
        <Button action={"fold"} content={"fold"} />
        <Button action={"check"} content={"check"} />
      </div>
      <Slider />
    </div>
  );
};
