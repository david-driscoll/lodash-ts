namespace Types {
    export interface CountBy {
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>): { [index: string]: number; };
        <T, R>(collection: _Obj<T>, iteratee: ValuePredicate<T, R>): { [index: string]: number; };
        <T, R>(collection: any, iteratee: ValuePredicate<T, R>): { [index: string]: number; };
    }

    export interface GroupBy {
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>): { [index: string]: T[]; };
        <T, R>(collection: _Obj<T>, iteratee: ValuePredicate<T, R>): { [index: string]: T[]; };
        <T, R>(collection: any, iteratee: ValuePredicate<T, R>): { [index: string]: T[]; };
    }

    export interface ByBooleanPredicate {
        <T>(collection: ArrayLike<T>): boolean;
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T, ArrayLike<T>> | Iteratee): boolean;
        <T>(collection: _Obj<T>): boolean;
        <T>(collection: _Obj<T>, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee): boolean;
        <T>(collection: any): boolean;
        <T>(collection: any, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T, ArrayLike<T>> | Iteratee): T[];
        <T>(collection: _Obj<T>, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee): T[];
        <T>(collection: any, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee): T[];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T, ArrayLike<T>> | Iteratee, fromIndex?: number): T;
        <T>(collection: _Obj<T>, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee, fromIndex?: number): T;
        <T>(collection: any, iteratee: ObjectPredicate<T, _Obj<T>> | Iteratee, fromIndex?: number): T;
    }

    export type FlatMapIteratorArray<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult[];
    export type FlatMapIteratorObject<T, TResult> = (value: T, index: string, collection: _Obj<T>) => TResult[];

    export interface FlatMap {
        <T, TResult>(collection: ArrayLike<T>, iteratee: FlatMapIteratorArray<T, TResult>): TResult[];
        <TResult>(collection: ArrayLike<any>, iteratee: Iteratee): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee: FlatMapIteratorObject<T, TResult>): TResult[];
        <TResult>(collection: _Obj<any>, iteratee: Iteratee): TResult[];
        <T, TResult>(collection: any, iteratee: FlatMapIteratorObject<T, TResult>): TResult[];
        <TResult>(collection: any, iteratee: Iteratee): TResult[];
    }

    export interface FlatMapDepth {
        <T, TResult>(collection: ArrayLike<T>, iteratee: FlatMapIteratorArray<T, TResult>, depth?: number): TResult[];
        <T, TResult>(collection: ArrayLike<T>, iteratee: Iteratee, depth?: number): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee: FlatMapIteratorObject<T, TResult>, depth?: number): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee: Iteratee, depth?: number): TResult[];
        <T, TResult>(collection: any, iteratee: FlatMapIteratorObject<T, TResult>, depth?: number): TResult[];
        <T, TResult>(collection: any, iteratee: Iteratee, depth?: number): TResult[];
    }

    export type ForEachIterator<T> = (value: T, index: number, collection: Array<T>) => boolean | void;

    export interface ForEach {
        <T>(collection: Array<T>, iteratee: ForEachIterator<T>): Array<T>;
        <T>(collection: ArrayLike<T>, iteratee: ForEachIterator<T>): ArrayLike<T>;
        <T>(collection: _Obj<T>, iteratee: ForEachIterator<T>): _Obj<T>;
        <T>(collection: any, iteratee: ForEachIterator<T>): _Obj<T>;
    }

    export interface Includes {
        (collection: string, value: string, fromIndex?: number): boolean;
        <T>(collection: ArrayLike<T>, value: T, fromIndex?: number): boolean;
        <T>(collection: _Obj<T>, value: any, fromIndex?: number): boolean;
        <T>(collection: any, value: any, fromIndex?: number): boolean;
    }

    export interface InvokeMap {
        <TResult>(collection: ArrayLike<any> | _Obj<any>, path: PathLocation | Function, ...args: any[]): TResult[];
    }

    export interface KeyBy {
        <T, R>(collection: ArrayLike<T> | _Obj<T>, iteratee: ValuePredicate<T, R>): { [index: string]: T; };
    }

    export type MapIteratorArray<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult;
    export type MapIteratorObject<T, TResult> = (value: T, index: number, collection: _Obj<T>) => TResult;

    export interface _Map {
        <T, TResult>(collection: ArrayLike<T>, iteratee: MapIteratorArray<T, TResult>): TResult[];
        <T, TResult>(collection: ArrayLike<T>, iteratee: Iteratee): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee: MapIteratorObject<T, TResult>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee: Iteratee): TResult[];
        <T, TResult>(collection: any, iteratee: MapIteratorObject<T, TResult>): TResult[];
        <T, TResult>(collection: any, iteratee: Iteratee): TResult[];
    }

    export interface OrderBy {
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R> | ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: _Obj<T>, iteratee: ValuePredicate<T, R> | ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: any, iteratee: ValuePredicate<T, R> | ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    export interface Partition {
        <T>(collection: ArrayLike<T>, iteratee: BooleanPredicate<T>): [T[], T[]];
        <T>(collection: _Obj<T>, iteratee: BooleanPredicate<T>): [T[], T[]];
        <T>(collection: any, iteratee: BooleanPredicate<T>): [T[], T[]];
    }

    export interface Reduce {
        <T, TAcc>(collection: ArrayLike<T>, iteratee: AccumulatorArrayPredicate<T, ArrayLike<T>, TAcc> | Iteratee, acc?: TAcc): TAcc;
        <T, TAcc>(collection: _Obj<T>, iteratee: AccumulatorObjectPredicate<T, _Obj<T>, TAcc> | Iteratee, acc?: TAcc): TAcc;
        <T, TAcc>(collection: any, iteratee: AccumulatorObjectPredicate<T, _Obj<T>, TAcc> | Iteratee, acc?: TAcc): TAcc;
    }

    export interface Sample {
        <T>(collection: ArrayLike<T> | _Obj<T>): T;
    }

    export interface SampleSize {
        <T>(collection: ArrayLike<T> | _Obj<T>, n?: number): T[];
    }

    export interface Shuffle {
        <T>(collection: ArrayLike<T> | _Obj<T>): T[];
    }

    export interface Size {
        <T>(collection: ArrayLike<T> | _Obj<T>): number;
    }

    export interface SortBy {
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>[]): T[];
        <T, R>(collection: ArrayLike<T>, ...iteratees: ValuePredicate<T, R>[]): T[];
        <T, R>(collection: _Obj<T>, iteratee: ValuePredicate<T, R>[]): T[];
        <T, R>(collection: _Obj<T>, ...iteratees: ValuePredicate<T, R>[]): T[];
        <T, R>(collection: any, iteratee: ValuePredicate<T, R>[]): T[];
        <T, R>(collection: any, ...iteratees: ValuePredicate<T, R>[]): T[];
    }
}

interface IStatic {
    countBy: Types.CountBy;
    each: Types.ForEach;
    eachRight: Types.ForEach;
    every: Types.ByBooleanPredicate;
    filter: Types.ByArrayPredicate;
    find: Types.FindPredicate;
    findLast: Types.FindPredicate;
    flatMap: Types.FlatMap;
    flatMapDeep: Types.FlatMap;
    flatMapDepth: Types.FlatMapDepth;
    forEach: Types.ForEach;
    forEachRight: Types.ForEach;
    groupBy: Types.GroupBy;
    includes: Types.Includes;
    invokeMap: Types.InvokeMap;
    keyBy: Types.KeyBy;
    map: Types._Map;
    orderBy: Types.OrderBy;
    partition: Types.Partition;
    reduce: Types.Reduce;
    reduceRight: Types.Reduce;
    reject: Types.ByArrayPredicate;
    sample: Types.Sample;
    sampleSize: Types.SampleSize;
    shuffle: Types.Shuffle;
    size: Types.Size;
    some: Types.ByBooleanPredicate;
    sortBy: Types.SortBy;
}
