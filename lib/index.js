'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepEqual = _interopDefault(require('deep-equal'));

function createDeck() {
  var suits = ['c', 'd', 'h', 's'];
  var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  return suits.map(function (suit) {
    return rank.map(function (rank) {
      return suit + rank;
    });
  }).reduce(function (acc, val) {
    return acc.concat(val);
  });
}

function getDealOrder(dealer, playerId, players) {
  function getPlacement(players, id) {
    return players.map(function (player, index) {
      return { id: player.socket.id, placement: index };
    }).filter(function (player) {
      return player.id === id;
    }).map(function (player) {
      return player.placement;
    })[0];
  }

  var dealerPlacement = getPlacement(players, dealer);
  var playerPlacement = getPlacement(players, playerId);

  return (playerPlacement - dealerPlacement + players.length - 1) % players.length;
}

function getFromCardsToDeal(cardsToDeal, nrOfPlayers, dealOrder) {
  return cardsToDeal.filter(function (card, index) {
    return (index - dealOrder) % nrOfPlayers === 0;
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function dealCards(nrOfCards, dealer, deck, players) {
  var cardsToDeal = deck.cards.slice(0, nrOfCards * players.length);
  var remainingCards = deck.cards.slice(nrOfCards * players.length);

  var newPlayers = players.map(function (player) {
    var cards = getFromCardsToDeal(cardsToDeal, players.length, getDealOrder(dealer, player.socket.id, players));

    return _extends({}, player, { cards: cards });
  });

  return { newDeck: _extends({}, deck, { cards: remainingCards }), newPlayers: newPlayers };
}

function getPlayerIndexFromId(id, players) {
  return players.map(function (player, index) {
    return { id: player.socket.id, index: index };
  }).filter(function (player) {
    return player.id === id;
  })[0].index;
}

function getPlayer(id, players) {
  return players.filter(function (player) {
    return player.socket.id === id;
  })[0];
}

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
  var rank = getRank(card);
  var values = {
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
    'A': 14
  };

  return values[rank];
}

function getScoreboard(players) {
  var playerIds = players.map(function (player) {
    return player.socket.id;
  });
  var points = players.map(function (player) {
    return player.points;
  });
  var roundPoints = points[0].map(function (col, i) {
    return points.map(function (row) {
      return row[i];
    });
  });
  var totals = points.map(function (playerPoints) {
    return playerPoints.reduce(function (acc, cur) {
      return acc + cur;
    });
  });

  return { players: playerIds, points: roundPoints, totals: totals };
}

function getWinningCardIndex(leadingCard, trump, cards) {
  var leadingSuit = getSuit(leadingCard);
  var trumpSuit = getSuit(trump);
  var splitCards = cards.map(function (card, index) {
    return {
      index: index,
      suit: getSuit(card),
      value: getValue(card)
    };
  });

  var trumpCards = splitCards.filter(function (card) {
    return card.suit === trumpSuit;
  });
  if (trumpCards.length) {
    return trumpCards.sort(function (a, b) {
      return b.value - a.value;
    })[0].index;
  }

  var leadingCards = splitCards.filter(function (card) {
    return card.suit === leadingSuit;
  });
  return leadingCards.sort(function (a, b) {
    return b.value - a.value;
  })[0].index;
}

function invalidBids(state) {
  if (state.activePlayer !== state.dealer) {
    return [];
  }

  var nrOCards = state.players[0].cards.length;
  var currentBidTotal = state.players.reduce(function (acc, curr) {
    return curr.hasOwnProperty('bid') && curr.bid && curr.bid >= 0 ? acc + curr.bid : acc + 0;
  }, 0);

  if (nrOCards >= currentBidTotal) {
    return [nrOCards - currentBidTotal];
  }

  return [];
}

function nextPlayer(id, players) {
  var currentPlayerIndex = players.map(function (player, index) {
    return { id: player.socket.id, index: index };
  }).filter(function (player) {
    return player.id === id;
  }).map(function (player) {
    return player.index;
  })[0];

  var nextPlayerIndex = (currentPlayerIndex + 1) % players.length;

  return players[nextPlayerIndex].socket.id;
}

function orderArrayFromIndex(index, arr) {
  if (index === 0) {
    return arr;
  }
  return arr.slice(index).concat(arr.slice(0, index));
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function pickCards(amount, deck) {
  var pickedCards = deck.cards.slice(0, amount);
  var remainingCards = deck.cards.slice(amount);

  return { cards: pickedCards, deck: _extends$1({}, deck, { cards: remainingCards }) };
}

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function removeItemFromArray(item, arr) {
  return arr.filter(function (x) {
    return !deepEqual(x, item);
  });
}

function removeKeys(keys, obj) {
  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    delete newObj[key];
  });

  return newObj;
}

function shuffleArray(arr) {
  return arr.map(function (a) {
    return { sort: Math.random(), value: a };
  }).sort(function (a, b) {
    return a.sort - b.sort;
  }).map(function (a) {
    return a.value;
  });
}

function validBid(bid, state) {
  var nrOfCards = state.players[0].cards.length;

  if (bid > nrOfCards || bid < 0) {
    return false;
  }

  if (state.activePlayer === state.dealer) {
    var currentBidTotal = state.players.reduce(function (acc, curr) {
      return curr.hasOwnProperty('bid') && curr.bid && curr.bid >= 0 ? acc + curr.bid : acc + 0;
    }, 0);

    if (currentBidTotal + bid === nrOfCards) {
      return false;
    }
  }

  return true;
}

function validPlay(playedCard, state) {
  var currentPlayer = getPlayer(state.activePlayer, state.players);
  var currentPlayersHand = currentPlayer && currentPlayer.hasOwnProperty('cards') ? currentPlayer.cards : [];
  var playedCardInHand = currentPlayersHand.includes(playedCard);

  // Only cards in hand can be played
  if (!playedCardInHand) {
    return false;
  }

  // If it's the leading players turn, any card on hand is allowed
  if (!state.leadingPlayer) {
    return true;
  }

  // Other players need to follow suit if possible
  var leadSuit = getSuit(getPlayer(state.leadingPlayer, state.players).playedCard);
  var playedSuit = getSuit(playedCard);
  var suitsOnHand = currentPlayersHand.map(function (card) {
    return getSuit(card);
  });

  if (playedSuit === leadSuit) {
    return true;
  }

  if (!suitsOnHand.includes(leadSuit)) {
    return true;
  }

  return false;
}

exports.createDeck = createDeck;
exports.dealCards = dealCards;
exports.getDealOrder = getDealOrder;
exports.getFromCardsToDeal = getFromCardsToDeal;
exports.getPlayerIndexFromId = getPlayerIndexFromId;
exports.getPlayer = getPlayer;
exports.getRank = getRank;
exports.getSuit = getSuit;
exports.getUnicodeSuit = getUnicodeSuit;
exports.getValue = getValue;
exports.getScoreboard = getScoreboard;
exports.getWinningCardIndex = getWinningCardIndex;
exports.invalidBids = invalidBids;
exports.nextPlayer = nextPlayer;
exports.orderArrayFromIndex = orderArrayFromIndex;
exports.pickCards = pickCards;
exports.randomFromArray = randomFromArray;
exports.removeItemFromArray = removeItemFromArray;
exports.removeKeys = removeKeys;
exports.shuffleArray = shuffleArray;
exports.validBid = validBid;
exports.validPlay = validPlay;
