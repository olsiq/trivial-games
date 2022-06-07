import React, { useState } from "react";
import { gameList } from "./gameList";

import "./header.css";
export const Header = () => {
  const [isActive, setActive] = useState("Poker");
  const changeGame = (game) => setActive(`${game}`);
  const navigation = gameList.map((ele, index) => (
    <li
      key={index}
      className={ele === isActive ? "list-item active" : "list-item"}
      data-game={ele}
      onClick={() => changeGame(ele)}
    >
      {ele}
    </li>
  ));
  console.log(isActive);
  return (
    <header className="header">
      <nav className="navWrapper">
        <div className="logo">logo</div>
        <ul className="list">{navigation}</ul>
      </nav>
    </header>
  );
};
