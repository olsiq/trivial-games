import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../../../../redux";

import classes from "./box.module.css";
export const Box = ({ value, isOpened, index }) => {
  // const box1 = {
  //   value: "bomb",
  //   index: 0,
  //   isRevealed: false,
  //   isFlaged: false,
  // };
  const dispatch = useDispatch();
  const reveal = () => {
    dispatch(open(index));
  };
  const data = isOpened === true ? value : null;
  return (
    <button
      className={classes.box}
      data-value={data}
      data-isopen={isOpened}
      onClick={reveal}
    >
      {isOpened === true && value}
    </button>
  );
};
