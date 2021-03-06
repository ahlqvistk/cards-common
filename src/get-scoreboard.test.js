import {getScoreboard} from './get-scoreboard';

const players = [
  {
    points: [0, 10, 13, 0, 2, 3],
    name: 'a',
  },
  {
    points: [1, 1, 3, 10, 12, 5],
    name: 'b',
  },
  {
    points: [0, 2, 2, 11, 12, 1],
    name: 'c',
  },
  {
    points: [5, 1, 0, 2, 2, 1],
    name: 'd',
  },
];

const expected = {
  players: ['a', 'b', 'c', 'd'],
  points: [
    [0, 1, 0, 5],
    [10, 1, 2, 1],
    [13, 3, 2, 0],
    [0, 10, 11, 2],
    [2, 12, 12, 2],
    [3, 5, 1, 1],
  ],
  totals: [28, 32, 28, 11],
};

test('should return a scoreboard object', () => {
  expect(getScoreboard(players)).toEqual(expected);
});
