import Hand from './Hand';
import Deck from './Deck';

export default class Game {

    constructor() {
        this.playerHand = new Hand("Player");
        this.dealerHand = new Hand("Dealer");
        this.deck = new Deck();
        this.deck.shuffle();
        this.stayFlag = false;
        this.deal();
    }

    deal() {
        this.stayFlag = false;
        const c1 = this.deck.take();
        const c2 = this.deck.take();
        const c3 = this.deck.take();
        const c4 = this.deck.take();

        this.playerHand.clear();
        this.playerHand.addCard(c1);
        this.playerHand.addCard(c2);

        this.dealerHand.clear();
        this.dealerHand.addCard(c3);
        this.dealerHand.addCard(c4);
    }

    hitPlayer() {
        const c1 = this.deck.take();
        this.playerHand.addCard(c1);
    }

    stay() {
        this.stayFlag = true;
        while (this.dealerHand.points < 17) {
            const c1 = this.deck.take();
            this.dealerHand.addCard(c1);
        }
    }

    get msg() {
        if (!this.stayFlag) {
            if (this.playerHand.points === 21) return "Player Wins!";
            if (this.playerHand.points > 21) return "Dealer Wins!";
            if (this.playerHand.points < 21) {
                return "Press Hit or Stay";
            }
        } else {
            if (this.playerHand.points >= 21) throw Error();
            if (this.dealerHand.points > 21) return "Player Wins!";
            if (this.playerHand.points >= this.dealerHand.points) {
                return "Player Wins!";
            } else {
                return "Dealer Wins!";
            }
        }
    }

    get active() {
        if (!this.stayFlag) {
            if (this.playerHand.points === 21) return false;
            if (this.playerHand.points > 21) return false;
            if (this.playerHand.points < 21) {
                return true;
            }
            throw Error();
        } else {
            return false;
        }
    }
}