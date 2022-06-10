import React from "react";
import { useSelector } from "react-redux";
import { imageSelector } from "../../../../redux";

import "./hanger.css";

export const HangmanImage = () => {
  const image = useSelector(imageSelector);

  return (
    <div className="imageWrapper">
      <img alt="hangman" src={image} />
    </div>
  );
};
