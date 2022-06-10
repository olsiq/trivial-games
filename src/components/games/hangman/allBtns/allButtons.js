import { ButtonHangman } from "../button/ButtonHangman";
import { tryLetter } from "../../../../redux";

const words = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const listOfBtns = words.map((letter, index) => (
  <ButtonHangman key={index} text={letter} action={tryLetter} />
));
