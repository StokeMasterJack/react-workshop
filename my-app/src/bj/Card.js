export default class Card {

    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    get valueName() {
        const v = this.value;
        if (v === 1) return 'Ace';
        if (v >= 2 && v <= 10) return String(v);
        if (v === 11) return 'Jack';
        if (v === 12) return 'Queen';
        if (v === 13) return 'King';
        throw Error('Bad value[' + v + ']');
    }

    get suitName() {
        const s = this.suit;
        if (s === 1) return 'Spades';
        if (s === 2) return 'Hearts';
        if (s === 3) return 'Clubs';
        if (s === 4) return 'Diamonds';
        throw Error('Bad suit[' + s + ']');
    }

    toString() {
        return this.valueName + " of " + this.suitName;
    }

    get points() {
        const v = this.value;
        if (v >= 1 && v <= 9) return v;
        if(v>=10 && v<=13) return 10;
        throw Error('Bad value[' + v + ']');
    }

}
