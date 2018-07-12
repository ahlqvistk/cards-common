const {getSuit, getValue} = require('./get-rank-suit');

module.exports = function getWinningCardIndex(leadingCard, trump, cards) {
  const leadingSuit = getSuit(leadingCard);
  const trumpSuit = getSuit(trump);
  const splitCards = cards.map((card, index) => ({
    index,
    suit: getSuit(card),
    value: getValue(card),
  }));

  const trumpCards = splitCards.filter((card) => card.suit === trumpSuit);
  if (trumpCards.length) {
    return trumpCards.sort((a, b) => b.value - a.value)[0].index;
  }

  const leadingCards = splitCards.filter((card) => card.suit === leadingSuit);
  return leadingCards.sort((a, b) => b.value - a.value)[0].index;
};
