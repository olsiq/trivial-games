import React from "react";

export const Button = ({ action, content }) => {
  const handleAction = () => {
    console.log(`dispatch ${action}`);
  };
  return <button onClick={handleAction}>{content}</button>;
};
