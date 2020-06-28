function ToChars(s) {
    return Array.from(s);
}
function AsAtom(s) {
    let str = s.trim();
    let val = parseFloat(str);
    return isNaN(val) ?
        { value: str } :
        { value: val };
}

function AsList(s) {
    let x = 0, val = [];

    while (s.length > x) {
        if(s[x] === '(')
            

        x++;
    }

    return { value: val };
}

console.log(AsList('(abc 1 (2 3) 4 5)'))
