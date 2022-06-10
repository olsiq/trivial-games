import React from "react";
import { useSelector } from "react-redux";
import { wrongLetterSelector } from "../../../../redux";
import "./score.css";
export const Score = () => {
  const mistakes = useSelector(wrongLetterSelector);

  return (
    <div className={"scoreWrapper"}>
      <p>find the word otherwise you are 😵 !</p>
      <br />
      <p>You can make up to 6 mistakes</p>
      <br />
      <p>Mistakes : {mistakes}</p>
    </div>
  );
};
