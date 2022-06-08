import React from "react";
import "./button.css";
export const Button = ({ action, content }) => {
  const handleAction = () => {
    console.log(`dispatch ${action}`);
  };
  return (
    <button className="btn" onClick={handleAction}>
      {content}
    </button>
  );
};
