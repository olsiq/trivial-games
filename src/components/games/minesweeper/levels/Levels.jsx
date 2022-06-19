import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelSelector } from "../../../../redux";
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
    // dispatch(newGame(activeLevel));
  };
  return (
    <div>
      <h1>you can change the difficulty here!</h1>

      <select value={activeLevel} onChange={changeLevel}>
        {showOptions}
      </select>
      <button onClick={startNewGame}> New Game </button>
    </div>
  );
};
