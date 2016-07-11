namespace Types {
    export interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

   export type Iteratee = string | Object;
   export type PathLocation = string | string[];

   export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
   /* Iteratee */ export type ArrayPredicate<T, TArray extends ArrayLike<T>> = (value: T, index: number, collection: TArray) => boolean;
   /* Iteratee */ export type AccumulatorArrayPredicate<T, TArray extends ArrayLike<T>, TAcc> = (accumulator: TAcc, value: T, index: number, collection: TArray) => TAcc;

   /* Iteratee */ export type ObjectPredicate<T, TObj extends _Obj<T>> = (value: T, index: string, collection: TObj) => boolean;
   /* Iteratee */ export type AccumulatorObjectPredicate<T, TObj extends _Obj<T>, TAcc> = (accumulator: TAcc, value: T, index: string, collection: TObj) => TAcc;

   /* Iteratee */ export type ValuePredicate<T, R> = (value: T) => R;
   /* Iteratee */ export type BooleanPredicate<T> = (value: T) => boolean;

   export namespace Wrap {
       /* Iteratee */ export type ArrayPredicate<T> = (value: T, index: number) => boolean;
       /* Iteratee */ export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: number) => TAcc;

       /* Iteratee */ export type ObjectPredicate<T> = (value: T, index: string) => boolean;
       /* Iteratee */ export type AccumulatorObjectPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: string) => TAcc;
    }
}
