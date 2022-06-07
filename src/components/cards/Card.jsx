import React from "react";
import "./card.css";
import { ReactSVG } from "react-svg";
export const Card = ({ value, type = null }) => (
  <div className={`cardWrapper ${type}`}>
    <ReactSVG src={`svg/${value}.svg`} />
  </div>
);
