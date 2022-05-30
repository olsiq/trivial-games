import React from "react";
import "./card.css";
import { ReactSVG } from "react-svg";
export const Card = ({ value }) => <ReactSVG src={`svg/${value}.svg`} />;
