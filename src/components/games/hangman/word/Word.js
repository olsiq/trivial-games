import React from "react";
import { useSelector } from "react-redux";
import { fullWordSelector, correctPressedSelector } from "../../../../redux";

import "./word.css";

export const Word = () => {
  const word = useSelector(fullWordSelector);
  const correctLetters = useSelector(correctPressedSelector);
  const letters = word.map((letter, index) =>
    !correctLetters.includes(letter) ? (
      <span className="letter" key={index}>
        _
      </span>
    ) : (
      <span className="letter" key={index}>
        {letter}
      </span>
    )
  );
  return (
    <div className="wordWrapper">
      <div className="lettersWrapper">{letters}</div>
    </div>
  );
};
