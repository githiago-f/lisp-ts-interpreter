export interface Atom {
    value: string | number;
}

export interface List {
    value: Atom[] | List;
}

export function ToChars(s: string): string[] {
    return s
        .replace(/\(/g, ' ( ')
        .replace(/\)/g, ' ) ')
        .trim()
        .split(/\s+/);
}

export function AsAtom(s: string): Atom {
    let str = s.trim()
    let val = parseFloat(str)
    const isString = str[0] === '"' && str[str.length - 1] === '"'
    return isNaN(val) ? 
        <Atom> { value: str } : 
        <Atom> { value: val };
}

export function AsList(s: string, list?: any): List | Atom {
    if(s.length == 0)
        throw new Error("Unexpected EOF while reading");

    const tokens = ToChars(s);
    
    // remove first and return it
    const token = tokens.shift()

    if(list == undefined) {
        return AsList(s, []);
    } else {
        if(token === '('){
            while(tokens[0] !== ')') {
                const val = AsList(tokens.join(' '), list)
                list.push(val)
                tokens.shift()
            }
            return <List> { value: list.filter((i: any) => i != undefined) };
        } else {
            return AsAtom(token);
        }
    }
}

export function RunTime(s: string) {}
