namespace Types {
    export interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

   export type Iteratee<T extends Function> = string | Object | T;
   export type PathLocation = string | string[];

   export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
   export type ArrayPredicate<T, TArray extends ArrayLike<T>> = Iteratee<(value: T, index: number, collection: TArray) => boolean>;
   export type AccumulatorArrayPredicate<T, TArray extends ArrayLike<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number, collection: TArray) => TAcc>;

   export type ObjectPredicate<T, TObj extends _Obj<T>> = Iteratee<(value: T, index: string, collection: TObj) => boolean>;
   export type AccumulatorObjectPredicate<T, TObj extends _Obj<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string, collection: TObj) => TAcc>;

   export type ValuePredicate<T> = Iteratee<(value: T) => string>;

   export namespace Wrap {
       export type ArrayPredicate<T> = Iteratee<(value: T, index: number) => boolean>;
       export type AccumulatorArrayPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number) => TAcc>;

       export type ObjectPredicate<T> = Iteratee<(value: T, index: string) => boolean>;
       export type AccumulatorObjectPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string) => TAcc>;
    }
}
