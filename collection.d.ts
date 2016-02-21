declare namespace Types {
    interface CountBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
    }

    interface GroupBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: T; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: any; };
    }

    interface ByBooleanPredicate {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ArrayPredicate<T, TIn>): boolean;
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ObjectPredicate<T, TIn>): boolean;
    }

    interface ByArrayPredicate {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ArrayPredicate<T, TIn>): T[];
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ObjectPredicate<T, TIn>): T[];
    }

    interface ResultPredicate {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ArrayPredicate<T, TIn>): T;
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ObjectPredicate<T, TIn>): T;
    }

    interface FlatMap {
        <T, TIn extends ArrayLike<T>, TResult>(collection: TIn, iteratee?: Iteratee<(value: T, index: number, collection: TIn) => TResult[]>): TResult[];
        <T, TIn extends _Obj<T>, TResult>(collection: TIn, iteratee?: Iteratee<(value: T, index: string, collection: TIn) => TResult[]>): TResult[];
    }

    interface ForEach {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: Iteratee<(value: T, index: number, collection: TIn) => boolean | void>): TIn;
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: Iteratee<(value: T, index: number, collection: TIn) => boolean | void>): TIn;
    }

    interface Includes {
        (collection: string, value: string, fromIndex?: number): boolean;
        <T, TIn extends ArrayLike<T>>(collection: TIn, value: T, fromIndex?: number): boolean;
        <T, TIn extends _Obj<T>>(collection: TIn, value: any, fromIndex?: number): boolean;
    }

    interface InvokeMap {
        <TResult>(collection: ArrayLike<any> | _Obj<any>, path: PathLocation | Function, ...args: any[]): TResult[];
    }

    interface KeyBy {
        <T>(collection: ArrayLike<T> | _Obj<T>, iteratee?: ValuePredicate<T>): { [index: string]: T; };
    }

    interface Map {
        <T, TIn extends ArrayLike<T>, TResult>(collection: TIn, iteratee?: Iteratee<(value: T, index: number, collection: TIn) => TResult>): TResult[];
        <T, TIn extends _Obj<T>, TResult>(collection: TIn, iteratee?: Iteratee<(value: T, index: string, collection: TIn) => TResult>): TResult[];
    }

    interface OrderBy {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    interface Partition {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ValuePredicate<T>): [T[], T[]];
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ValuePredicate<T>): [T[], T[]];
    }

    interface Reduce {
        <T, TIn extends ArrayLike<T>, TAcc>(collection: TIn, iteratee?: AccumulatorArrayPredicate<T, TIn, TAcc>): TAcc;
        <T, TIn extends _Obj<T>, TAcc>(collection: TIn, iteratee?: AccumulatorObjectPredicate<T, TIn, TAcc>): TAcc;
    }

    interface Sample {
        <T>(collection: ArrayLike<T> | _Obj<T>): T;
    }

    interface SampleSize {
        <T>(collection: ArrayLike<T> | _Obj<T>, n?: number): T[];
    }

    interface Shuffle {
        <T>(collection: ArrayLike<T> | _Obj<T>): T[];
    }

    interface Size {
        <T>(collection: ArrayLike<T> | _Obj<T>): number;
    }

    interface SortBy {
        <T, TIn extends ArrayLike<T>>(collection: TIn, iteratee?: ValuePredicate<T> | ValuePredicate<T>[]): T[];
        <T, TIn extends _Obj<T>>(collection: TIn, iteratee?: ValuePredicate<T> | ValuePredicate<T>[]): T[];
    }
}

interface Static {
    countBy: Types.CountBy;
    every: Types.ByBooleanPredicate;
    filter: Types.ByArrayPredicate;
    find: Types.ResultPredicate;
    findLast: Types.ResultPredicate;
    flatMap: Types.FlatMap;
    forEach: Types.ForEach;
    forEachRight: Types.ForEach;
    each: Types.ForEach;
    eachRight: Types.ForEach;
    keyBy: Types.KeyBy;
    groupBy: Types.GroupBy;
    includes: Types.Includes;
    invokeMap: Types.InvokeMap;
    map: Types.Map;
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