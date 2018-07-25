import {getDealOrder} from './get-deal-order';
import {getFromCardsToDeal} from './get-from-cards-to-deal';

export function dealCards(nrOfCards, dealer, deck, players) {
  const cardsToDeal = deck.cards.slice(0, nrOfCards * players.length);
  const remainingCards = deck.cards.slice(nrOfCards * players.length);

  const newPlayers = players.map((player) => {
    const cards = getFromCardsToDeal(
      cardsToDeal,
      players.length,
      getDealOrder(dealer, player.socket.id, players)
    );

    return {...player, cards};
  });

  return {newDeck: {...deck, cards: remainingCards}, newPlayers};
}
