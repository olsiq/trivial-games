import { store } from "./store";
import { fold, raise, check, shuffle, newRound, endRound } from "./pokerSlice";
import {
  stageSelector,
  playerSelector,
  playerBalalanceSelector,
  opponentSelector,
  opponentBalalanceSelector,
  tableSelector,
  potSelector,
} from "./pokerSelectors";

import { reset, tryLetter } from "./hangManSlice";
import {
  wrongLetterSelector,
  wordSelector,
  fullWordSelector,
  correctPressedSelector,
  pressedSelector,
  correctLetterSelector,
  imageSelector,
} from "./hangmanSelectos";

import { gameListSelector, activeSelector, changeGame } from "./headerSlice";

export {
  store,
  fold,
  raise,
  check,
  shuffle,
  newRound,
  endRound,
  reset,
  tryLetter,
  changeGame,
  stageSelector,
  playerSelector,
  opponentSelector,
  tableSelector,
  opponentBalalanceSelector,
  playerBalalanceSelector,
  potSelector,
  wrongLetterSelector,
  wordSelector,
  fullWordSelector,
  correctPressedSelector,
  pressedSelector,
  correctLetterSelector,
  imageSelector,
  gameListSelector,
  activeSelector,
};
