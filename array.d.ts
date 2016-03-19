declare namespace Types {
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
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>): T[];
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
        <T>(array: ArrayLike<T>, value: T, start?: number, end?: number): ArrayLike<T>;
    }

    interface FindIndex {
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>): number;
    }

    interface IndexOf {
        <T>(array: ArrayLike<T>, value: T, fromIndex?: number): number;
    }

    interface PullAll {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    interface PullAllWith {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, comparator?: (valueA: T, valueB: T) => boolean): T[];
    }

    interface PullAt {
        <T>(array: ArrayLike<T>, ...indexes: (number | ArrayLike<number>)[]): T[];
    }

    interface PullAllBy {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    interface Remove {
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>): ArrayLike<T>;
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

interface IStatic {
    chunk: Types.Chunk;
    compact: Types.ArrayPassThrough;
    concat: Types.Concat;
    difference: Types.Difference;
    differenceBy: Types.DifferenceBy;
    differenceWith: Types.DifferenceWith;
    drop: Types.Drop;
    dropRight: Types.Drop;
    dropWhile: Types.DropWhile;
    dropWhileRight: Types.DropWhile;
    fill: Types.Fill;
    findIndex: Types.FindIndex;
    findLastIndex: Types.FindIndex;
    first: Types.ArrayValueThrough;
    flatten: Types.Flatten;
    flattenDeep: Types.FlattenDeep;
    flattenDepth: Types.FlattenDepth;
    fromPairs: Types.FromPairs;
    head: Types.ArrayValueThrough;
    indexOf: Types.IndexOf;
    initial: Types.ArrayPassThrough;
    intersection: Types.Difference;
    intersectionBy: Types.DifferenceBy;
    intersectionWith: Types.DifferenceWith;
    join: Types.Join;
    last: Types.ArrayValueThrough;
    lastIndexOf: Types.IndexOf;
    pull: Types.ArrayArgs;
    pullAll: Types.PullAll;
    pullAllWith: Types.PullAllWith;
    pullAt: Types.PullAt;
    pullAllBy: Types.PullAllBy;
    remove: Types.Remove;
    reverse: Types.ArrayPassThrough;
    slice: Types.Slice;
    sortedIndex: Types.SortedIndex;
    sortedIndexOf: Types.SortedIndex;
    sortedIndexBy: Types.SortedIndexBy;
    sortedLastIndex: Types.SortedIndex;
    sortedLastIndexOf: Types.SortedIndex;
    sortedLastIndexBy: Types.SortedIndexBy;
    sortedUniq: Types.ArrayPassThrough;
    sortedUniqBy: Types.UniqBy;
    tail: Types.ArrayPassThrough;
    take: Types.Drop;
    takeRight: Types.Drop;
    takeWhile: Types.DropWhile;
    takeRightWhile: Types.DropWhile;
    union: Types.Difference;
    unionBy: Types.DifferenceBy;
    unionWith: Types.DifferenceWith;
    uniq: Types.ArrayPassThrough;
    uniqBy: Types.UniqBy;
    uniqWith: Types.UniqWith;
    unzip: Types.Unzip;
    unzipWith: Types.UnzipWith;
    without: Types.ArrayArgs;
    xor: Types.Difference;
    xorBy: Types.DifferenceBy;
    xorWith: Types.DifferenceWith;
    zip: Types.Zip;
    zipWith: Types.ZipWith;
    zipObject: Types.ZipObject;
    zipObjectDeep: Types.ZipObject;
}
