import React from "react";
import { useSelector } from "react-redux";
import "./game.css";
import { Hangman } from "./hangman";
import { Poker } from "./poker";
import { MineSweeper } from "./minesweeper";
import { BlackJack } from "./blackJack";
import { activeSelector } from "../../redux";

export const Game = () => {
  const isActive = useSelector(activeSelector);
  return (
    <div className="gameWrapper">
      {isActive === "Poker" && <Poker />}
      {isActive === "Hang Man" && <Hangman />}
      {isActive === "Mine Sweeper" && <MineSweeper />}
      {isActive === "Black Jack" && <BlackJack />}
    </div>
  );
};
