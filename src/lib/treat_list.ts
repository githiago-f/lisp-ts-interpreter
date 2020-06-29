import { ToChars } from './tokenize';
import { AsAtom } from './treat_atom';

export function AsList(s: string, list?: any): IList | IAtom {
    if(s.length == 0)
        throw new Error("Unexpected EOF while reading");

    const tokens = ToChars(s);
    
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
            return <IList> { value: list.filter((i: any) => i != undefined) };
        } else {
            return AsAtom(token);
        }
    }
}
