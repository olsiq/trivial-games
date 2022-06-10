import React from "react";
import { ButtonHangman } from "../button/ButtonHangman";
import { reset } from "../../../../redux";

export const Reset = () => {
  return <ButtonHangman text={"Reset"} action={reset} isReset={true} />;
};
