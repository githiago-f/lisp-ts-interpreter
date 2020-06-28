import { ToChars, AsAtom, Atom, AsList, List } from './../lang'

// this tests are related to Lisp's syntaxe
test('it should return an array string ["(", ""abc"", ")"]', () => {
    const actual = ToChars('("abc")');
    const expected = ['(', '"abc"', ')'];
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

test('it should return a empty Array', ()=>{
    const actual = AsList('()')
    const expected = <List> {
        value: []
    }
    expect(actual).toEqual(expected);
});

test('it should return a list with "abc" as element', () => {
    const actual = AsList('("abc")')
    const expected = <List> {
        value: [
            <Atom> {
                value: '"abc"'
            }
        ]
    }
    expect(actual).toEqual(expected)
})
