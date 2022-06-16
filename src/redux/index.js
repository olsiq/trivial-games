import { store } from "./store";
import {
  fold,
  raise,
  check,
  shuffle,
  newRound,
  endRound,
} from "./slices/pokerSlice";
import {
  stageSelector,
  playerSelector,
  playerBalalanceSelector,
  opponentSelector,
  opponentBalalanceSelector,
  tableSelector,
  potSelector,
} from "./selectors/pokerSelectors";

import { reset, tryLetter } from "./slices/hangManSlice";
import {
  wrongLetterSelector,
  wordSelector,
  fullWordSelector,
  correctPressedSelector,
  pressedSelector,
  correctLetterSelector,
  imageSelector,
} from "./selectors/hangmanSelectos";

import {
  gameListSelector,
  activeSelector,
  changeGame,
} from "./slices/headerSlice";

import { open } from "./slices/minesweeperSlice";

import {
  level,
  status,
  timer,
  flags,
  mine,
} from "./selectors/minesweeperSelectors";

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
  open,
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
  level,
  status,
  timer,
  flags,
  mine,
};
