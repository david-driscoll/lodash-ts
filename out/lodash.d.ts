namespace Types.Wrap {
    export interface ArrayPassThrough<TWrapper> {
        (): TWrapper;
    }

    export interface ArrayArgs<T, TWrapper> {
        (...args: T[]): TWrapper;
    }

    export interface ArrayArrayArg<T, TWrapper> {
        (args: ArrayLike<T>): TWrapper;
    }

    export interface ArrayValueThrough<T> {
        (): T;
    }

    export interface Concat<T, TWrapper> {
        (...items: (T | T[])[]): TWrapper;
    }

    export interface Difference<T, TWrapper> {
        (...values: ArrayLike<T>[]): TWrapper;
    }

    export interface DifferenceBy<T, TWrapper> {
        <T2, TT extends T | T2>(values?: ArrayLike<T2>, iteratee?: AnySelector<TT>): TWrapper;
        <T2, TT extends T | T2>(values?: ArrayLike<T2>, iteratee?: Property<TT>): TWrapper;
        <T2, T3, TT extends T | T2 | T3>(values1?: ArrayLike<T2>, values2?: ArrayLike<T3>, iteratee?: AnySelector<TT>): TWrapper;
        <T2, T3, TT extends T | T2 | T3>(values1?: ArrayLike<T2>, values2?: ArrayLike<T3>, iteratee?: Property<TT>): TWrapper;
        <T2, T3, T4, TT extends T | T2 | T3 | T4>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: AnySelector<TT>): TWrapper;
        <T2, T3, T4, TT extends T | T2 | T3 | T4>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: Property<TT>): TWrapper;
        <T2, T3, T4, T5, TT extends T | T2 | T3 | T4 | T5>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: AnySelector<TT>): TWrapper;
        <T2, T3, T4, T5, TT extends T | T2 | T3 | T4 | T5>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: Property<TT>): TWrapper;
        <T2, T3, T4, T5, T6, TT extends T | T2 | T3 | T4 | T5 | T6>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<TT>, iteratee?: AnySelector<T>): TWrapper;
        <T2, T3, T4, T5, T6, TT extends T | T2 | T3 | T4 | T5 | T6>(values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<TT>, iteratee?: Property<TT>): TWrapper;
        (...values: (ArrayLike<T> | (AnySelector<T>))[]): TWrapper;
        (...values: (ArrayLike<T> | (AnySelector<T>))[]): TWrapper;
    }

    export interface DifferenceWith<T, TWrapper> {
        (values?: ArrayLike<T>, comparator?: Comparator<T>): TWrapper;
        <R>(values?: ArrayLike<R>, comparator?: ComparatorR<T, R>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, comparator?: Comparator<T>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, comparator?: Comparator<T>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, comparator?: Comparator<T>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, comparator?: Comparator<T>): TWrapper;
        (...values: (ArrayLike<T> | (Comparator<T>))[]): TWrapper;
    }

    export interface Drop<TWrapper> {
        (num?: number): TWrapper;
    }

    export interface DropWhile<T, TWrapper> {
        (predicate: ArrayPredicate<T>): TWrapper;
        (predicate: Property<T>): T[];
        (predicate: Matches<T>): T[];
        <K extends keyof T>(predicate: MatchesProperty<T, K>): T[];
    }

    export interface Fill<T, TWrapper> {
        (value: T, start?: number, end?: number): TWrapper;
    }

    export interface FindIndex<T, TWrapper> {
        (predicate: ArrayPredicate<T>): TWrapper;
        (predicate: Property<T>): TWrapper;
        (predicate: Matches<T>): TWrapper;
        <K extends keyof T>(predicate: MatchesProperty<T, K>): TWrapper;
    }

    export interface Nth<T, TWrapper> {
        (index?: number): T;
    }

    export interface PullAll<T, TWrapper> {
        (values: ArrayLike<T>): TWrapper;
        (...values: T[]): TWrapper;
    }

    export interface PullAt<T, TWrapper> {
        (...indexes: (number | ArrayLike<number>)[]): TWrapper;
    }

    export interface PullAllBy<T, TWrapper> {
        <R>(values: ArrayLike<T>, iteratee: ValuePredicate<T, R>): TWrapper;
    }

    export interface Remove<T, TWrapper> {
        (predicate: ArrayPredicate<T>): TWrapper;
        (predicate: Property<T>): TWrapper;
    }

    export interface Slice<T, TWrapper> {
        (start?: number, end?: number): TWrapper;
    }

    export interface UniqBy<T, TWrapper> {
        <R>(iteratee: ValuePredicate<T, R>): TWrapper;
    }

    export interface UniqWith<T, TWrapper> {
        (comparator?: (valueA: T, valueB: T) => boolean): TWrapper;
    }

    export interface ZipWith<T, TWrapper> {
        <R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): TWrapper;
    }

    export interface RecursiveArrayLike<T> extends ArrayLike<T | RecursiveArrayLike<T>> { }
    export interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> { }

    export interface ArrayWrapper<T, TWrapper> {
        compact: ArrayPassThrough<TWrapper>;
        concat: Concat<T, TWrapper>;
        difference: Difference<T, TWrapper>;
        differenceBy: DifferenceBy<T, TWrapper>;
        differenceWith: DifferenceWith<T, TWrapper>;
        drop: Drop<TWrapper>;
        dropRight: Drop<TWrapper>;
        dropWhile: DropWhile<T, TWrapper>;
        dropWhileRight: DropWhile<T, TWrapper>;
        fill: Fill<T, TWrapper>;
        initial: ArrayPassThrough<TWrapper>;
        intersection: Difference<T, TWrapper>;
        intersectionBy: DifferenceBy<T, TWrapper>;
        intersectionWith: DifferenceWith<T, TWrapper>;
        nth: Nth<T, TWrapper>;
        pull: ArrayArgs<T, TWrapper>;
        pullAll: PullAll<T, TWrapper>;
        pullAt: PullAt<T, TWrapper>;
        remove: Remove<T, TWrapper>;
        reverse: ArrayPassThrough<TWrapper>;
        slice: Slice<T, TWrapper>;
        sortedUniq: ArrayPassThrough<TWrapper>;
        sortedUniqBy: UniqBy<T, TWrapper>;
        tail: ArrayPassThrough<TWrapper>;
        take: Drop<TWrapper>;
        takeRight: Drop<TWrapper>;
        takeWhile: DropWhile<T, TWrapper>;
        takeRightWhile: DropWhile<T, TWrapper>;
        union: Difference<T, TWrapper>;
        unionBy: DifferenceBy<T, TWrapper>;
        unionWith: DifferenceWith<T, TWrapper>;
        uniq: ArrayPassThrough<TWrapper>;
        uniqBy: UniqBy<T, TWrapper>;
        uniqWith: UniqWith<T, TWrapper>;
        unzip: ArrayArgs<T, TWrapper>;
        without: ArrayArgs<T, TWrapper>;
        xor: Difference<T, TWrapper>;
        xorBy: DifferenceBy<T, TWrapper>;
        xorWith: DifferenceWith<T, TWrapper>;
        zip: ArrayArgs<T, TWrapper>;
        // fromPairs
        // zipObject
        // zipObjectDeep
    }

    export interface ImplicitArray<T, TWrapper extends ImplicitArray<T, TWrapper>> {
        chunk(size?: number): ImplicitArray1<T[]>;
        first: ArrayValueThrough<T>;
        head: ArrayValueThrough<T>;
        last: ArrayValueThrough<T>;
        flatten<R>(): ImplicitArray1<R>;
        flattenDeep<R>(): ImplicitArray1<R>;
        flattenDepth<T>(depth?: number): ImplicitArray1<T>;
        findIndex: FindIndex<T, number>;
        findLastIndex: FindIndex<T, number>;
        join(separator?: string): string;
        indexOf(value: T, fromIndex?: number): number;
        lastIndexOf(value: T, fromIndex?: number): number;
        sortedIndex(value: T): number;
        sortedIndexOf(value: T): number;
        sortedLastIndexOf(value: T): number;
        sortedIndexBy<R>(value: T, predicate: ValuePredicate<T, R>): number;
        sortedLastIndexBy<R>(value: T, predicate: ValuePredicate<T, R>): number;
        unzipWith<R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): ImplicitArray1<R>;
        zipWith<R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): ImplicitArray1<R>;
    }

    export interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> {
        chunk(size?: number): ExplicitArray1<T[]>;
        first: ArrayValueThrough<ExplicitValue1<T>>;
        head: ArrayValueThrough<ExplicitValue1<T>>;
        last: ArrayValueThrough<ExplicitValue1<T>>;
        flatten<T>(): ExplicitArray1<T>;
        flattenDeep<T>(): ExplicitArray1<T>;
        flattenDepth<T>(depth?: number): ExplicitArray1<T>;
        findIndex: FindIndex<T, ExplicitValue1<number>>;
        findLastIndex: FindIndex<T, ExplicitValue1<number>>;
        join(separator?: string): ExplicitString;
        indexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        lastIndexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        sortedIndex(value: T): ExplicitValue1<number>;
        sortedIndexOf(value: T): ExplicitValue1<number>;
        sortedLastIndexOf(value: T): ExplicitValue1<number>;
        sortedIndexBy<R>(value: T, predicate: ValuePredicate<T, R>): ExplicitValue1<number>;
        sortedLastIndexBy<R>(value: T, predicate: ValuePredicate<T, R>): ExplicitValue1<number>;
        unzipWith<R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): ExplicitArray1<R>;
        zipWith<R>(...arrays: (ArrayLike<any> | ((...args: any[]) => R))[]): ExplicitArray1<R>;
    }
}
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
namespace Types.Wrap {
    export interface ForEach<T, TWrapper> {
        (iteratee: ((value: T, index: number) => boolean | void)): TWrapper;
    }

    export interface ForEachObject<T, TWrapper> {
        (iteratee: ((value: T, index: string) => boolean | void)): TWrapper;
    }

    export interface OrderBy<T, TWrapper> {
        <R>(iteratee: ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, iteratee2: ValuePredicate<T, R>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, iteratee2: ValuePredicate<T, R>, iteratee3: ValuePredicate<T, R>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, iteratee2: ValuePredicate<T, R>, iteratee3: ValuePredicate<T, R>, iteratee4: ValuePredicate<T, R>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, iteratee2: ValuePredicate<T, R>, iteratee3: ValuePredicate<T, R>, iteratee4: ValuePredicate<T, R>, iteratee5: ValuePredicate<T, R>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        <R>(iteratee1: ValuePredicate<T, R>, iteratee2: ValuePredicate<T, R>, iteratee3: ValuePredicate<T, R>, iteratee4: ValuePredicate<T, R>, iteratee5: ValuePredicate<T, R>, iteratee6: ValuePredicate<T, R>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
    }

    export interface Shuffle<TWrapper> {
        (): TWrapper;
    }

    export interface SortBy<T, TWrapper> {
        (iteratee: ValuePredicate<T, any>[]): TWrapper;
        <R>(iteratee: ValuePredicate<T, R>[]): TWrapper;
        (...iteratees: ValuePredicate<T, any>[]): TWrapper;
        <R>(...iteratees: ValuePredicate<T, R>[]): TWrapper;
    }

    export interface ArrayWrapper<T, TWrapper> {
        forEach: ForEach<T, TWrapper>;
        forEachRight: ForEach<T, TWrapper>;
        each: ForEach<T, TWrapper>;
        eachRight: ForEach<T, TWrapper>;
        orderBy: OrderBy<T, TWrapper>;
        sampleSize(n?: number): TWrapper;
        shuffle: Shuffle<TWrapper>;
        sortBy: SortBy<T, TWrapper>;
    }

    export interface ImplicitIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>): TWrapper;
        (iteratee: Property<T>): TWrapper;
        (iteratee: Matches<T>): TWrapper;
        <K extends keyof T>(iteratee: MatchesProperty<T, K>): TWrapper;
    }

    export interface ImplicitFindIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>, fromIndex?: number): TWrapper;
        (iteratee: Property<T>, fromIndex?: number): TWrapper;
        (iteratee: Matches<T>, fromIndex?: number): TWrapper;
        <K extends keyof T>(iteratee: MatchesProperty<T, K>, fromIndex?: number): TWrapper;
    }

    export interface ImplicitWrapper<T, TWrapper> {
        countBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: number; }>;
        every: ImplicitIteratee<T, boolean> & { (): boolean };
        filter: ImplicitIteratee<T, TWrapper>;
        find: ImplicitFindIteratee<T, T>;
        findLast: ImplicitFindIteratee<T, T>;
        flatMap<R>(iteratee: (value: T, index: number) => R[]): ImplicitArray1<R>;
        flatMapDeep<R>(iteratee: (value: T, index: number) => R[]): ImplicitArray1<R>;
        flatMapDepth<R>(iteratee: (value: T, index: number) => R[], depth?: number): ImplicitArray1<R>;
        includes(value: T, fromIndex?: number): boolean;
        invokeMap<R>(path: PathLocation | Function, ...args: any[]): ImplicitArray1<R>;
        keyBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: T; }>;
        map<R>(iteratee: (value: T, index: number) => R): ImplicitArray1<R>;
        groupBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee: BooleanPredicate<T>): ImplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reduceRight<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reject(iteratee: ArrayPredicate<T>): TWrapper;
        sample(): T;
        size(): number;
        some(): boolean;
        some(iteratee: ArrayPredicate<T>): boolean;
    }

    export interface ExplicitIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>): TWrapper;
        (iteratee: Property<T>): TWrapper;
        (iteratee: Matches<T>): TWrapper;
        <K extends keyof T>(iteratee: MatchesProperty<T, K>): TWrapper;
    }

    export interface ExplicitFindIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>, fromIndex?: number): TWrapper;
        (iteratee: Property<T>, fromIndex?: number): TWrapper;
        (iteratee: Matches<T>, fromIndex?: number): TWrapper;
        <K extends keyof T>(iteratee: MatchesProperty<T, K>, fromIndex?: number): TWrapper;
    }

    export interface ExplicitWrapper<T, TWrapper> {
        countBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: number; }>;
        every: ExplicitIteratee<T, ExplicitValue1<boolean>> & { (): ExplicitValue1<boolean> };
        filter: ExplicitIteratee<T, TWrapper>;
        find: ExplicitFindIteratee<T, ExplicitValue1<T>>;
        findLast: ExplicitFindIteratee<T, ExplicitValue1<T>>;
        flatMap<R>(iteratee: (value: T, index: number) => R[]): ExplicitArray1<R>;
        flatMapDeep<R>(iteratee: (value: T, index: number) => R[]): ExplicitArray1<R>;
        flatMapDeep<R>(iteratee: (value: T, index: number) => R[]): ExplicitArray1<R>;
        flatMapDepth<R>(iteratee: (value: T, index: number) => R[], depth?: number): ExplicitArray1<R>;
        includes(value: T, fromIndex?: number): ExplicitValue1<boolean>;
        invokeMap<R>(path: PathLocation | Function, ...args: any[]): ExplicitArray1<R>;
        keyBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: T; }>;
        map<R>(iteratee: (value: T, index: number) => R): ExplicitArray1<R>;
        groupBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee: BooleanPredicate<T>): ExplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reduceRight<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reject(iteratee: ArrayPredicate<T>): TWrapper;
        sample(): ExplicitValue1<T>;
        size(): ExplicitValue1<number>;
        some(): ExplicitValue1<boolean>;
        some(iteratee: ArrayPredicate<T>): ExplicitValue1<boolean>;
    }

    export interface ObjectWrapper<T, TObj extends { [index: string]: T }, TWrapper> {
        forEach: ForEachObject<T, TWrapper>;
        forEachRight: ForEachObject<T, TWrapper>;
        each: ForEachObject<T, TWrapper>;
        eachRight: ForEachObject<T, TWrapper>;
    }

    export interface ImplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ImplicitObject<T, TObj, TWrapper>> {
        orderBy: OrderBy<T, ImplicitArray1<T>>;
        shuffle: Shuffle<ImplicitArray1<T>>;
        sampleSize(n?: number): ImplicitArray1<T>;
        sortBy: SortBy<T, ImplicitArray1<T>>;
    }

    export interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> {
        orderBy: OrderBy<T, ExplicitArray1<T>>;
        shuffle: Shuffle<ExplicitArray1<T>>;
        sampleSize(n?: number): ExplicitArray1<T>;
        sortBy: SortBy<T, ExplicitArray1<T>>;
    }
}
namespace Types {
    export interface CountBy {
        <T, R extends string>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>): { [ P in R ]: number; };
        <T, R extends string>(collection: T, iteratee: (value: ValuePredicate<T[keyof T], R>) => R): { [ P in R ]: number; };
    }

    export interface GroupBy {
        <T, R extends string>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>): { [ P in R ]: T[]; };
        <T, R extends string>(collection: T, iteratee: ValuePredicate<T[keyof T], R>): { [ P in R ]: T[]; };
    }

    export interface ByBooleanPredicate {
        <T>(collection: ArrayLike<T>): boolean;
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T>): boolean;
        <T>(collection: ArrayLike<T>, iteratee: Property<T>): boolean;
        <T>(collection: ArrayLike<T>, iteratee: Matches<T>): boolean;
        <T, K extends keyof T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T, K>): boolean;
        <T>(collection: T): boolean;
        <T, K extends keyof T>(collection: T, iteratee: ObjectPredicate<T, K>): boolean;
        <T>(collection: T, iteratee: Property<T>): boolean;
        <T>(collection: T, iteratee: Matches<T[keyof T]>): boolean;
        <T, K extends keyof T>(collection: T, iteratee: MatchesProperty<T, K>): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T>): T[];
        <T>(collection: ArrayLike<T>, iteratee: Property<T>): T[];
        <T>(collection: ArrayLike<T>, iteratee: Matches<T>): T[];
        <T, K extends keyof T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T, K>): T[];
        <T, K extends keyof T>(collection: T, iteratee: ObjectPredicate<T, K>): T[];
        <T>(collection: T, iteratee: Property<T>): T[];
        <T>(collection: T, iteratee: Matches<T>): T[];
        <T, K extends keyof T>(collection: T, iteratee: MatchesProperty<T, K>): T[];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee: Property<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee: Matches<T>, fromIndex?: number): T;
        <T, K extends keyof T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T, K>, fromIndex?: number): T;
        <T, K extends keyof T>(collection: T, iteratee: ObjectPredicate<T, K>, fromIndex?: number): T;
        <T>(collection: T, iteratee: Property<T>, fromIndex?: number): T;
        <T>(collection: T, iteratee: Matches<T>, fromIndex?: number): T;
        <T, K extends keyof T>(collection: T, iteratee: MatchesProperty<T, K>, fromIndex?: number): T;
    }

    export type FlatMapIteratorArray<T, R> = (value: T, index: number, collection: T[]) => R[];
    export type FlatMapIteratorObject<T, R> = (value: T, index: keyof T, collection: T) => R[];

    export interface FlatMap {
        <T>(collection: ArrayLike<ArrayLike<T>>): T[];
        <T, R>(collection: ArrayLike<T>, iteratee: FlatMapIteratorArray<T, R>): R[];
        <T, R>(collection: T, iteratee: FlatMapIteratorObject<T, R>): R[];
    }

    export interface FlatMapDepth {
        <T>(collection: ArrayLike<ArrayLike<T>>, depth?: number): T[];
        <T, R>(collection: ArrayLike<T>, iteratee: FlatMapIteratorArray<T, R>, depth?: number): R[];
        <T, R>(collection: T, iteratee: FlatMapIteratorObject<T, R>, depth?: number): R[];
    }

    export type ForEachIteratorArray<T> = (value: T, index: number, collection: Array<T>) => boolean | void;
    export type ForEachIteratorObject<T> = (value: T[keyof T], index: string, collection: T) => boolean | void;

    export interface ForEach {
        <T>(collection: ArrayLike<T>, iteratee: ForEachIteratorArray<T>): ArrayLike<T>;
        <T>(collection: T, iteratee: ForEachIteratorObject<T>): T;
    }

    export interface Includes {
        (collection: string, value: string, fromIndex?: number): boolean;
        <T>(collection: ArrayLike<T>, value: T, fromIndex?: number): boolean;
        <T>(collection: T, value: any, fromIndex?: number): boolean;
    }

    export interface InvokeMap {
        <T, R>(collection: ArrayLike<T>, path: PathLocation, ...args: any[]): R[];
        <T, A1, R, F extends ((this: T, a1: A1) => R)>(collection: ArrayLike<T>, func: F, a1: A1): R[];
        <T, A1, A2, R, F extends ((this: T, a1: A1, a2: A2) => R)>(collection: ArrayLike<T>, func: F, a1: A1, a2: A2): R[];
        <T, A1, A2, A3, R, F extends ((this: T, a1: A1, a2: A2, a3: A3) => R)>(collection: ArrayLike<T>, func: F, a1: A1, a2: A2, a3: A3): R[];
        <T, A1, A2, A3, A4, R, F extends ((this: T, a1: A1, a2: A2, a3: A3, a4: A4) => R)>(collection: ArrayLike<T>, func: F, a1: A1, a2: A2, a3: A3, a4: A4): R[];
        <T, A1, A2, A3, A4, A5, R, F extends ((this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R)>(collection: ArrayLike<T>, func: F, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): R[];
        <T, R>(obj: T, path: PathLocation, ...args: any[]): R[];
        <T, A1, R, F extends ((this: T[keyof T], a1: A1) => R)>(obj: T, func: F, a1: A1): R[];
        <T, A1, A2, R, F extends ((this: T[keyof T], a1: A1, a2: A2) => R)>(obj: T, func: F, a1: A1, a2: A2): R[];
        <T, A1, A2, A3, R, F extends ((this: T[keyof T], a1: A1, a2: A2, a3: A3) => R)>(obj: T, func: F, a1: A1, a2: A2, a3: A3): R[];
        <T, A1, A2, A3, A4, R, F extends ((this: T[keyof T], a1: A1, a2: A2, a3: A3, a4: A4) => R)>(obj: T, func: F, a1: A1, a2: A2, a3: A3, a4: A4): R[];
        <T, A1, A2, A3, A4, A5, R, F extends ((this: T[keyof T], a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R)>(obj: T, func: F, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): R[];
    }

    export interface KeyBy {
        <T, R>(collection: ArrayLike<T> | T, iteratee: ValuePredicate<T, R>): { [index: string]: T; };
    }

    export type MapIteratorArray<T, R> = (value: T, index: number, collection: T[]) => R;
    export type MapIteratorObject<T, R> = (value: T[keyof T], index: keyof T, collection: T) => R;

    export interface _Map {
        <T, R>(collection: ArrayLike<T>, iteratee: MapIteratorArray<T, R>): R[];
        <T, K extends keyof T>(collection: ArrayLike<T>, iteratee: K): T[K][];
        <T, R>(collection: T, iteratee: MapIteratorObject<T, R>): R[];
    }

    export interface OrderBy {
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: T, iteratee: ValuePredicate<T, R>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: T, iteratee: ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    export interface Partition {
        <T>(collection: ArrayLike<T>, iteratee: BooleanPredicate<T>): [T[], T[]];
        <T>(collection: T, iteratee: BooleanPredicate<T>): [T[], T[]];
    }

    export interface Reduce {
        <T, TAcc>(collection: ArrayLike<T>, iteratee: AccumulatorArrayPredicate<T, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc, K extends keyof T>(collection: T, iteratee: AccumulatorObjectPredicate<T, TAcc, K>, acc?: TAcc): TAcc;
    }

    export interface Sample {
        <T>(collection: ArrayLike<T> | T): T;
    }

    export interface SampleSize {
        <T>(collection: ArrayLike<T> | T, n?: number): T[];
    }

    export interface Shuffle {
        <T>(collection: ArrayLike<T> | T): T[];
    }

    export interface Size {
        <T>(collection: ArrayLike<T> | T): number;
    }

    export interface SortBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: ArrayLike<T>, iteratee: ValuePredicate<T, R>[]): T[];
        <T>(collection: ArrayLike<T>, ...iteratees: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: ArrayLike<T>, ...iteratees: ValuePredicate<T, R>[]): T[];
        <T>(collection: T, iteratee: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: T, iteratee: ValuePredicate<T, R>[]): T[];
        <T>(collection: T, ...iteratees: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: T, ...iteratees: ValuePredicate<T, R>[]): T[];
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
namespace Types {
    export interface Identity {
        <T>(value: T, ...args: any[]): T;
    }

    export type Property<T> = keyof T;
    export type Matches<T> = Pick<T, keyof T>;
    export type MatchesProperty<T, K extends keyof T> = [K, T[K]];
    export type PathLocation = string | string[];

    // export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
    export type ArrayPredicate<T> = (value: T, index: number, collection: T[]) => boolean;
    export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T[keyof T], index: number, collection: T[]) => TAcc;

    export type ObjectPredicate<T, K extends keyof T> = (value: T[K], index: K, collection: T) => boolean;
    export type AccumulatorObjectPredicate<T, TAcc, K extends keyof T> = (accumulator: TAcc, value: T[K], index: K, collection: T) => TAcc;

    export type ValuePredicate<T, R> = (value: T) => R;
    export type BooleanPredicate<T> = (value: T) => boolean;
    export type AnySelector<T> = (value: T) => any;
    export type Comparator<T> = (arrVal: T, othVal: T) => boolean;
    export type ComparatorR<T, R> = (arrVal: T, othVal: R) => boolean;

    export namespace Wrap {
        export type ArrayPredicate<T> = (value: T, index: number) => boolean;
        export type AccumulatorArrayPredicate<T, TAcc> = (accumulator: TAcc, value: T, index: number) => TAcc;

        export type ObjectPredicate<T, K extends keyof T> = (value: T[K], index: K) => boolean;
        export type AccumulatorObjectPredicate<T, TAcc, K extends keyof T> = (accumulator: TAcc, value: T[K], index: K) => TAcc;
    }
}
type MemoizedFunction = {
    cache: {
        delete(key: string): boolean;
        get(key: string): any;
        has(key: string): boolean;
        set(key: string, value: any): any;
    }
};

namespace Types {
    export type AfterMethod = <T extends Function>(num: number, func: T) => T;
    export type ReturnMethod = <T extends Function>(func: T) => T;
    export interface PH {
        _placeholder: any;
    }
    export interface ReplacementPlaceholder {
        placeholder: PH;
    }

    export interface DebounceOptions {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    export interface ThrottleOptions {
        leading?: boolean;
        trailing?: boolean;
    }

    export interface Defer {
        <T>(func: (t1: T) => any, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, ...args: any[]): number;
    }

    export interface Delay {
        <T>(func: (t1: T) => any, wait: number, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, wait: number, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, wait: number, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, wait?: number, ...args: any[]): number;
    }

    export interface Flip {
        <T, R>(func: (t1: T) => R): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t2: T2, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t4: T4, t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t5: T5, t4: T4, t3: T3, t2: T2, t1: T) => R;
        <R extends Function>(func: Function): R;
    }

    export interface Memoize {
        Cache: {
            delete(key: string): boolean;
            get(key: string): any;
            has(key: string): boolean;
            set(key: string, value: any): any;
        };
        <T extends Function>(func: T, resolver?: Function): T & MemoizedFunction;
    }

    export interface Negate {
        <T, R>(func: (t1: T) => R): (t1: T) => boolean;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t1: T, t2: T2) => boolean;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (func: (...args: any[]) => any): (...args: any[]) => boolean;
    }

    export interface OverArgs {
        <T, R>(func: (t1: T) => R, t1: (t1: T) => T): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: (t1: T) => T, t2: (t2: T2) => T2): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4, t5: (t5: T5) => T5): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <T extends Function>(func: T, ...args: any[]): T;
    }

    export interface Rest {
        <T, TArg, R>(func: (t1: T, args: TArg[]) => R): (t1: T, ...args: TArg[]) => R;
        <T, T2, TArg, R>(func: (t1: T, t2: T2, args: TArg[]) => R): (t1: T, t2: T2, ...args: TArg[]) => R;
        <T, T2, T3, TArg, R>(func: (t1: T, t2: T2, t3: T3, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, ...args: TArg[]) => R;
        <T, T2, T3, T4, TArg, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, t4: T4, ...args: TArg[]) => R;
        <T, T2, T3, T4, T5, TArg, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, ...args: TArg[]) => R;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Spread {
        <T, R>(func: (args: T[]) => R): (...args: T[]) => R;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Unary {
        <T, R>(func: (t1: T) => R): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t1: T) => R;
        <R extends Function>(func: Function): R;
    }

    export interface Bind {
        <R>(func: () => R, thisArg: any): () => R;
        <T, R>(func: (t1: T) => R, thisArg: any): (t1: T) => R;
        <T, R>(func: (t1: T) => R, thisArg: any, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any): (t1: T, t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: PH, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: T): (t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: T, t2: T2): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T): (t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: T2): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: T2, t3: T3): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <R extends Function>(func: Function, thisArg: any, ...args: any[]): R;
    }

    export interface Partial1 {
        <T, R>(func: (t1: T) => R, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: PH, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T): (t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T, t2: T2): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2): (t1: T, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2, t3: T3): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: PH, t3: T3): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T): (t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2, t3: T3): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3): (t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3, t4: T4): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <R extends Function>(func: Function, ...args: any[]): R;
    }

    export interface PartialRight {
        <T, R>(func: (t1: T) => R, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: PH, t1: T): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: T2, t1: T): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: PH, t2: T2, t1: T): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3): (t2: T2, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: PH, t1: T): (t4: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: T2, t1: T): (t4: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t2: T2, t3: PH, t1: T): (t4: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: T2): (t4: T, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t2: T2): (t4: T, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: T3, t2: T2): (t4: T, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: T2): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: T3, t2: T2, t1: T): (t4: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: T2, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t2: T2, t3: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t2: T2): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4): (t5: T5, t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3): (t5: T5, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3): (t4: T4, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3): (t5: T5, t4: T4, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: T2): (t4: T4, t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: T2): (t5: T5, t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: T2): (t5: T5, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: T2): (t5: T5, t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: T2): (t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: PH, t1: T): (t5: T5, t4: T4, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: T2, t1: T): (t5: T5, t4: T4, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: PH, t1: T): (t5: T5, t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: PH, t1: T): (t5: T5, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: PH, t1: T): (t4: T4, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: T2, t1: T): (t5: T5, t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: T2, t1: T): (t5: T5, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: PH, t1: T): (t5: T5, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: T2, t1: T): (t4: T4, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: PH, t1: T): (t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: T2, t1: T): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: T2, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: T2, t1: T): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5): (t4: T4, t3: T3, t2: T2, t1: T) => R;
        <R extends Function>(func: Function, ...args: any[]): R;
    }

    export interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    export interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    export interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    export interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    export interface Curry {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        <R extends Function>(func: Function, arity?: number): R;
    }

    export interface CurryRight {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T2, T1, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T3, T2, T1, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T4, T3, T2, T1, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T5, T4, T3, T2, T1, R>;
        <R extends Function>(func: Function, arity?: number): R;
    }

    export interface Rearg {
        <R extends Function>(func: Function, indexes: number[]): R;
        <R extends Function>(func: Function, ...indexes: number[]): R;
    }
}

interface IStatic {
    after: Types.AfterMethod;
    ary<T extends Function>(func: T, num?: number): T
    before: Types.AfterMethod;
    bind: Types.Bind;
    bindKey<R extends Function>(object: Object, key: string, ...partials: any[]): R
    curry: Types.Curry;
    curryRight: Types.CurryRight;
    debounce<T extends Function>(func: T, wait?: number, options?: Types.DebounceOptions): T
    defer: Types.Defer;
    delay: Types.Delay;
    flip: Types.Flip;
    memoize: Types.Memoize;
    negate: Types.Negate;
    once: Types.ReturnMethod;
    overArgs: Types.OverArgs;
    partial: Types.Partial1;
    partialRight: Types.PartialRight;
    rearg: Types.Rearg;
    rest: Types.Rest;
    spread: Types.Spread;
    throttle<T extends Function>(func: T, wait?: number, options?: Types.ThrottleOptions): T
    unary: Types.Unary;
    wrap<T, R>(value: T, wrapper: (value: T) => R): () => R;
    wrap<T, R, A1>(value: T, wrapper: (value: T, arg1: A1) => R): (arg1: A1) => R;
    wrap<T, R, A1, A2>(value: T, wrapper: (value: T, arg1: A1, arg2: A2) => R): (arg1: A1, arg2: A2) => R;
    wrap<T, R, A1, A2, A3>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3) => R): (arg1: A1, arg2: A2, arg3: A3) => R;
    wrap<T, R, A1, A2, A3, A4>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3, arg4: A4) => R): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => R;
    wrap<T, R, A1, A2, A3, A4, A5>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => R): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => R;

}
namespace Types {
    export interface CastArray {
        <T>(value: T[]): T[];
        <T>(value: T): T[];
    }

    export interface Clone {
        <T>(value: T): T;
    }

    export interface CloneWith {
        <T>(value: T): T;
        <T, R>(value: T, customizer: (value: T[keyof T], key: keyof T, object: T, stack: T) => any): T;
    }

    export interface Comparison {
        <T>(a: T, b: T): boolean;
    }
}

interface IStatic {
    castArray: Types.CastArray;
    clone: Types.Clone;
    cloneDeep: Types.Clone;
    cloneWith: Types.CloneWith;
    cloneDeepWith: Types.CloneWith;
    eq: Types.Comparison;
    gt: Types.Comparison;
    gte: Types.Comparison;
    lt: Types.Comparison;
    lte: Types.Comparison;
    isArguments(value: any): value is IArguments;
    isArray(value: any): value is any[];
    isArray<T>(value: any): value is T[];
    isArrayBuffer(value: any): value is ArrayBuffer;
    isArrayLike(value: any): value is ArrayLike<any>;
    isArrayLike<T>(value: any): value is ArrayLike<T>;
    isArrayLikeObject(value: any): value is ArrayLike<any>;
    isArrayLikeObject<T>(value: any): value is ArrayLike<T> & Object;
    isBoolean(value: any): value is boolean | Boolean;
    isBuffer(value: any): boolean // buffer signature?
    isDate(value: any): value is Date;
    isElement<T extends Element>(value: any): value is T;
    isEmpty(value: any): boolean;
    isEqual: Types.Comparison;
    isEqualWith<T>(a: T, b: T, customizer: (valueA: T[keyof T], valueB: T[keyof T], key: keyof T, a: T, b: T, stack: any) => any): boolean;
    isError<T extends Error>(value: any): value is T;
    isFinite(value: number): boolean;
    isFunction<T extends Function>(value: any): value is T;
    isInteger(value: number): boolean;
    isLength(value: number): boolean;
    isMap<K, V>(value: any): value is Map<K, V>;
    isMatch<T extends R, R>(value: T, match: R): boolean;
    isMatchWith<T, R>(value: T, source: R, customizer: (valueA: T[keyof T], valueB: R[keyof R], key: keyof T, a: T, b: R) => any): boolean;
    isNaN(value: number): boolean;
    isNative<T extends Function>(value: T): boolean;
    isNil(value: any): boolean;
    isNull(value: any): boolean;
    isNumber(value: any): value is number;
    isObject<T extends Object>(value: any): value is T;
    isObjectLike<T extends Object>(value: any): value is T;
    isPlainObject<T extends Object>(value: any): value is T;
    isRegExp(value: any): value is RegExp;
    isSafeInteger(value: number): boolean;
    isSet<T>(value: any): value is Set<T>;
    isString(value: any): value is string;
    isSymbol(value: any): value is Symbol;
    isTypedArray(value: any): boolean;
    isUndefined(value: any): boolean;
    isWeakMap<K, V>(value: any): value is WeakMap<K, V>;
    isWeakSet<T>(value: any): value is WeakSet<T>;
    toArray<T>(value: { [index: string]: T }): T[];
    toArray(value: string): string[];
    toArray<T>(value: ArrayLike<T> | Iterable<T> | Iterator<T>): T[];
    toArray<T>(value: any): T[];
    toInteger(value: number | string): number;
    toFinite(value: number | string): number;
    toLength(value: number): number;
    toNumber(value: any): number;
    toPlainObject<T extends Object>(value: any): T;
    toSafeInteger(value: number | string): number;
    toString(value: any): string;
}
namespace Types.Wrap {
    export namespace Math {
        export type Aggregation<T> = () => T;
        export type AggregationIterator<T> = (value: T) => number | { valueOf(): number; };
        export interface AggregationBy<T, TWrapper> {
            (): TWrapper;
            (iteratee: AggregationIterator<T>): TWrapper;
            (iteratee: Property<T>): TWrapper;
            (iteratee: PathLocation): TWrapper;
        }
    }

    export interface ImplicitWrapper<T, TWrapper> {
        max: Math.Aggregation<number>;
        mean: Math.Aggregation<number>;
        min: Math.Aggregation<number>;
        sum: Math.Aggregation<number>;
        maxBy: Math.AggregationBy<T, T>;
        meanBy: Math.AggregationBy<T, T>;
        minBy: Math.AggregationBy<T, T>;
        sumBy: Math.AggregationBy<T, T>;
    }

    export interface ExplicitWrapper<T, TWrapper> {
        max: Math.Aggregation<ExplicitValue1<number>>;
        mean: Math.Aggregation<ExplicitValue1<number>>;
        min: Math.Aggregation<ExplicitValue1<number>>;
        sum: Math.Aggregation<ExplicitValue1<number>>;
        maxBy: Math.AggregationBy<T, ExplicitValue1<T>>;
        menaBy: Math.AggregationBy<T, ExplicitValue1<T>>;
        minBy: Math.AggregationBy<T, ExplicitValue1<T>>;
        sumBy: Math.AggregationBy<T, ExplicitValue1<T>>;
    }
}
namespace Types {
    export namespace Math {
        export type Operation = (augend: number, addend: number) => number;
        export type Aggregation = (array: number[]) => number;
        export type Rounding = (n: number, precision?: number) => number;
        export type AggregationIterator<T> = (value: T) => number | { valueOf(): number; };
        export interface AggregationBy {
            <T>(array: T[]): T;
            <T>(array: T[], iteratee: AggregationIterator<T>): T;
            <T>(array: T[], iteratee: Property<T>): T;
        }
        export interface MeanBy {
            (array: number[]): number;
            <T>(array: T[], iteratee: AggregationIterator<T>): number;
            <T>(array: T[], iteratee: Property<T>): number;
        }
    }
}

interface IStatic {
    add: Types.Math.Operation;
    ceil: Types.Math.Rounding;
    divide: Types.Math.Operation;
    floor: Types.Math.Rounding;
    max: Types.Math.Aggregation;
    maxBy: Types.Math.AggregationBy;
    mean: Types.Math.Aggregation;
    meanBy: Types.Math.MeanBy;
    min: Types.Math.Aggregation;
    minBy: Types.Math.AggregationBy;
    multiply: Types.Math.Operation;
    round: Types.Math.Rounding;
    subtract: Types.Math.Operation;
    sum: Types.Math.Aggregation;
    sumBy: Types.Math.MeanBy;
    clamp(num: number, upper: number): number
    clamp(num: number, lower: number, upper: number): number
    inRange(num: number, end: number): boolean
    inRange(num: number, start: number, end: number): boolean
    random(lower?: number, upper?: number, floating?: boolean): number
}
namespace Types {
    export interface Assign {
        <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        <TObject>(object: TObject): TObject;
        <R>(...otherArgs: any[]): R;
    }

   export type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    export interface AssignWith {
        <TObject, TSource, R>(object: TObject, source: TSource, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, R>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, TSource3, R>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, TSource3, TSource4, R>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): R;
        <TObject>(object: TObject): TObject;
        <TObject, R>(object: TObject, ...otherArgs: any[]): R;
    }

    export interface At {
        <R>(obj: { [index: number]: any; }, paths: (number | number[])[]): R[];
        <R>(obj: { [index: number]: any; }, ...paths: (number | number[])[]): R[];
        <R>(obj: { [index: string]: any; }, paths: PathLocation[]): R[];
        <R>(obj: { [index: string]: any; }, ...paths: PathLocation[]): R[];
    }

    export interface FindKey {
        <T, K extends keyof T>(obj: T, iteratee: ObjectPredicate<T, K>): string;
        <T>(obj: T, iteratee: Property<T>): string;
        <T>(obj: T, iteratee: Matches<T>): string;
        <T, K extends keyof T>(obj: T, iteratee: MatchesProperty<T, K>): string;
    }

    export interface ForIn {
        <T>(obj: T, iteratee: (value: T, index: string, collection: T) => boolean | void): T;
    }

    export interface Functions {
        <R extends Function>(obj: any): R[];
    }

    export interface Get {
        <T, K extends keyof T>(obj: T, path: K): T[K];
        <R>(obj: any, path: PathLocation, defaultValue?: R): R;
    }

    export interface Has {
        <T, K extends keyof T>(obj: T, path: K): boolean;
        <T>(obj: T, path: PathLocation): boolean;
    }

    export interface Invert {
        <T>(obj: T): { [P in keyof T]: T[P] };
    }

    export interface InvertBy {
        <T, R extends string>(obj: T, iteratee?: ValuePredicate<T[keyof T], R>): { [p in R]: R[] };
    }

    export interface Invoke {
        <R>(obj: any, path: PathLocation, ...args: any[]): R[];
    }

    export interface Keys {
        <T>(obj: T): keyof T;
    }

    export interface MapKeys {
        <T, R>(obj: T, iteratee: ((value: T[keyof T], index: keyof T, collection: T) => R)): { [x: string]: T[keyof T] };
    }

    export interface MapValues {
        <T, R>(obj: T, iteratee: (value: T[keyof T], index: keyof T, collection: T) => R): { [P in keyof T]: R };
        <T, R>(obj: T, iteratee: string);
    }

    export interface _Pick {
        <T, K extends keyof T>(obj: Object, props?: K[]): Pick<T, K>;
        <R>(obj: Object, props?: PathLocation): R;
        <T, K extends keyof T>(obj: Object, ...props: K[]): Pick<T, K>;
        <R>(obj: Object, ...props: PathLocation[]): R;
    }

    export interface PickBy {
        <T, R>(obj: T, predicate: (value: T, key: string) => boolean): R;
    }

    export interface Omit {
        <R>(obj: Object, props?: PathLocation): R;
        <R>(obj: Object, ...props: PathLocation[]): R;
    }

    export interface OmitBy {
        <T, R>(obj: T, predicate: (value: T, key: string) => boolean): R;
    }

    export interface _Set {
        <T, K extends keyof T>(obj: T, path: K, value: T[K]): T;
        <T, TObj>(obj: TObj, path: PathLocation, value: T): TObj;
    }

    export interface SetWith {
        <T, K extends keyof T>(obj: T, path: K, value: T[K], customizer?: (nsValue: T[K], key: K, nsObject: T) => any): T;
        <T, TObj>(obj: TObj, path: PathLocation, value: T, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface Update {
        <T, K extends keyof T>(obj: T, path: K, updater: (value: T[K]) => T[K]): T;
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any): TObj;
    }

    export interface UpdateWith {
        <T, K extends keyof T>(obj: T, path: K, updater: (value: T[K]) => any, customizer?: (nsValue: T[K], key: K, nsObject: T) => any): T;
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface ToPairs {
        <T, K extends keyof T>(obj: T): [K, T[K]][];
        <T>(obj: { [index: number]: T }): [number, T][];
        <K, V>(map: Map<K, V>): [K, V][];
        <V>(set: Set<V>): [number, V][];
    }

    export interface Transform {
        <T, TAcc>(obj: T, iteratee: ((acc: TAcc, value: T[keyof T], key: keyof T, obj: T) => any), acc?: TAcc): TAcc;
    }

    export interface Unset {
        <T, K extends keyof T>(obj: T, path: K): boolean;
        <T>(obj: T, path: PathLocation): boolean;
    }

    export interface Values {
        <T>(obj: { [index: number]: T; }): T[];
        <T, K extends keyof T>(obj: T): (T[K])[];
    }
}

interface IStatic {
    assign: Types.Assign;
    assignIn: Types.Assign;
    assignWith: Types.AssignWith;
    assignInWith: Types.AssignWith;
    at: Types.At;
    create<T, P>(prototype: T, properties?: P): T & P;
    create<R>(prototype: any, properties?: any): R;
    defaults: Types.Assign;
    defaultsDeep: Types.Assign;
    entires: Types.ToPairs;
    entiresIn: Types.ToPairs;
    extend: Types.Assign;
    extendWith: Types.AssignWith;
    findKey: Types.FindKey;
    findLastKey: Types.FindKey;
    forIn: Types.ForIn;
    forInRight: Types.ForIn;
    forOwn: Types.ForIn;
    forOwnRight: Types.ForIn;
    functions: Types.Functions;
    functionsIn: Types.Functions;
    get: Types.Get;
    has: Types.Has;
    hasIn: Types.Has;
    invert: Types.Invert;
    invertBy: Types.InvertBy;
    invoke: Types.Invoke;
    keys: Types.Keys;
    keysIn: Types.Keys;
    mapKeys: Types.MapKeys;
    mapValues: Types.MapValues;
    merge: Types.Assign;
    mergeWith: Types.AssignWith;
    omit: Types.Omit;
    omitBy: Types.OmitBy;
    pick: Types._Pick;
    pickBy: Types.PickBy;
    result: Types.Get;
    set: Types._Set;
    setWith: Types.SetWith;
    toPairs: Types.ToPairs;
    toPairsIn: Types.ToPairs;
    transform: Types.Transform;
    unset: Types.Unset;
    update: Types.Update;
    updateWith: Types.UpdateWith;
    values: Types.Values;
    valuesIn: Types.Values;
}
namespace Types {
   export type StringMethod = (str?: string) => string;
   export type WithStringMethod = (str?: string, target?: string, position?: number) => boolean;
   export type PadStringMethod = (str?: string, length?: number, chars?: string) => string;
   export type TrimStringMethod = (str?: string, chars?: string) => string;

    export interface TemplateSettings {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: { [index: string]: any; };
        interpolate?: RegExp;
        variable?: string;
    }

    export interface TemplateOptions extends TemplateSettings {
        sourceURL?: string;
    }

    export interface TruncateOptions {
        length?: number;
        omission?: string;
        separator?: string | RegExp;
    }
}

interface IStatic {
    templateSettings: Types.TemplateSettings;
    VERSION: string;

    camelCase: Types.StringMethod;
    capitalize: Types.StringMethod;
    deburr: Types.StringMethod;
    endsWith: Types.WithStringMethod;
    escape: Types.StringMethod;
    escapeRegExp: Types.StringMethod;
    kebabCase: Types.StringMethod;
    lowerCase: Types.StringMethod;
    lowerFirst: Types.StringMethod;
    pad: Types.PadStringMethod;
    padEnd: Types.PadStringMethod;
    padStart: Types.PadStringMethod;
    parseInt(str: string, radix?: number): number
    repeat(str?: string, num?: number): string
    replace(str: string, pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string
    replace(pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string
    snakeCase: Types.StringMethod;
    split(str: string, separator: string | RegExp, limit?: number): string[]
    split(separator: string | RegExp, limit?: number): string[]
    startCase: Types.StringMethod;
    startsWith: Types.WithStringMethod;
    template<T>(str?: string, options?: Types.TemplateOptions): (ctx: T) => string
    toLower: Types.StringMethod;
    toUpper: Types.StringMethod;
    trim: Types.TrimStringMethod;
    trimEnd: Types.TrimStringMethod;
    trimStart: Types.TrimStringMethod;
    truncate(str?: string, options?: Types.TruncateOptions): string
    unescape: Types.StringMethod;
    upperCase: Types.StringMethod;
    upperFirst: Types.StringMethod;
    words(str?: string, pattern?: string | RegExp): string[]
}
namespace Types {
    export interface Attempt {
        <T, R>(func: (t1: T) => R, t1: T): R | Error;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T, t2: T2): R | Error;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2, t3: T3): R | Error;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3, t4: T4): R | Error;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): R | Error;
        <R>(func: (...args: any[]) => R, ...args: any[]): R | Error;
    }

    export interface Flow {
        <A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
        <A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
        <A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
        <A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
        <A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
        <A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
        <A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
        <A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
        <A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
        <A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
        <A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
        <A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
        <A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
        <A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
        <A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
        <A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
        <A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
        <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
        <A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        <A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        <A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        <R extends Function>(...funcs: Function[]): R;
    }

    export interface IterateeMethod {
        <T extends Function>(func: T): (arg: T) => boolean;
        (): (arg: any) => boolean;
        <T>(matches: Property<T>): (arg: T) => boolean;
        <T>(matches: Matches<T>): (arg: T) => boolean;
        <T, K extends keyof T>(matchesProperty: MatchesProperty<T, K>): (arg: T) => boolean;
    }

    export interface Over {
        <T, R>(...funcs: ((t1: T) => R)[]): (t1: T) => R[];
        <T, T2, R>(...funcs: ((t1: T, t2: T2) => R)[]): (t1: T, t2: T2) => R[];
        <T, T2, T3, R>(...funcs: ((t1: T, t2: T2, t3: T3) => R)[]): (t1: T, t2: T2, t3: T3) => R[];
        <T, T2, T3, T4, R>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4) => R[];
        <T, T2, T3, T4, T5, R>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R[];
        <T, R>(funcs: ((t1: T) => R)[]): (t1: T) => R[];
        <T, T2, R>(funcs: ((t1: T, t2: T2) => R)[]): (t1: T, t2: T2) => R[];
        <T, T2, T3, R>(funcs: ((t1: T, t2: T2, t3: T3) => R)[]): (t1: T, t2: T2, t3: T3) => R[];
        <T, T2, T3, T4, R>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4) => R[];
        <T, T2, T3, T4, T5, R>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R[];
    }

    export interface OverEveryORSome {
        <T>(...funcs: ((t1: T) => boolean)[]): (t1: T) => boolean;
        <T, T2>(...funcs: ((t1: T, t2: T2) => boolean)[]): (t1: T, t2: T2) => boolean;
        <T, T2, T3>(...funcs: ((t1: T, t2: T2, t3: T3) => boolean)[]): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => boolean)[]): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (...funcs: ((...args: any[]) => boolean)[]): (object: any) => boolean;
        (...funcs: string[]): (object: any) => boolean;
        (...funcs: any[]): (object: any) => boolean;
        (funcs: ((...args: any[]) => boolean)[]): (object: any) => boolean;
        (funcs: string[]): (object: any) => boolean;
        (funcs: any[]): (object: any) => boolean;
    }

    export interface Range {
        (start: number, end: number, step?: number): number[];
        (end: number, step?: number): number[];
    }

    export interface Method {
        <T, R>(path: keyof T, t1: T): (obj: any) => R;
        <T, R>(path: PathLocation, t1: T): (obj: any) => R;
        <T, T2, R>(path: keyof T, t1: T, t2: T2): (obj: any) => R;
        <T, T2, R>(path: PathLocation, t1: T, t2: T2): (obj: any) => R;
        <T, T2, T3, R>(path: keyof T, t1: T, t2: T2, t3: T3): (obj: any) => R;
        <T, T2, T3, R>(path: PathLocation, t1: T, t2: T2, t3: T3): (obj: any) => R;
        <T, T2, T3, T4, R>(path: keyof T, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => R;
        <T, T2, T3, T4, R>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => R;
        <T, T2, T3, T4, T5, R>(path: keyof T, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => R;
        <T, T2, T3, T4, T5, R>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => R;
        <T, R>(path: keyof T, ...args: any[]): (obj: any) => R;
        <R>(path: PathLocation, ...args: any[]): (obj: any) => R;
    }

    export interface MethodOf {
        <T, R>(obj: any, t1: T): (path: keyof T | PathLocation) => R;
        <T, T2, R>(obj: any, t1: T, t2: T2): (path: keyof T | PathLocation) => R;
        <T, T2, T3, R>(obj: any, t1: T, t2: T2, t3: T3): (path: keyof T | PathLocation) => R;
        <T, T2, T3, T4, R>(obj: any, t1: T, t2: T2, t3: T3, t4: T4): (path: keyof T | PathLocation) => R;
        <T, T2, T3, T4, T5, R>(obj: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (path: keyof T | PathLocation) => R;
        <R>(obj: any, ...args: any[]): (path: PathLocation) => R;
    }
}

interface IStatic {
    attempt: Types.Attempt;

    bindAll<T>(object: T, ...methodNames: Types.Property<T>[]): T;

    cond<T, R>(array: [(arg: T) => boolean, (arg: T) => R][]): R;

    conforms<U>(arg: {[P in keyof U]?: (obj: U) => boolean }): (arg: U) => boolean;

    constant<T>(value: T): () => T;

    flow: Types.Flow;
    flowRight: Types.Flow;

    identity<T>(value: T, ...args: any[]): T;

    iteratee: Types.IterateeMethod;

    matches<T, O>(obj: T): (obj: O) => boolean;
    matchesProperty<O>(path: Types.PathLocation, value: any): (obj: O) => boolean;

    method: Types.Method;

    methodOf: Types.MethodOf;

    mixin<TObject, TSource>(obj: TObject, source: TSource, options?: { chain?: boolean }): TObject & TSource;
    mixin<TSource>(source: TSource, options?: { chain?: boolean }): IStatic & TSource;

    noConflict(): IStatic;

    noop(...args: any[]): void;

    nthArg<R>(num?: number): R;

    over: Types.Over;

    overEvery: Types.OverEveryORSome;
    overSome: Types.OverEveryORSome;

    property<R>(path: Types.PathLocation): (object: any) => R;
    property<T, K extends keyof T>(path: K): (object: T) => T[K];
    propertyOf<T, K extends keyof T>(object: T): {
        (path: K): T[K];
        <R>(path: Types.PathLocation): R;
    };

    range: Types.Range;
    rangeRight: Types.Range;

    runInContext(context?: any): IStatic;

    times<R>(n: number, iteratee: (num: number) => R): R[];
    times(n: number): number[];

    toPath(value: string): string[];

    uniqueId(prefix?: string): string;

    now(): number;

    stubArray(): any[];
    stubArray<T>(): T[];

    stubFalse(): false;
    stubTrue(): true;

    stubObject(): {};
    stubObject<T extends Object>(): T;

    stubString(): "";
}
namespace Types {
    export interface Tap {
        <T>(array: Array<T>, interceptor: (value: T) => void): Array<T>;
        <T>(array: ArrayLike<T>, interceptor: (value: T) => void): ArrayLike<T>;
    }

    export interface Thru {
        <T, R>(array: ArrayLike<T>, interceptor: (value: T) => R): R;
    }

    export namespace Wrap {
        export interface Value<T> {
            (): T;
        }

        export interface BaseWrapper<T, TWrapper> { }
        export interface ImplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }
        export interface ExplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }

        export interface ArrayWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            plant(array: T[]): TWrapper;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T[]>;
            valueOf: Value<T[]>;
            value: Value<T[]>;
        }

        export interface ImplicitArray<T, TWrapper extends ImplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitArray1<T>;
            thru<R>(interceptor: (value: T) => R): ImplicitArray1<R>;
        }

        export interface ImplicitArray1<T> extends ImplicitArray<T, ImplicitArray1<T>> { }

        export interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<R>(interceptor: (value: T) => R): ExplicitArray1<R>;
        }

        export interface ExplicitArray1<T> extends ExplicitArray<T, ExplicitArray1<T>> { }

        export interface ObjectWrapper<T, TObj extends { [index: string]: T }, TWrapper> extends BaseWrapper<TObj, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<TObj>;
            valueOf: Value<TObj>;
            value: Value<TObj>;
        }

        export interface ImplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ImplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitObject1<T, TObj>;
            thru<R>(interceptor: (value: T) => R): ImplicitArray1<R>;
        }

        export interface ImplicitObject1<T, TObj extends { [index: string]: T }> extends ImplicitObject<T, TObj, ImplicitObject1<T, TObj>> { }

        export interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<R>(interceptor: (value: T) => R): ExplicitArray1<R>;
        }

        export interface ExplicitObject1<T, TObj extends { [index: string]: T }> extends ExplicitObject<T, TObj, ExplicitObject1<T, TObj>> { }

        export interface ValueWrapper<T, TWrapper> {
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T>;
            valueOf: Value<T>;
            value: Value<T>;
        }

        export interface ImplicitValue<T, TWrapper extends ImplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<R>(interceptor: (value: T) => R): ImplicitValue1<R>;
        }

        export interface ImplicitValue1<T> extends ImplicitValue<T, ImplicitValue1<T>> { }

        export interface ExplicitValue<T, TWrapper extends ExplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<R>(interceptor: (value: T) => R): ExplicitValue1<R>;
        }

        export interface ExplicitValue1<T> extends ExplicitValue<T, ExplicitValue1<T>> { }

        export interface StringWrapper extends ValueWrapper<string, StringWrapper> {
            tap(interceptor: (value: string) => void): StringWrapper;
            toJSON: Value<string>;
            valueOf: Value<string>;
            value: Value<string>;
        }

        export interface ExplicitString extends ExplicitValue<string, ExplicitString> { }
    }
}

interface IStatic extends Types.PH {
    <T>(array: ArrayLike<T>): Types.Wrap.ImplicitArray1<T>;
    <T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ImplicitObject1<T, TObj>;
}

var Types: IStatic;
interface IStatic {
    chain<T>(array: ArrayLike<T>): Types.Wrap.ExplicitArray1<T>;
    chain<T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ExplicitObject1<T, TObj>;
}

export = Types;

