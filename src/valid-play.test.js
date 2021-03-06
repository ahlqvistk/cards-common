import {validPlay} from './valid-play';

test('first player can play any card on hand', () => {
  const state = {
    activePlayer: 'a',
    dealer: 'd',
    leadingPlayer: '',
    players: [
      {cards: ['c2', 'c3', 'c4'], socket: {id: 'a'}},
      {cards: ['d2', 'd3', 'd4'], socket: {id: 'b'}},
      {cards: ['h2', 'h3', 'h4'], socket: {id: 'c'}},
      {cards: ['s2', 's3', 's4'], socket: {id: 'd'}},
    ],
  };
  expect(validPlay('c2', state)).toBe(true);
  expect(validPlay('c3', state)).toBe(true);
  expect(validPlay('c4', state)).toBe(true);
  expect(validPlay('h6', state)).toBe(false);
  expect(validPlay('sA', state)).toBe(false);
});

test('other players need to follow suit if possible', () => {
  const state = {
    activePlayer: 'c',
    dealer: 'a',
    leadingPlayer: 'b',
    players: [
      {cards: ['c2', 'd2', 'h2'], socket: {id: 'a'}},
      {cards: ['d3', 'h3'], playedCard: 'c3', socket: {id: 'b'}},
      {cards: ['c4', 'd4', 'h4'], socket: {id: 'c'}},
      {cards: ['s5', 'd5', 'h5'], socket: {id: 'd'}},
    ],
  };
  expect(validPlay('c4', state)).toBe(true);
  expect(validPlay('d4', state)).toBe(false);
  expect(validPlay('h4', state)).toBe(false);
  expect(validPlay('sA', state)).toBe(false);
  expect(validPlay('c2', state)).toBe(false);
});

test('players that can\'t follow suit can play any card on hand', () => {
  const state = {
    activePlayer: 'd',
    dealer: 'a',
    leadingPlayer: 'b',
    players: [
      {cards: ['c2', 'd2', 'h2'], socket: {id: 'a'}},
      {cards: ['d3', 'h3'], playedCard: 'c3', socket: {id: 'b'}},
      {cards: ['d4', 'h4'], playedCard: 'c4', socket: {id: 'c'}},
      {cards: ['s5', 'd5', 'h5'], socket: {id: 'd'}},
    ],
  };
  expect(validPlay('s5', state)).toBe(true);
  expect(validPlay('d5', state)).toBe(true);
  expect(validPlay('h5', state)).toBe(true);
  expect(validPlay('sA', state)).toBe(false);
  expect(validPlay('c2', state)).toBe(false);
  expect(validPlay('c3', state)).toBe(false);
});

test('last player can play it\'s card', () => {
  const state = {
    activePlayer: 'a',
    dealer: 'a',
    leadingPlayer: 'b',
    players: [
      {cards: ['c2'], socket: {id: 'a'}},
      {cards: [], playedCard: 'd3', socket: {id: 'b'}},
      {cards: [], playedCard: 'h4', socket: {id: 'c'}},
      {cards: [], playedCard: 's4', socket: {id: 'd'}},
    ],
  };
  expect(validPlay('c2', state)).toBe(true);
  expect(validPlay('c3', state)).toBe(false);
});
