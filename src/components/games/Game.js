import React from "react";
import "./game.css";
import { Poker } from "./poker/Poker";

export const Game = ({ type }) => {
  const viewGame = <Poker />;
  return <div className="gameWrapper">{viewGame}</div>;
};
