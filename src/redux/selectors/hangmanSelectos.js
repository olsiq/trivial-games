export const wrongLetterSelector = (state) => state.Hangman.wrongLetter;
export const wordSelector = (state) => state.Hangman.word.length;
export const fullWordSelector = (state) => state.Hangman.word;
export const correctPressedSelector = (state) => state.Hangman.correctLetters;
export const pressedSelector = (state) => state.Hangman.lettersPressed;
export const correctLetterSelector = (state) =>
  state.Hangman.word.correctLetter;
export const imageSelector = (state) => state.Hangman.image;
