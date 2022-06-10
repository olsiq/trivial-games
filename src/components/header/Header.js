import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { gameListSelector, activeSelector, changeGame } from "../../redux";

import "./header.css";
export const Header = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(activeSelector);
  const list = useSelector(gameListSelector);

  const activate = (game) => dispatch(changeGame(`${game}`));
  const navigation = list.map((ele, index) => (
    <li
      key={index}
      className={ele === isActive ? "list-item active" : "list-item"}
      data-game={ele}
      onClick={() => activate(ele)}
    >
      {ele}
    </li>
  ));

  return (
    <header className="header">
      <nav className="navWrapper">
        <div className="logo">logo</div>
        <ul className="list">{navigation}</ul>
      </nav>
    </header>
  );
};
