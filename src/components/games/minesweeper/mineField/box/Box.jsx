import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cellPosition, findNeighbors } from "../../../../../helpers";
import {
  open,
  flag,
  flagedBoxSelector,
  statusSelector,
} from "../../../../../redux";
import {
  columnSelector,
  rowsSelector,
} from "../../../../../redux/selectors/minesweeperSelectors";

import classes from "./box.module.css";
export const Box = ({ value, isOpened, index }) => {
  const col = useSelector(columnSelector);
  const row = useSelector(rowsSelector);
  const dispatch = useDispatch();
  const reveal = () => {
    switch (value) {
      //!bug
      case "0":
        dispatch(open(index));
        // const position = cellPosition(index, col, col * row);
        // const neighbours = findNeighbors(position, col, index);
        // neighbours.map((neighbour) => dispatch(open(neighbour)));
        // console.log(position, index);
        break;

      default:
        // console.log(value);
        dispatch(open(index));
        break;
    }
  };

  const isFlaged = useSelector(flagedBoxSelector(index));
  // const flags = useSelector(flagsSelector);

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
