const createDeck = require('./create-deck');
const dealCards = require('./deal-cards');
const getDealOrder = require('./get-deal-order');
const getFromCardsToDeal = require('./get-from-cards-to-deal');
const getPlayerIndexFromId = require('./get-player-index-from-id');
const getPlayer = require('./get-player');
const {
  getRank,
  getSuit,
  getUnicodeSuit,
  getValue,
} = require('./get-rank-suit');
const getScoreboard = require('./get-scoreboard');
const getWinningCardIndex = require('./get-winning-card-index');
const invalidBids = require('./invalid-bids');
const nextPlayer = require('./next-player');
const orderArrayFromIndex = require('./order-array-from-index');
const pickCards = require('./pick-cards');
const randomFromArray = require('./random-from-array');
const removeItemFromArray = require('./remove-item-from-array');
const removeKeys = require('./remove-keys');
const shuffleArray = require('./shuffle-array');
const validBid = require('./valid-bid');
const validPlay = require('./valid-play');

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
