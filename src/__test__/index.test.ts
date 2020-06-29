import { ToChars, AsAtom, AsList, Atom, Identifyer } from './../index'

// this tests are related to Lisp's syntaxe
test('it should return an array string ["(", ""abc"", ")"]', () => {
    const actual = ToChars('("abc")');
    const expected = ['(', '"abc"', ')'];
    expect(actual).toEqual(expected);
});

test('it should return a atom', () => {
    const actual = AsAtom('"a"');
    const expected = 'a';
    expect(actual.value).toEqual(expected);
})

test('it\'s value should be a number', () => {
    const actual = AsAtom('1.02');
    const expected = 1.02;
    expect(actual.value).toBe(expected);
})

test('it should return a empty Array', ()=>{
    const actual = AsList('()')
    const expected = {value: []}
    expect(actual).toEqual(expected);
});

test('it should return a list with "abc" as element', () => {
    const actual = AsList('(+ "abc" "app")')
    const expected = {
        value: [
            new Identifyer('+'),
            new Atom('abc'),
            new Atom('app')
        ]
    }
    expect(actual).toEqual(expected)
})
