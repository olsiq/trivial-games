import { generateRandom } from "./random";
import { deck } from "./deck";
export const roundCards = (num = 6) => {
  const setArray = new Set([]);
  while (setArray.size !== num) {
    setArray.add(generateRandom());
  }
  const cardIndex = [...setArray];
  const cardsArray = cardIndex.map((index) => deck[index]);
  const cards = {
    player: { cards: [cardsArray[0], cardsArray[1]] },
    opponent: { cards: [cardsArray[2], cardsArray[3]] },
    table: [cardsArray[4], cardsArray[5], cardsArray[6]],
  };
  return cards;
};
