import React from "react";
import { useDispatch } from "react-redux";
import { shuffle } from "../../redux";

import "./button.css";
export const Button = ({ action, content }) => {
  const dispatch = useDispatch();
  const handleAction = () => {
    dispatch(action);
    dispatch(shuffle());
  };
  return (
    <button className="btn" onClick={handleAction}>
      {content}
    </button>
  );
};
