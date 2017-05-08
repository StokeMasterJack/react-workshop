import Card from './Card';

function randomNumberBetween1and52() {
    return Math.floor(Math.random() * 52);
}

export default class Deck {
    constructor() {
        this.cards = [];
        for (let s = 1; s <= 4; s++) {
            for (let v = 1; v <= 13; v++) {
                this.cards.push(new Card(v, s));
            }
        }
    }

    take(){
        return this.cards.shift();
    }

    shuffle() {
        for (let i = 0; i < 10000; i++) {
            const i1 = randomNumberBetween1and52();
            const i2 = randomNumberBetween1and52();
            const c1 = this.cards[i1];
            const c2 = this.cards[i2];
            this.cards[i1] = c2;
            this.cards[i2] = c1;
        }
    }

    get size() {
        return this.cards.length;
    }
}