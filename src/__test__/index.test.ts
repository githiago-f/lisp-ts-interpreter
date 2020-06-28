import { ToChars, AsAtom, Atom, AsList, List } from './../lang'

test('it should return abc as an array char', () => {
    const actual = ToChars('abc');
    const expected = ['a', 'b', 'c'];
    expect(actual).toEqual(expected);
});

test('it should return a atom', () => {
    const actual = AsAtom('a');
    const expected = <Atom> { value: 'a' };
    expect(actual).toEqual(expected);
})

test('it\'s value should be a number', () => {
    const actual = AsAtom('1');
    const expected = 1;
    expect(actual.value).toBe(expected);
})

test('it should return a empty List', ()=>{
    const actual = AsList('(1 2 3)')
    const expected = <List> {
        value: []
    }
});
