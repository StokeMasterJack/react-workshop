import Card from './Card';
import Hand from './Hand';

it('test Hand', () => {
    const h = new Hand();
    expect(h.points).toEqual(0);
    expect(h.msg).toEqual("0 Points");
    
    h.addCard(new Card(1, 1));
    expect(h.points).toEqual(1);
    expect(h.msg).toEqual("1 Points");
    
    h.addCard(new Card(13, 4));
    expect(h.points).toEqual(11);
    expect(h.msg).toEqual("11 Points");

    h.addCard(new Card(10, 4));
    expect(h.points).toEqual(21);
    expect(h.msg).toEqual("Black Jack!");

    h.addCard(new Card(10, 3));
    expect(h.points).toEqual(31);
    expect(h.msg).toEqual("Bust!");
});