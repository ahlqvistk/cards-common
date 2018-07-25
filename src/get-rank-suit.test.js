import {
  getRank,
  getSuit,
  getUnicodeSuit,
  getValue,
} from './get-rank-suit';

test('should return the right rank', () => {
  expect(getRank('c7')).toEqual('7');
  expect(getRank('sA')).toEqual('A');
  expect(getRank('h4')).toEqual('4');
  expect(getRank('d10')).toEqual('10');
});

test('should return the right suit', () => {
  expect(getSuit('c7')).toEqual('clubs');
  expect(getSuit('sA')).toEqual('spades');
  expect(getSuit('h4')).toEqual('hearts');
  expect(getSuit('d10')).toEqual('diamonds');
});

test('should return the right unicode suit', () => {
  expect(getUnicodeSuit('c7')).toEqual('\u2663');
  expect(getUnicodeSuit('sA')).toEqual('\u2660');
  expect(getUnicodeSuit('h4')).toEqual('\u2665');
  expect(getUnicodeSuit('d10')).toEqual('\u2666');
});

test('should return the right value', () => {
  expect(getValue('c2')).toBe(2);
  expect(getValue('d5')).toBe(5);
  expect(getValue('h10')).toBe(10);
  expect(getValue('sJ')).toBe(11);
  expect(getValue('cQ')).toBe(12);
  expect(getValue('cK')).toBe(13);
  expect(getValue('cA')).toBe(14);
});
