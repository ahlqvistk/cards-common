const validBid = require('./valid-bid');

test('should return true or false for bids', () => {
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

  expect(validBid(0, state)).toBe(true);
  expect(validBid(1, state)).toBe(true);
  expect(validBid(5, state)).toBe(true);
  expect(validBid(-2, state)).toBe(false);
  expect(validBid(2, state)).toBe(false);
  expect(validBid(6, state)).toBe(false);
  expect(validBid(10, state)).toBe(false);
});

test('should handle -1 bids', () => {
  const state = {
    activePlayer: 'a',
    dealer: 'a',
    players: [
      {cards: ['c2', 'c3', 'c4', 'c5', 'c6'], socket: {id: 'a'}, bid: -1},
      {cards: ['d2', 'd3', 'd4', 'd5', 'd6'], socket: {id: 'b'}, bid: 2},
      {cards: ['h2', 'h3', 'h4', 'h5', 'h6'], socket: {id: 'c'}, bid: 2},
      {cards: ['s2', 's3', 's4', 's5', 's6'], socket: {id: 'd'}, bid: 1},
    ],
  };

  expect(validBid(0, state)).toBe(false);
  expect(validBid(6, state)).toBe(false);
  expect(validBid(1, state)).toBe(true);
  expect(validBid(5, state)).toBe(true);
});
