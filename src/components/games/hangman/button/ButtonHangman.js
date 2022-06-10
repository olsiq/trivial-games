import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pressedSelector } from "../../../../redux";
import "../allBtns/buttons.css";

export const ButtonHangman = ({ text, action, isReset = false }) => {
  const pressedLetters = useSelector(pressedSelector);
  const isThisPressed = pressedLetters.filter((element) => element === text);
  const dispatch = useDispatch();

  const handleAction = () => {
    isReset ? dispatch(action()) : dispatch(action(text));
  };

  const setClass = isReset
    ? "resetBtn"
    : `btn${isThisPressed.length !== 0 ? "_disabled" : ""} `;
  return (
    <button className={setClass} onClick={handleAction}>
      {text}
    </button>
  );
};
