const createDeck = require('./src/create-deck');
const dealCards = require('./src/deal-cards');
const getDealOrder = require('./src/get-deal-order');
const getFromCardsToDeal = require('./src/get-from-cards-to-deal');
const getPlayerIndexFromId = require('./src/get-player-index-from-id');
const getPlayer = require('./src/get-player');
const {
  getRank,
  getSuit,
  getUnicodeSuit,
  getValue,
} = require('./src/get-rank-suit');
const getScoreboard = require('./src/get-scoreboard');
const getWinningCardIndex = require('./src/get-winning-card-index');
const invalidBids = require('./src/invalid-bids');
const nextPlayer = require('./src/next-player');
const orderArrayFromIndex = require('./src/order-array-from-index');
const pickCards = require('./src/pick-cards');
const randomFromArray = require('./src/random-from-array');
const removeItemFromArray = require('./src/remove-item-from-array');
const removeKeys = require('./src/remove-keys');
const shuffleArray = require('./src/shuffle-array');
const validBid = require('./src/valid-bid');
const validPlay = require('./src/valid-play');

module.exports = {
  createDeck,
  dealCards,
  getDealOrder,
  getFromCardsToDeal,
  getPlayerIndexFromId,
  getPlayer,
  getRank,
  getSuit,
  getUnicodeSuit,
  getValue,
  getScoreboard,
  getWinningCardIndex,
  invalidBids,
  nextPlayer,
  orderArrayFromIndex,
  pickCards,
  randomFromArray,
  removeItemFromArray,
  removeKeys,
  shuffleArray,
  validBid,
  validPlay,
};
