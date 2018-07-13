module.exports = function invalidBids(state) {
  if (state.activePlayer !== state.dealer) {
    return [];
  }

  const nrOCards = state.players[0].cards.length;
  const currentBidTotal = state.players.reduce((acc, curr) => {
    return curr.hasOwnProperty('bid') && curr.bid && curr.bid >= 0 ?
      acc + curr.bid :
      acc + 0;
  }, 0);

  if (nrOCards >= currentBidTotal) {
    return [nrOCards - currentBidTotal];
  }

  return [];
};
