import React from "react";

import { Opponent, Player, Game } from "./index";
import "./poker.css";

export const Poker = () => {
  return (
    <div className="pokerWrapper">
      <Opponent />
      <Game />
      <Player />
    </div>
  );
};
