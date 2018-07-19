module.exports = function getScoreboard(players) {
  const playerIds = players.map((player) => player.socket.id);
  const points = players.map((player) => player.points);
  const roundPoints = points[0].map((col, i) => points.map((row) => row[i]));

  return {players: playerIds, points: roundPoints};
};
