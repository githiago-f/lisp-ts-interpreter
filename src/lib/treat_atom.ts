
export class Atom implements IAtom {
    value: string | number;
    constructor(val: string | number) {
        let value = val
        if(typeof value === 'string') {
            value = value.replace(/\"/g, '')
        }
        this.value = value
    }
}

export class Identifyer implements IIdentifyer {
    value: string;
    constructor(val: string) {
        this.value = val
    }
}

/**
 * @description esta função retorna tanto um Atom quanto um identificador - valores que podem ser processados pelo JS
 * @author @githiago-f
 */
export function AsAtom(s: string): IAtom | IIdentifyer {
    let str = s.trim();
    let val = parseFloat(str);
    const isString = str[0] === '"' && str[str.length - 1] === '"';
    return isNaN(val) ? 
        (isString ? new Atom(str) : new Identifyer(str) ) : 
        new Atom(val);
}
