import Card from './Card';
import Hand from './Hand';
import Deck from './Deck';
import Game from './Game';

it('test Game', () => {
    const g = new Game();
    expect(g.playerHand.size).toEqual(2);
    expect(g.dealerHand.size).toEqual(2);
    expect(g.deck.size).toEqual(48);
    expect(g.msg).toEqual("Press Hit or Stay");

    g.hitPlayer();
    expect(g.playerHand.size).toEqual(3);
    expect(g.dealerHand.size).toEqual(2);
    expect(g.deck.size).toEqual(47);

    g.stay();
    expect(g.playerHand.size).toEqual(3);
    expect(g.dealerHand.size).toBeGreaterThanOrEqual(2);
    expect(g.deck.size).toBeLessThanOrEqual(47);

});

