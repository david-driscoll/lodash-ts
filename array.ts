namespace Types {
    export interface ArrayPassThrough {
        <T>(array: ArrayLike<T>): T[];
    }

    export interface ArrayArgs {
        <T>(array: ArrayLike<T>, ...args: T[]): T[];
    }

    export interface ArrayArrayArg {
        <T>(array: ArrayLike<T>, args: ArrayLike<T>): T[];
    }

    export interface ArrayValueThrough {
        <T>(array: ArrayLike<T>): T;
    }

    export interface Chunk {
        <T>(array: ArrayLike<T>, size?: number): T[][];
    }

    export interface Concat {
        <T>(array: ArrayLike<T>, ...items: (T | T[])[]): T[];
    }

    export interface Difference {
        <T>(array: ArrayLike<T>, ...values: ArrayLike<T>[]): T[];
    }

    export interface DifferenceBy {
        <T, T2, TT extends T | T2>(array: ArrayLike<T>, values: ArrayLike<T2>, iteratee: AnySelector<TT>): T[];
        <T, T2, TT extends T | T2>(array: ArrayLike<T>, values: ArrayLike<T2>, iteratee: Property<TT>): T[];
        <T, T2, T3, TT extends T | T2 | T3>(array: ArrayLike<T>, values1: ArrayLike<T2>, values2: ArrayLike<T3>, iteratee: AnySelector<TT>): T[];
        <T, T2, T3, TT extends T | T2 | T3>(array: ArrayLike<T>, values1: ArrayLike<T2>, values2: ArrayLike<T3>, iteratee: Property<TT>): T[];
        <T, T2, T3, T4, TT extends T | T2 | T3 | T4>(array: ArrayLike<T>, values1: ArrayLike<T2>, values2: ArrayLike<T3>, values3: ArrayLike<T4>, iteratee: AnySelector<TT>): T[];
        <T, T2, T3, T4, TT extends T | T2 | T3 | T4>(array: ArrayLike<T>, values1: ArrayLike<T2>, values2: ArrayLike<T3>, values3: ArrayLike<T4>, iteratee: Property<TT>): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T>)[]): T[];
    }

    export interface DifferenceWith {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, comparator: Comparator<T>): T[];
        <T, T2>(array: ArrayLike<T>, values: ArrayLike<T2>, comparator: ComparatorR<T, T2>): T[];
        <T>(array: ArrayLike<T>, values1: ArrayLike<T>, values2: ArrayLike<T>, comparator: Comparator<T>): T[];
        <T>(array: ArrayLike<T>, values1: ArrayLike<T>, values2: ArrayLike<T>, values3: ArrayLike<T>, comparator: Comparator<T>): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T> | (Comparator<T>))[]): T[];
    }

    export interface Drop {
        <T>(array: ArrayLike<T>, num?: number): T[];
    }

    export interface DropWhile {
        <T>(array: ArrayLike<T>, predicate: ArrayPredicate<T>): T[];
        <T>(array: ArrayLike<T>, predicate: Property<T>): T[];
        <T>(array: ArrayLike<T>, predicate: Matches<T>): T[];
        <T, K extends keyof T>(array: ArrayLike<T>, predicate: MatchesProperty<T, K>): T[];
    }

    export interface Flatten {
        <T>(array: ArrayLike<T | ArrayLike<T>>): T[];
        <T>(array: RecursiveArrayLike<T>): RecursiveArray<T>;
        <R>(array: ArrayLike<any>): R[];
    }

    export interface FlattenDeep {
        <T>(array: ArrayLike<RecursiveArrayLike<T>>): T[];
    }

    export interface FlattenDepth {
        <T>(array: ArrayLike<any>, depth?: number): T[];
    }

    export interface FromPairs {
        <T>(array: ArrayLike<[number, T]>): { [index: number]: T; };
        <T>(array: ArrayLike<[any, T]>): { [index: string]: T; };
    }

    export interface Join {
        <T>(array: ArrayLike<T>, separator?: string): string;
    }

    export interface Fill {
        <T>(array: Array<T>, value: T, start?: number, end?: number): Array<T>;
        <T>(array: ArrayLike<T>, value: T, start?: number, end?: number): ArrayLike<T>;
    }

    export interface FindIndex {
        <T>(array: ArrayLike<T>, predicate: ArrayPredicate<T>, fromIndex?: number): number;
        <T>(array: ArrayLike<T>, predicate: Property<T>, fromIndex?: number): number;
        <T>(array: ArrayLike<T>, predicate: Matches<T>, fromIndex?: number): number;
        <T, K extends keyof T>(array: ArrayLike<T>, predicate: MatchesProperty<T, K>, fromIndex?: number): number;
    }

    export interface IndexOf {
        <T>(array: ArrayLike<T>, value: T, fromIndex?: number): number;
    }

    export interface Nth {
        <T>(array: ArrayLike<T>, index?: number): T;
    }

    export interface PullAll {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>): T[];
        <T>(array: ArrayLike<T>, ...values: T[]): T[];
    }

    export interface PullAllWith {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, comparator?: (valueA: T, valueB: T) => boolean): T[];
    }

    export interface PullAt {
        <T>(array: ArrayLike<T>, ...indexes: (number | ArrayLike<number>)[]): T[];
    }

    export interface PullAllBy {
        <T, R>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee: ValuePredicate<T, R>): T[];
    }

    export interface Remove {
        <T>(array: Array<T>, predicate: ArrayPredicate<T>): Array<T>;
        <T>(array: Array<T>, predicate: Property<T>): Array<T>;
        <T>(array: ArrayLike<T>, predicate: ArrayPredicate<T>): ArrayLike<T>;
        <T>(array: ArrayLike<T>, predicate: Property<T>): ArrayLike<T>;
    }

    export interface Slice {
        <T>(array: ArrayLike<T>, start?: number, end?: number): T[];
    }

    export interface SortedIndex {
        <T>(array: ArrayLike<T>, value: T): number;
    }

    export interface SortedIndexBy {
        <T, R>(array: ArrayLike<T>, value: T, predicate: ValuePredicate<T, R>): number;
    }

    export interface UniqBy {
        <T, R>(array: ArrayLike<T>, iteratee: ValuePredicate<T, R>): T[];
    }

    export interface UniqWith {
        <T>(array: ArrayLike<T>, comparator?: (valueA: T, valueB: T) => boolean): T[];
    }

    export interface Zip {
        <T>(t: ArrayLike<T>): [T][];
        <T, T2>(t: ArrayLike<T>, t2: ArrayLike<T2>): [T, T2][];
        <T, T2, T3>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>): [T, T2, T3][];
        <T, T2, T3, T4>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>): [T, T2, T3, T4][];
        <T, T2, T3, T4, T5>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, t5: ArrayLike<T5>): [T, T2, T3, T4, T5][];
        <R>(...arrays: ArrayLike<any>[]): R[];
    }

    export interface Unzip {
        <T>(...arrays: [T][]): [T[]];
        <T, T2>(...arrays: [T, T2][]): [T[], T2[]];
        <T, T2, T3>(...arrays: [T, T2, T3][]): [T[], T2[], T3[]];
        <T, T2, T3, T4>(...arrays: [T, T2, T3, T4][]): [T[], T2[], T3[], T4[]];
        <T, T2, T3, T4, T5>(...arrays: [T, T2, T3, T4, T5][]): [T[], T2[], T3[], T4[], T5[]];
        <R>(...arrays: ArrayLike<any>[]): R[];
    }

    export interface ZipWith {
        <T, R>(t: ArrayLike<T>, predicate: (t: T) => R): [R];
        <T, T2, R>(t: ArrayLike<T>, t2: ArrayLike<T>, predicate: (t: T, t2: T2) => R): [R, R];
        <T, T2, T3, R>(t: ArrayLike<T>, t2: ArrayLike<T>, t3: ArrayLike<T>, predicate: (t: T, t2: T2, t3: T3) => R): [R, R, R];
        <T, T2, T3, T4, R>(t: ArrayLike<T>, t2: ArrayLike<T>, t3: ArrayLike<T>, t4: ArrayLike<T>, predicate: (t: T, t2: T2, t3: T3, t4: T4) => R): [R, R, R, R];
        <T, T2, T3, T4, T5, R>(t: ArrayLike<T>, t2: ArrayLike<T>, t3: ArrayLike<T>, t4: ArrayLike<T>, t5: ArrayLike<T>, predicate: (t: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): [R, R, R, R, R];
        <R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): R[];
    }

    export interface UnzipWith {
        <T, R>(array: ArrayLike<[T]>, predicate: (T: T) => R): R[];
        <T, T2, R>(array: ArrayLike<[T, T2]>, predicate: (T: T, T2: T2) => R): R[];
        <T, T2, T3, R>(array: ArrayLike<[T, T2, T3]>, predicate: (T: T, T2: T2, T3: T3) => R): R[];
        <T, T2, T3, T4, R>(array: ArrayLike<[T, T2, T3, T4]>, predicate: (T: T, T2: T2, T3: T3, T4: T4) => R): R[];
        <T, T2, T3, T4, T5, R>(array: ArrayLike<[T, T2, T3, T4, T5]>, predicate: (T: T, T2: T2, T3: T3, T4: T4, T5: T5) => R): R[];
    }

    export interface ZipObject {
        <T, K extends string>(props: K[], values: T[]): { [P in K]: T; };
    }

    export interface RecursiveArrayLike<T> extends ArrayLike<T | RecursiveArrayLike<T>> { }
    export interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> { }
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
    nth: Types.Nth;
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
