namespace Types {
    interface ArrayPassThrough {
        <T>(array: ArrayLike<T>): T[];
    }

    interface ArrayArgs {
        <T>(array: ArrayLike<T>, ...args: T[]): T[];
    }

    interface ArrayArrayArg {
        <T>(array: ArrayLike<T>, args: ArrayLike<T>): T[];
    }

    interface ArrayValueThrough {
        <T>(array: ArrayLike<T>): T;
    }

    interface Chunk {
        <T>(array: ArrayLike<T>, size?: number): T[][];
    }

    interface Concat {
        <T>(array: ArrayLike<T>, ...items: (T | T[])[]): T[];
    }

    interface Difference {
        <T>(array: ArrayLike<T>, ...values: ArrayLike<T>[]): T[];
    }

    interface DifferenceBy {
        <T>(array: ArrayLike<T>, values?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T> | Iteratee<(value: T) => any>)[]): T[];
    }

    interface DifferenceWith {
        <T>(array: ArrayLike<T>, values?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: ((value: T) => any) | string): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T> | ((arrVal: T, othVal: T) => boolean))[]): T[];
    }

    interface Drop {
        <T>(array: ArrayLike<T>, num?: number): T[];
    }

    interface DropWhile {
        <T, TIn extends ArrayLike<T>>(array: TIn, predicate?: ArrayPredicate<T, TIn>): T[];
    }

    interface Flatten {
        <T>(array: ArrayLike<T | ArrayLike<T>>): T[];
        <T>(array: RecursiveArrayLike<T>): RecursiveArray<T>;
        <TResult>(array: ArrayLike<any>): TResult[];
    }

    interface FlattenDeep {
        <T>(array: ArrayLike<RecursiveArrayLike<T>>): T[];
    }

    interface FlattenDepth {
        <T>(array: ArrayLike<any>, depth?: number): T[];
    }

    interface FromPairs {
        <T>(array: ArrayLike<[number, T]>): { [index: number]: T; };
        <T>(array: ArrayLike<[any, T]>): { [index: string]: T; };
    }

    interface Join {
        <T>(array: ArrayLike<T>, separator?: string): string;
    }

    interface Fill {
        <T, TIn extends ArrayLike<T>>(array: TIn, value: T, start?: number, end?: number): TIn;
    }

    interface FindIndex {
        <T, TIn extends ArrayLike<T>>(array: TIn, predicate?: ArrayPredicate<T, TIn>): number;
    }

    interface IndexOf {
        <T>(array: ArrayLike<T>, value: T, fromIndex?: number): number;
    }

    interface PullAll {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    interface PullAt {
        <T>(array: ArrayLike<T>, ...indexes: (number | ArrayLike<number>)[]): T[];
    }

    interface PullAllBy {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    interface Remove {
        <T, TIn extends ArrayLike<T>>(array: TIn, predicate?: ArrayPredicate<T, TIn>): TIn;
    }

    interface Slice {
        <T>(array: ArrayLike<T>, start?: number, end?: number): T[];
    }

    interface SortedIndex {
        <T>(array: ArrayLike<T>, value: T): number;
    }

    interface SortedIndexBy {
        <T>(array: ArrayLike<T>, value: T, predicate?: ValuePredicate<T>): number;
    }

    interface UniqBy {
        <T>(array: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    interface UniqWith {
        <T>(array: ArrayLike<T>, comparator?: (valueA: T, valueB: T) => boolean): T[];
    }

    interface Zip {
        <T>(t: ArrayLike<T>): [T][];
        <T, T2>(t: ArrayLike<T>, t2: ArrayLike<T2>): [T, T2][];
        <T, T2, T3>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>): [T, T2, T3][];
        <T, T2, T3, T4>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>): [T, T2, T3, T4][];
        <T, T2, T3, T4, T5>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, t5: ArrayLike<T5>): [T, T2, T3, T4, T5][];
        <TResult>(...arrays: ArrayLike<any>[]): TResult[];
    }

    interface Unzip {
        <T>(...arrays: [T][]): [T[]];
        <T, T2>(...arrays: [T, T2][]): [T[], T2[]];
        <T, T2, T3>(...arrays: [T, T2, T3][]): [T[], T2[], T3[]];
        <T, T2, T3, T4>(...arrays: [T, T2, T3, T4][]): [T[], T2[], T3[], T4[]];
        <T, T2, T3, T4, T5>(...arrays: [T, T2, T3, T4, T5][]): [T[], T2[], T3[], T4[], T5[]];
        <TResult>(...arrays: ArrayLike<any>[]): TResult[];
    }

    interface ZipWith {
        <T, TResult>(t: ArrayLike<T>, predicate?: Iteratee<(t: T) => TResult>): TResult[];
        <T, T2, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, predicate?: Iteratee<(t: T, t2: T2) => TResult>): TResult[];
        <T, T2, T3, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, predicate?: Iteratee<(t: T, t2: T2, t3: T3) => TResult>): TResult[];
        <T, T2, T3, T4, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, predicate?: Iteratee<(t: T, t2: T2, t3: T3, t4: T4) => TResult>): TResult[];
        <T, T2, T3, T4, T5, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, t5: ArrayLike<T5>, predicate?: Iteratee<(t: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult>): TResult[];
        <TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): TResult[];
    }

    interface UnzipWith {
        <T, TResult>(...arrays: ([T] | Iteratee<(t: T) => TResult>)[]): TResult[];
        <T, T2, TResult>(...arrays: ([T, T2] | Iteratee<(t: T, t2: T2) => TResult>)[]): TResult[];
        <T, T2, T3, TResult>(...arrays: ([T, T2, T3] | Iteratee<(t: T, t2: T2, t3: T3) => TResult>)[]): TResult[];
        <T, T2, T3, T4, TResult>(...arrays: ([T, T2, T3, T4] | Iteratee<(t: T, t2: T2, t3: T3, t4: T4) => TResult>)[]): TResult[];
        <T, T2, T3, T4, T5, TResult>(...arrays: ([T, T2, T3, T4, T5] | Iteratee<(t: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult>)[]): TResult[];
        <TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): TResult[];
    }

    interface ZipObject {
        <T, TResult extends _Obj<T>>(props?: string[], values?: ArrayLike<T>): TResult;
    }

    interface RecursiveArrayLike<T> extends ArrayLike<T | RecursiveArrayLike<T>> { }
    interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> { }
}

namespace Static {
    var chunk: Types.Chunk;
    var compact: Types.ArrayPassThrough;
    var concat: Types.Concat;
    var difference: Types.Difference;
    var differenceBy: Types.DifferenceBy;
    var differenceWith: Types.DifferenceWith;
    var drop: Types.Drop;
    var dropRight: Types.Drop;
    var dropWhile: Types.DropWhile;
    var dropWhileRight: Types.DropWhile;
    var fill: Types.Fill;
    var findIndex: Types.FindIndex;
    var findLastIndex: Types.FindIndex;
    var first: Types.ArrayValueThrough;
    var flatten: Types.Flatten;
    var flattenDeep: Types.FlattenDeep;
    var flattenDepth: Types.FlattenDepth;
    var fromPairs: Types.FromPairs;
    var head: Types.ArrayValueThrough;
    var indexOf: Types.IndexOf;
    var initial: Types.ArrayPassThrough;
    var intersection: Types.Difference;
    var intersectionBy: Types.DifferenceBy;
    var intersectionWith: Types.DifferenceWith;
    var join: Types.Join;
    var last: Types.ArrayValueThrough;
    var lastIndexOf: Types.IndexOf;
    var pull: Types.ArrayArgs;
    var pullAll: Types.PullAll;
    var pullAt: Types.PullAt;
    var remove: Types.Remove;
    var reverse: Types.ArrayPassThrough;
    var slice: Types.Slice;
    var sortedIndex: Types.SortedIndex;
    var sortedIndexOf: Types.SortedIndex;
    var sortedLastIndexOf: Types.SortedIndex;
    var sortedIndexBy: Types.SortedIndexBy;
    var sortedLastIndexBy: Types.SortedIndexBy;
    var sortedUniq: Types.ArrayPassThrough;
    var sortedUniqBy: Types.UniqBy;
    var tail: Types.ArrayPassThrough;
    var take: Types.Drop;
    var takeRight: Types.Drop;
    var takeWhile: Types.DropWhile;
    var takeRightWhile: Types.DropWhile;
    var union: Types.Difference;
    var unionBy: Types.DifferenceBy;
    var unionWith: Types.DifferenceWith;
    var uniq: Types.ArrayPassThrough;
    var uniqBy: Types.UniqBy;
    var uniqWith: Types.UniqWith;
    var unzip: Types.Unzip;
    var unzipWith: Types.UnzipWith;
    var without: Types.ArrayArgs;
    var xor: Types.Difference;
    var xorBy: Types.DifferenceBy;
    var xorWith: Types.DifferenceWith;
    var zip: Types.Zip;
    var zipWith: Types.ZipWith;
    var zipObject: Types.ZipObject;
    var zipObjectDeep: Types.ZipObject;
}
