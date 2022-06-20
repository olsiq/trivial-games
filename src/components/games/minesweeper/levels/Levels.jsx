import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelSelector, newGame } from "../../../../redux";

import classes from "./level.module.css";

export const Levels = () => {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);
  const [activeLevel, setActiveLevel] = useState(level);
  const options = [
    { value: "easy", label: "Easy" },
    { value: "difficult", label: "Difficult" },
    { value: "expert", label: "Expert" },
  ];
  const changeLevel = (e) => {
    setActiveLevel(e.target.value);
  };
  const showOptions = options.map((option, index) => (
    <option key={index} value={option.value} label={option.label} />
  ));

  const startNewGame = () => {
    const easy = { level: "easy", bombs: 10, cols: 10, rows: 5 };
    const difficult = { level: "difficult", bombs: 20, cols: 10, rows: 4 };
    const expert = { level: "expert", bombs: 30, cols: 10, rows: 5 };

    switch (activeLevel) {
      case "difficult":
        dispatch(newGame(difficult));
        break;
      case "expert":
        dispatch(newGame(expert));
        break;
      case "easy":
        dispatch(newGame(easy));
        break;
      default:
        console.log("error at the switch statement");
        break;
    }
  };
  return (
    <div className={classes.wrapper}>
      <h3>You can change the difficulty here!</h3>

      <select value={activeLevel} onChange={changeLevel}>
        {showOptions}
      </select>
      <button className={classes["btn-start"]} onClick={startNewGame}>
        New Game
      </button>
    </div>
  );
};
