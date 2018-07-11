const invalidBids = require('./invalid-bids');

test('should return an array of invalid bids', () => {
  const state = {
    activePlayer: 'a',
    dealer: 'a',
    players: [
      {cards: ['c2', 'c3', 'c4', 'c5', 'c6'], socket: {id: 'a'}},
      {cards: ['d2', 'd3', 'd4', 'd5', 'd6'], socket: {id: 'b'}, bid: 1},
      {cards: ['h2', 'h3', 'h4', 'h5', 'h6'], socket: {id: 'c'}, bid: 0},
      {cards: ['s2', 's3', 's4', 's5', 's6'], socket: {id: 'd'}, bid: 2},
    ],
  };

  expect(invalidBids(state)).toEqual([2]);
});

test('should return an array of invalid bids', () => {
  const state = {
    activePlayer: 'd',
    dealer: 'a',
    players: [
      {cards: ['c2', 'c3', 'c4', 'c5', 'c6'], socket: {id: 'a'}},
      {cards: ['d2', 'd3', 'd4', 'd5', 'd6'], socket: {id: 'b'}, bid: 1},
      {cards: ['h2', 'h3', 'h4', 'h5', 'h6'], socket: {id: 'c'}, bid: 0},
      {cards: ['s2', 's3', 's4', 's5', 's6'], socket: {id: 'd'}},
    ],
  };

  expect(invalidBids(state)).toEqual([]);
});
