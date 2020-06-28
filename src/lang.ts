export interface Atom {
    value: string | number;
}

export interface List {
    value: Atom[] | List;
}

export function ToChars(s: string) {
    return Array.from(s);
}

export function AsAtom(s: string) {
    let str = s.trim()
    let val = parseFloat(str)
    return isNaN(val) ? 
        <Atom> { value: str } : 
        <Atom> { value: val };
}

export function AsList(s: string): List {
    const element = []
    const val = ToChars(s.trim());
    return <List>{value: element};
}
