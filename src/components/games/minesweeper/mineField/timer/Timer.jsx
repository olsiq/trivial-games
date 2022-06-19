import React from "react";
import { useSelector } from "react-redux";
import { timerSelector } from "../../../../../redux";

export const Timer = () => {
  const timer = useSelector(timerSelector);
  return <div>Timer : {timer}</div>;
};
