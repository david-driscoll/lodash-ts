namespace Types {
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

namespace Static {
    var countBy: Types.CountBy;
    var every: Types.ByBooleanPredicate;
    var filter: Types.ByArrayPredicate;
    var find: Types.ResultPredicate;
    var findLast: Types.ResultPredicate;
    var flatMap: Types.FlatMap;
    var forEach: Types.ForEach;
    var forEachRight: Types.ForEach;
    var each: Types.ForEach;
    var eachRight: Types.ForEach;
    var keyBy: Types.KeyBy;
    var groupBy: Types.GroupBy;
    var includes: Types.Includes;
    var invokeMap: Types.InvokeMap;
    var map: Types.Map;
    var orderBy: Types.OrderBy;
    var partition: Types.Partition;
    var reduce: Types.Reduce;
    var reduceRight: Types.Reduce;
    var reject: Types.ByArrayPredicate;
    var sample: Types.Sample;
    var sampleSize: Types.SampleSize;
    var shuffle: Types.Shuffle;
    var size: Types.Size;
    var some: Types.ByBooleanPredicate;
    var sortBy: Types.SortBy;
}
