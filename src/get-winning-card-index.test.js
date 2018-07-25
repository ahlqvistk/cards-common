import {getWinningCardIndex} from './get-winning-card-index';

test('should return correct index', () => {
  expect(getWinningCardIndex('s5', 'd3', ['s5', 's7', 'c2', 'hA'])).toBe(1);
  expect(getWinningCardIndex('s5', 'd3', ['s5', 's7', 'd2', 'hA'])).toBe(2);
  expect(getWinningCardIndex('hA', 'd3', ['hQ', 'hK', 'c2', 'hA'])).toBe(3);
  expect(getWinningCardIndex('h5', 'h3', ['h10', 'h5', 'h2'])).toBe(0);
  expect(getWinningCardIndex('h5', 'cA', ['h10', 'c5', 'dA', 'sA'])).toBe(1);
  expect(getWinningCardIndex('c8', 'sA', ['s2', 'c10', 'cJ', 'cA'])).toBe(0);
});
