import React, { Fragment } from "react";
import { Score } from "./score";
import { Reset } from "./reset";
import { Word } from "./word";
import { HangmanImage } from "./hanger";
import { Buttons } from "./allBtns/Buttons";
export const Hangman = () => {
  return (
    <Fragment>
      <Score />
      <Reset />
      <Word />
      <HangmanImage />
      <Buttons />
    </Fragment>
  );
};
