export const stageSelector = (state) => state.Poker.stage;
export const playerSelector = (state) => state.Poker.cards.player.cards;
export const playerBalalanceSelector = (state) => state.Poker.playerBalance;
export const opponentBalalanceSelector = (state) => state.Poker.opponentBalance;
export const opponentSelector = (state) => state.Poker.cards.opponent.cards;
export const tableSelector = (state) => state.Poker.cards.table;
export const potSelector = (state) => state.Poker.pot;
