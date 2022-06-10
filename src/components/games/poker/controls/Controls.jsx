import React from "react";
import { useSelector } from "react-redux";
import { fold, raise, check, potSelector } from "../../../../redux";
import { Button } from "../../../button";
import { Slider } from "../../../slider";

import "./controls.css";

export const Controls = () => {
  const pot = useSelector(potSelector);
  return (
    <div className="controls">
      <p>Pot: {pot}</p>
      <div className="controlsBtnsWrapper">
        <Button action={raise()} content={"raise"} />
        <Button action={fold()} content={"fold"} />
        <Button action={check()} content={"check"} />
      </div>
      <Slider />
      <p>you have :</p>
    </div>
  );
};
