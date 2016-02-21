namespace Types {
    interface CountBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
        <T>(collection: any, iteratee: ValuePredicate<T>): { [index: string]: number; };
    }

    interface GroupBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
        <T>(collection: any, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
    }

    interface ByBooleanPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): boolean;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
    }

    interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): T[];
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
    }

    interface ResultPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): T;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): T;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): T;
    }

    interface FlatMap {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => TResult[]>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>): TResult[];
    }

    interface ForEach {
        <T>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => boolean | void>): ArrayLike<T>;
        <T>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
        <T>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
    }

    interface Includes {
        (collection: string, value: string, fromIndex?: number): boolean;
        <T>(collection: ArrayLike<T>, value: T, fromIndex?: number): boolean;
        <T>(collection: _Obj<T>, value: any, fromIndex?: number): boolean;
        <T>(collection: any, value: any, fromIndex?: number): boolean;
    }

    interface InvokeMap {
        <TResult>(collection: ArrayLike<any> | _Obj<any>, path: PathLocation | Function, ...args: any[]): TResult[];
    }

    interface KeyBy {
        <T>(collection: ArrayLike<T> | _Obj<T>, iteratee?: ValuePredicate<T>): { [index: string]: T; };
    }

    interface Map {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => TResult>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): TResult[];
    }

    interface OrderBy {
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: any, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    interface Partition {
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T>): [T[], T[]];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T>): [T[], T[]];
        <T>(collection: any, iteratee?: ValuePredicate<T>): [T[], T[]];
    }

    interface Reduce {
        <T, TAcc>(collection: ArrayLike<T>, iteratee?: AccumulatorArrayPredicate<T, ArrayLike<T>, TAcc>): TAcc;
        <T, TAcc>(collection: _Obj<T>, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>): TAcc;
        <T, TAcc>(collection: any, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>): TAcc;
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
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[]): T[];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[]): T[];
        <T>(collection: any, iteratee?: ValuePredicate<T> | ValuePredicate<T>[]): T[];
    }
}

interface IStatic {
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
