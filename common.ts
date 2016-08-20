namespace Types {
    export interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

   export type Iteratee = string | Object;
   export type PathLocation = string | string[];

   export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
   export type ArrayPredicate<T, TArray extends ArrayLike<T>> = (value: T, index: number, collection: TArray) => boolean;
   export type AccumulatorArrayPredicate<T, TArray extends ArrayLike<T>, TAcc> = (accumulator: TAcc, value: T, index: number, collection: TArray) => TAcc;

   export type ObjectPredicate<T, TObj extends _Obj<T>> = (value: T, index: string, collection: TObj) => boolean;
   export type AccumulatorObjectPredicate<T, TObj extends _Obj<T>, TAcc> = (accumulator: TAcc, value: T, index: string, collection: TObj) => TAcc;

   export type ValuePredicate<T, R> = (value: T) => R;
   export type BooleanPredicate<T> = (value: T) => boolean;
   export type AnySelector<T> = (value: T) => any;
   export type Comparator<T> = (arrVal: T, othVal: T) => boolean;
   export type ComparatorR<T, R> = (arrVal: T, othVal: R) => boolean;

   export namespace Wrap {
       export type ArrayPredicate<T> = (value: T, index: number) => boolean;
       export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: number) => TAcc;

       export type ObjectPredicate<T> = (value: T, index: string) => boolean;
       export type AccumulatorObjectPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: string) => TAcc;
    }
}
