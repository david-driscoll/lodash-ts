namespace Types {
    export interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

    export type Property<T> = keyof T;
    export type Matches<T> = Pick<T, keyof T>;
    export type MatchesProperty<T> = [keyof T, T[keyof T]];
    export type PathLocation = string | string[];

    // export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
    export type ArrayPredicate<T> = (value: T, index: number, collection: T[]) => boolean;
    export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T[keyof T], index: number, collection: T[]) => TAcc;

    export type ObjectPredicate<T> = (value: T[keyof T], index: keyof T, collection: T) => boolean;
    export type AccumulatorObjectPredicate<T, TAcc> = (accumulator: TAcc, value: T[keyof T], index: keyof T, collection: T) => TAcc;

    export type ValuePredicate<T, R> = (value: T) => R;
    export type BooleanPredicate<T> = (value: T) => boolean;
    export type AnySelector<T> = (value: T) => any;
    export type Comparator<T> = (arrVal: T, othVal: T) => boolean;
    export type ComparatorR<T, R> = (arrVal: T, othVal: R) => boolean;

    export namespace Wrap {
        export type ArrayPredicate<T> = (value: T, index: number) => boolean;
        export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: number) => TAcc;

        export type ObjectPredicate<T> = (value: T[keyof T], index: keyof T) => boolean;
        export type AccumulatorObjectPredicate<T, TAcc> = (accumulator: TAcc, value: T[keyof T], index: keyof T) => TAcc;
    }
}
