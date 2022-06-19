import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  open,
  flag,
  flagedBoxSelector,
  statusSelector,
} from "../../../../../redux";

import classes from "./box.module.css";
export const Box = ({ value, isOpened, index }) => {
  const isFlaged = useSelector(flagedBoxSelector(index));
  // const flags = useSelector(flagsSelector);
  const dispatch = useDispatch();
  const reveal = () => {
    dispatch(open(index));
  };
  const flagTheBox = (e) => {
    e.preventDefault();
    dispatch(flag(index));
  };
  const status = useSelector(statusSelector);
  const data = isOpened === true ? value : null;
  let showValue = isOpened && value;
  isFlaged && (showValue = "🚩");
  status === "Game Over" && isFlaged && value !== "💣" && (showValue = "❌");
  return (
    <button
      className={classes.box}
      data-value={data}
      data-isopen={isOpened}
      onClick={reveal}
      onContextMenu={flagTheBox}
    >
      {showValue}
    </button>
  );
};
