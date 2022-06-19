import React from "react";
import { useSelector } from "react-redux/es/exports";
import { highScoresSelector, levelSelector } from "../../../../redux/";

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
    <div key={level} onClick={changeLevel}>
      <p>{level}</p>
    </div>
  ));
  return (
    <div>
      <div>
        <h1>Highscores</h1>
        {chooseLevel}
      </div>
      {showTable}
    </div>
  );
};
