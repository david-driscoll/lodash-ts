declare namespace Types {
    interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

    type Iteratee<T extends Function> = string | Object | T;
    type PathLocation = string | string[];

    type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
    type ArrayPredicate<T, TArray extends ArrayLike<T>> = Iteratee<(value: T, index: number, collection: TArray) => boolean>;
    type AccumulatorArrayPredicate<T, TArray extends ArrayLike<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number, collection: TArray) => TAcc>;

    type ObjectPredicate<T, TObj extends _Obj<T>> = Iteratee<(value: T, index: string, collection: TObj) => boolean>;
    type AccumulatorObjectPredicate<T, TObj extends _Obj<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string, collection: TObj) => TAcc>;

    type ValuePredicate<T> = Iteratee<(value: T) => string>;

    namespace Wrap {
        type ArrayPredicate<T> = Iteratee<(value: T, index: number) => boolean>;
        type AccumulatorArrayPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number) => TAcc>;

        type ObjectPredicate<T> = Iteratee<(value: T, index: string) => boolean>;
        type AccumulatorObjectPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string) => TAcc>;
    }
}
