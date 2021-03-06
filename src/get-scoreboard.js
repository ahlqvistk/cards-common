export function getScoreboard(players) {
  const playerNames = players.map((player) => player.name);
  const points = players.map((player) => player.points);
  const roundPoints = points[0].map((col, i) => points.map((row) => row[i]));
  const totals = points.map((playerPoints) => (
    playerPoints.reduce((acc, cur) => acc + cur))
  );

  return {players: playerNames, points: roundPoints, totals};
}
