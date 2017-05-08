export default class Hand {

    constructor(name) {
        this.cards = [];
        this.name = name ? name : "Player";
    }

    addCard(card) {
        this.cards.push(card);
    }

    clear() {
        this.cards = [];
    }

    get points() {
        return this.cards.reduce((prev, curr) => prev + curr.points, 0);
    }

    get size() {
        return this.cards.length;
    }

    get msg() {
        if (this.points > 21) return "Bust!";
        if (this.points === 21) return "Black Jack!";
        return this.points + " Points";
    }

}