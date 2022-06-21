import React from "react";
import { useSelector } from "react-redux/es/exports";
import { highScoresSelector, levelSelector } from "../../../../redux/";

import classes from "./highscores.module.css";

export const Scores = () => {
  const level = useSelector(levelSelector);
  const players = useSelector(highScoresSelector(level));

  const changeLevel = () => console.log("change highScore");

  const showTable = players.map((player) => {
    return (
      // ! the key must be a uniqe value
      <div key={player.name}>
        name = {player.name} | time = {player.time} sec{" "}
      </div>
    );
  });

  const levels = ["Easy", "Difficult", "Expert"];
  const chooseLevel = levels.map((level) => (
    <div key={level} onClick={changeLevel} className={classes.level}>
      <p>{level}</p>
    </div>
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <h1>Highscores</h1>
        <div className={classes.levels}>{chooseLevel}</div>
      </div>
      <div className={classes.highscores}>{showTable}</div>
    </div>
  );
};
