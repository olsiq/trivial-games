import React from "react";

import classes from "./box.module.css";
export const Box = () => {
  const box1 = {
    value: "bomb",
    index: 2,
    isRevealed: false,
    isFlaged: false,
  };

  const data = box1.isRevealed === true ? box1.value : null;

  return (
    <button
      className={classes.box}
      data-value={data}
      data-isopen={box1.isRevealed}
    >
      {box1.isRevealed === true && box1.value}
    </button>
  );
};
