const getPlayerIndexFromId = require('./get-player-index-from-id');

const players = [
  {socket: {id: 'a'}},
  {socket: {id: 'b'}},
  {socket: {id: 'c'}},
  {socket: {id: 'd'}},
];

test('should return correct index', () => {
  expect(getPlayerIndexFromId('a', players)).toBe(0);
  expect(getPlayerIndexFromId('b', players)).toBe(1);
  expect(getPlayerIndexFromId('c', players)).toBe(2);
  expect(getPlayerIndexFromId('d', players)).toBe(3);
});
