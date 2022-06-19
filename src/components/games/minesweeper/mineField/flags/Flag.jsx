import React from "react";
import { useSelector } from "react-redux";
import { flagsSelector } from "../../../../../redux";

export const Flag = () => {
  const flags = useSelector(flagsSelector);
  return <div>Flag : {flags}</div>;
};
