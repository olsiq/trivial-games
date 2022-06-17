import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mineSelector, open } from "../../../../../redux";

import classes from "./box.module.css";
export const Box = () => {
  const box1 = {
    value: "bomb",
    index: 0,
    isRevealed: false,
    isFlaged: false,
  };
  const dispatch = useDispatch();
  const reveal = () => {
    dispatch(open(box1.index));
  };
  const data = box1.isRevealed === true ? box1.value : null;
  const mine = useSelector(mineSelector);
  console.log(mine);
  return (
    <button
      className={classes.box}
      data-value={data}
      data-isopen={box1.isRevealed}
      onClick={reveal}
    >
      {box1.isRevealed === true && box1.value}
    </button>
  );
};
