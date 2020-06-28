export function ToChars(s) {
    return Array.from(s);
}
export function AsAtom(s) {
    let str = s.trim();
    let val = parseFloat(str);
    return isNaN(val) ?
        { value: str } :
        { value: val };
}
export function AsList(s) {
    const element = [];
    const val = ToChars(s.trim());
    return { value: element };
}

console.log(AsList('(abc 1 (2 3) 4 5)'))