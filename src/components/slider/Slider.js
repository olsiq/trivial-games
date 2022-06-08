import React, { useState } from "react";
import "./slider.css";

export const Slider = ({ min = 1, max = 100 }) => {
  const [sliderValue, setSliderValue] = useState(20);
  const changeValue = (e) => setSliderValue(e.target.value);
  return (
    <div className="slideContainer">
      <h4 className="sliderValue">{sliderValue}$</h4>
      <input
        type="range"
        min={`${min}`}
        max={`${max}`}
        step={1}
        value={`${sliderValue}`}
        className="slider"
        id="myRange"
        onInput={changeValue}
      />
    </div>
  );
};
