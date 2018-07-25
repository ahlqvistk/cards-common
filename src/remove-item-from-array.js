import deepEqual from 'deep-equal';

export function removeItemFromArray(item, arr) {
  return arr.filter((x) => !deepEqual(x, item));
}
