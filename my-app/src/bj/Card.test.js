import Card from './Card';

it('test card', () => {
    const c1 = new Card(1, 1);
    const c2 = new Card(13, 4);
    expect(c1.toString()).toEqual('Ace of Spades');
    expect(c1.points).toEqual(1);
    expect(c2.toString()).toEqual('King of Diamonds');
    expect(c2.points).toEqual(10);
});