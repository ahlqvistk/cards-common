import {getPlayer} from './get-player';
import {getSuit} from './get-rank-suit';

export function validPlay(playedCard, state) {
  const currentPlayer = getPlayer(state.activePlayer, state.players);
  const currentPlayersHand = currentPlayer &&
    currentPlayer.hasOwnProperty('cards') ? currentPlayer.cards : [];
  const playedCardInHand = currentPlayersHand.includes(playedCard);

  // Only cards in hand can be played
  if (!playedCardInHand) {
    return false;
  }

  // If it's the leading players turn, any card on hand is allowed
  if (!state.leadingPlayer) {
    return true;
  }

  // Other players need to follow suit if possible
  const leadSuit = getSuit(
    getPlayer(state.leadingPlayer, state.players).playedCard
  );
  const playedSuit = getSuit(playedCard);
  const suitsOnHand = currentPlayersHand.map((card) => getSuit(card));

  if (playedSuit === leadSuit) {
    return true;
  }

  if (!suitsOnHand.includes(leadSuit)) {
    return true;
  }

  return false;
}
