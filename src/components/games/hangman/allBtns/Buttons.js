import React from "react";
import { listOfBtns } from "./allButtons";
import "./buttons.css";
export const Buttons = () => {
  return (
    <div className="wrapper">
      <div className=" wrapperButtons ">
        {/* {listOfBtns.map((el) => el)} */}
        {listOfBtns}
      </div>
    </div>
  );
};
