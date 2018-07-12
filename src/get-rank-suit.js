module.exports = {
  getRank,
  getSuit,
  getUnicodeSuit,
  getValue,
};

function getRank(card) {
  return card.slice(1);
}

function getSuit(card) {
  switch (card.slice(0, 1)) {
  case 'c':
    return 'clubs';
  case 'd':
    return 'diamonds';
  case 'h':
    return 'hearts';
  case 's':
    return 'spades';
  }
}

function getUnicodeSuit(card) {
  switch (card.slice(0, 1)) {
  case 'c':
    return '\u2663';
  case 'd':
    return '\u2666';
  case 'h':
    return '\u2665';
  case 's':
    return '\u2660';
  }
}

function getValue(card) {
  const rank = getRank(card);
  const values = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14,
  }

  return values[rank];
}
