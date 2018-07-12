module.exports = function getPlayerIndexFromId(id, players) {
  return players
    .map((player, index) => ({id: player.socket.id, index}))
    .filter((player) => player.id === id)[0].index;
};
