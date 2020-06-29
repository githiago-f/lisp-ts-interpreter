interface IAtom {
    value: string | number;
}

interface IList {
    value: IAtom[] | IList;
}

interface IIdentifyer {
    value: string;
}
