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
        (values?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): TWrapper;
        (...values: (ArrayLike<T> | Iteratee<(value: T) => any>)[]): TWrapper;
    }

    export interface DifferenceWith<T, TWrapper> {
        (values?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: ((value: T) => any) | string): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): TWrapper;
        (...values: (ArrayLike<T> | ((arrVal: T, othVal: T) => boolean))[]): TWrapper;
    }

    export interface Drop<TWrapper> {
        (num?: number): TWrapper;
    }

    export interface DropWhile<T, TWrapper> {
        (predicate?: ArrayPredicate<T>): TWrapper;
    }

    export interface Fill<T, TWrapper> {
        (value: T, start?: number, end?: number): TWrapper;
    }

    export interface Nth<T, TWrapper> {
        (index?: number): T;
    }

    export interface PullAll<T, TWrapper> {
        (values: ArrayLike<T>, iteratee?: ValuePredicate<T>): TWrapper;
    }

    export interface PullAt<T, TWrapper> {
        (...indexes: (number | ArrayLike<number>)[]): TWrapper;
    }

    export interface PullAllBy<T, TWrapper> {
        (values: ArrayLike<T>, iteratee?: ValuePredicate<T>): TWrapper;
    }

    export interface Remove<T, TWrapper> {
        (predicate?: ArrayPredicate<T>): TWrapper;
    }

    export interface Slice<T, TWrapper> {
        (start?: number, end?: number): TWrapper;
    }

    export interface UniqBy<T, TWrapper> {
        (iteratee?: ValuePredicate<T>): TWrapper;
    }

    export interface UniqWith<T, TWrapper> {
        (comparator?: (valueA: T, valueB: T) => boolean): TWrapper;
    }

    export interface TakeWhile<T, TWrapper> {
        (predicate?: ArrayPredicate<T>): TWrapper;
    }

    export interface ZipWith<T, TWrapper> {
        <TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): TWrapper;
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
        flatten<TResult>(): ImplicitArray1<TResult>;
        flattenDeep<TResult>(): ImplicitArray1<TResult>;
        flattenDepth<T>(depth?: number): ImplicitArray1<T>;
        findIndex(predicate?: ArrayPredicate<T>, fromIndex?: number): number;
        findLastIndex(predicate?: ArrayPredicate<T>, fromIndex?: number): number;
        join(separator?: string): string;
        indexOf(value: T, fromIndex?: number): number;
        lastIndexOf(value: T, fromIndex?: number): number;
        sortedIndex(value: T): number;
        sortedIndexOf(value: T): number;
        sortedLastIndexOf(value: T): number;
        sortedIndexBy(value: T, predicate?: ValuePredicate<T>): number;
        sortedLastIndexBy(value: T, predicate?: ValuePredicate<T>): number;
        unzipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): ImplicitArray1<TResult>;
        zipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): ImplicitArray1<TResult>;
    }

    export interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> {
        chunk(size?: number): ExplicitArray1<T[]>;
        first: ArrayValueThrough<ExplicitValue1<T>>;
        head: ArrayValueThrough<ExplicitValue1<T>>;
        last: ArrayValueThrough<ExplicitValue1<T>>;
        flatten<T>(): ExplicitArray1<T>;
        flattenDeep<T>(): ExplicitArray1<T>;
        flattenDepth<T>(depth?: number): ExplicitArray1<T>;
        findIndex(predicate?: ArrayPredicate<T>): ExplicitValue1<number>;
        findLastIndex(predicate?: ArrayPredicate<T>): ExplicitValue1<number>;
        join(separator?: string): ExplicitString;
        indexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        lastIndexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        sortedIndex(value: T): ExplicitValue1<number>;
        sortedIndexOf(value: T): ExplicitValue1<number>;
        sortedLastIndexOf(value: T): ExplicitValue1<number>;
        sortedIndexBy(value: T, predicate?: ValuePredicate<T>): ExplicitValue1<number>;
        sortedLastIndexBy(value: T, predicate?: ValuePredicate<T>): ExplicitValue1<number>;
        unzipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): ExplicitArray1<TResult>;
        zipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): ExplicitArray1<TResult>;
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
        <T>(array: ArrayLike<T>, values?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, iteratee?: Iteratee<(value: T) => any>): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T> | Iteratee<(value: T) => any>)[]): T[];
    }

    export interface DifferenceWith {
        <T>(array: ArrayLike<T>, values?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: ((value: T) => any) | string): T[];
        <T>(array: ArrayLike<T>, values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, comparator?: (arrVal: T, othVal: T) => boolean): T[];
        <T>(array: ArrayLike<T>, ...values: (ArrayLike<T> | ((arrVal: T, othVal: T) => boolean))[]): T[];
    }

    export interface Drop {
        <T>(array: ArrayLike<T>, num?: number): T[];
    }

    export interface DropWhile {
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>): T[];
    }

    export interface Flatten {
        <T>(array: ArrayLike<T | ArrayLike<T>>): T[];
        <T>(array: RecursiveArrayLike<T>): RecursiveArray<T>;
        <TResult>(array: ArrayLike<any>): TResult[];
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
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>, fromIndex?: number): number;
    }

    export interface IndexOf {
        <T>(array: ArrayLike<T>, value: T, fromIndex?: number): number;
    }

    export interface Nth {
        <T>(array: ArrayLike<T>, index?: number): T;
    }

    export interface PullAll {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    export interface PullAllWith {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, comparator?: (valueA: T, valueB: T) => boolean): T[];
    }

    export interface PullAt {
        <T>(array: ArrayLike<T>, ...indexes: (number | ArrayLike<number>)[]): T[];
    }

    export interface PullAllBy {
        <T>(array: ArrayLike<T>, values: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
    }

    export interface Remove {
        <T>(array: Array<T>, predicate?: ArrayPredicate<T, Array<T>>): Array<T>;
        <T>(array: ArrayLike<T>, predicate?: ArrayPredicate<T, ArrayLike<T>>): ArrayLike<T>;
    }

    export interface Slice {
        <T>(array: ArrayLike<T>, start?: number, end?: number): T[];
    }

    export interface SortedIndex {
        <T>(array: ArrayLike<T>, value: T): number;
    }

    export interface SortedIndexBy {
        <T>(array: ArrayLike<T>, value: T, predicate?: ValuePredicate<T>): number;
    }

    export interface UniqBy {
        <T>(array: ArrayLike<T>, iteratee?: ValuePredicate<T>): T[];
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
        <TResult>(...arrays: ArrayLike<any>[]): TResult[];
    }

    export interface Unzip {
        <T>(...arrays: [T][]): [T[]];
        <T, T2>(...arrays: [T, T2][]): [T[], T2[]];
        <T, T2, T3>(...arrays: [T, T2, T3][]): [T[], T2[], T3[]];
        <T, T2, T3, T4>(...arrays: [T, T2, T3, T4][]): [T[], T2[], T3[], T4[]];
        <T, T2, T3, T4, T5>(...arrays: [T, T2, T3, T4, T5][]): [T[], T2[], T3[], T4[], T5[]];
        <TResult>(...arrays: ArrayLike<any>[]): TResult[];
    }

    export interface ZipWith {
        <T, TResult>(t: ArrayLike<T>, predicate?: Iteratee<(t: T) => TResult>): TResult[];
        <T, T2, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, predicate?: Iteratee<(t: T, t2: T2) => TResult>): TResult[];
        <T, T2, T3, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, predicate?: Iteratee<(t: T, t2: T2, t3: T3) => TResult>): TResult[];
        <T, T2, T3, T4, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, predicate?: Iteratee<(t: T, t2: T2, t3: T3, t4: T4) => TResult>): TResult[];
        <T, T2, T3, T4, T5, TResult>(t: ArrayLike<T>, t2: ArrayLike<T2>, t3: ArrayLike<T3>, t4: ArrayLike<T4>, t5: ArrayLike<T5>, predicate?: Iteratee<(t: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult>): TResult[];
        <TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): TResult[];
    }

    export interface UnzipWith {
        <T, TResult>(...arrays: ([T] | Iteratee<(t: T) => TResult>)[]): TResult[];
        <T, T2, TResult>(...arrays: ([T, T2] | Iteratee<(t: T, t2: T2) => TResult>)[]): TResult[];
        <T, T2, T3, TResult>(...arrays: ([T, T2, T3] | Iteratee<(t: T, t2: T2, t3: T3) => TResult>)[]): TResult[];
        <T, T2, T3, T4, TResult>(...arrays: ([T, T2, T3, T4] | Iteratee<(t: T, t2: T2, t3: T3, t4: T4) => TResult>)[]): TResult[];
        <T, T2, T3, T4, T5, TResult>(...arrays: ([T, T2, T3, T4, T5] | Iteratee<(t: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult>)[]): TResult[];
        <TResult>(...arrays: (ArrayLike<any> | Iteratee<(...args: any[]) => TResult>)[]): TResult[];
    }

    export interface ZipObject {
        <T, TResult extends _Obj<T>>(props?: string[], values?: ArrayLike<T>): TResult;
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
        (iteratee?: Iteratee<(value: T, index: number) => boolean | void>): TWrapper;
    }

    export interface ForEachObject<T, TWrapper> {
        (iteratee?: Iteratee<(value: T, index: string) => boolean | void>): TWrapper;
    }

    export interface OrderBy<T, TWrapper> {
        (iteratee?: ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>, iteratee5: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>, iteratee5: ValuePredicate<T>, iteratee6: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
    }

    export interface Shuffle<TWrapper> {
        (): TWrapper;
    }

    export interface SortBy<T, TWrapper> {
        (iteratee?: ValuePredicate<T>[]): TWrapper;
        (...iteratees: ValuePredicate<T>[]): TWrapper;
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

    export interface ImplicitWrapper<T, TWrapper> {
        countBy(iteratee: ValuePredicate<T>): ImplicitValue1<{ [index: string]: number; }>;
        every(iteratee?: ArrayPredicate<T>): boolean;
        filter(iteratee?: ArrayPredicate<T>): TWrapper;
        find(iteratee?: ArrayPredicate<T>, fromIndex?: number): T;
        findLast(iteratee?: ArrayPredicate<T>, fromIndex?: number): T;
        flatMap<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>): ImplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>): ImplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>, depth?: number): ImplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): boolean;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ImplicitArray1<TResult>;
        keyBy(iteratee?: ValuePredicate<T>): ImplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult>): ImplicitArray1<TResult>;
        groupBy(iteratee: ValuePredicate<T>): ImplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee?: ValuePredicate<T>): ImplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reduceRight<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reject(iteratee?: ArrayPredicate<T>): TWrapper;
        sample(): T;
        size(): number;
        some(iteratee?: ArrayPredicate<T>): boolean;
    }

    export interface ExplicitWrapper<T, TWrapper> {
        countBy(iteratee: ValuePredicate<T>): ExplicitValue1<{ [index: string]: number; }>;
        every(iteratee?: ArrayPredicate<T>): ExplicitValue1<boolean>;
        filter(iteratee?: ArrayPredicate<T>): TWrapper;
        find(iteratee?: ArrayPredicate<T>): ExplicitValue1<T>;
        findLast(iteratee?: ArrayPredicate<T>): ExplicitValue1<T>;
        flatMap<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>): ExplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>): ExplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult[]>, depth?: number): ExplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): ExplicitValue1<boolean>;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ExplicitArray1<TResult>;
        keyBy(iteratee?: ValuePredicate<T>): ExplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee?: Iteratee<(value: T, index: number) => TResult>): ExplicitArray1<TResult>;
        groupBy(iteratee: ValuePredicate<T>): ExplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee?: ValuePredicate<T>): ExplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reduceRight<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reject(iteratee?: ArrayPredicate<T>): TWrapper;
        sample(): ExplicitValue1<T>;
        size(): ExplicitValue1<number>;
        some(iteratee?: ArrayPredicate<T>): ExplicitValue1<boolean>;
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
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: number; };
        <T>(collection: any, iteratee: ValuePredicate<T>): { [index: string]: number; };
    }

    export interface GroupBy {
        <T>(collection: ArrayLike<T>, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
        <T>(collection: _Obj<T>, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
        <T>(collection: any, iteratee: ValuePredicate<T>): { [index: string]: T[]; };
    }

    export interface ByBooleanPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): boolean;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): T[];
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>, fromIndex?: number): T;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>, fromIndex?: number): T;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>, fromIndex?: number): T;
    }

    export interface FlatMap {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => TResult[]>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>): TResult[];
    }

    export interface FlatMapDepth {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>, depth?: number) => TResult[]>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>, depth?: number): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult[]>, depth?: number): TResult[];
    }

    export interface ForEach {
        <T>(collection: Array<T>, iteratee?: Iteratee<(value: T, index: number, collection: Array<T>) => boolean | void>): Array<T>;
        <T>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => boolean | void>): ArrayLike<T>;
        <T>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
        <T>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
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
        <T>(collection: ArrayLike<T> | _Obj<T>, iteratee?: ValuePredicate<T>): { [index: string]: T; };
    }

    export interface _Map {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee<(value: T, index: number, collection: ArrayLike<T>) => TResult>): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): TResult[];
    }

    export interface OrderBy {
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: any, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    export interface Partition {
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T>): [T[], T[]];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T>): [T[], T[]];
        <T>(collection: any, iteratee?: ValuePredicate<T>): [T[], T[]];
    }

    export interface Reduce {
        <T, TAcc>(collection: ArrayLike<T>, iteratee?: AccumulatorArrayPredicate<T, ArrayLike<T>, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc>(collection: _Obj<T>, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc>(collection: any, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>, acc?: TAcc): TAcc;
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
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T>[]): T[];
        <T>(collection: ArrayLike<T>, ...iteratees: ValuePredicate<T>[]): T[];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T>[]): T[];
        <T>(collection: _Obj<T>, ...iteratees: ValuePredicate<T>[]): T[];
        <T>(collection: any, iteratee?: ValuePredicate<T>[]): T[];
        <T>(collection: any, ...iteratees: ValuePredicate<T>[]): T[];
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

   export type Iteratee<T extends Function> = string | Object | T;
   export type PathLocation = string | string[];

   export type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
   export type ArrayPredicate<T, TArray extends ArrayLike<T>> = Iteratee<(value: T, index: number, collection: TArray) => boolean>;
   export type AccumulatorArrayPredicate<T, TArray extends ArrayLike<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number, collection: TArray) => TAcc>;

   export type ObjectPredicate<T, TObj extends _Obj<T>> = Iteratee<(value: T, index: string, collection: TObj) => boolean>;
   export type AccumulatorObjectPredicate<T, TObj extends _Obj<T>, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string, collection: TObj) => TAcc>;

   export type ValuePredicate<T> = Iteratee<(value: T) => string>;

    export namespace Wrap {
       export type ArrayPredicate<T> = Iteratee<(value: T, index: number) => boolean>;
       export type AccumulatorArrayPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: number) => TAcc>;

       export type ObjectPredicate<T> = Iteratee<(value: T, index: string) => boolean>;
       export type AccumulatorObjectPredicate<T, TAcc> = Iteratee<(accumulator: TAcc, value: T, index: string) => TAcc>;
    }
}
type MemoizedFunction = { cache: {
    delete(key: string): boolean;
    get(key: string): any;
    has(key: string): boolean;
    set(key: string, value: any): any;
} };

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
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t2: T2, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t5: T5, t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <TResult extends Function>(func: Function): TResult;
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
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => boolean;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t1: T, t2: T2) => boolean;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (func: (...args: any[]) => any): (...args: any[]) => boolean;
    }

    export interface OverArgs {
        <T, TResult>(func: (t1: T) => TResult, t1: (t1: T) => T): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4, t5: (t5: T5) => T5): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <T extends Function>(func: T, ...args: any[]): T;
    }

    export interface Rest {
        <T, TArg, TResult>(func: (t1: T, args: TArg[]) => TResult): (t1: T, ...args: TArg[]) => TResult;
        <T, T2, TArg, TResult>(func: (t1: T, t2: T2, args: TArg[]) => TResult): (t1: T, t2: T2, ...args: TArg[]) => TResult;
        <T, T2, T3, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, ...args: TArg[]) => TResult;
        <T, T2, T3, T4, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, ...args: TArg[]) => TResult;
        <T, T2, T3, T4, T5, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, ...args: TArg[]) => TResult;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Spread {
        <T, TResult>(func: (args: T[]) => TResult): (...args: T[]) => TResult;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Unary {
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t1: T) => TResult;
        <TResult extends Function>(func: Function): TResult;
    }

    export interface Bind {
        <TResult>(func: () => TResult, thisArg: any): () => TResult;
        <T, TResult>(func: (t1: T) => TResult, thisArg: any): (t1: T) => TResult;
        <T, TResult>(func: (t1: T) => TResult, thisArg: any, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any): (t1: T, t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: T): (t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: T, t2: T2): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <TResult extends Function>(func: Function, thisArg: any, ...args: any[]): TResult;
    }

    export interface Partial {
        <T, TResult>(func: (t1: T) => TResult, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: PH, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T): (t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T, t2: T2): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2): (t1: T, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2, t3: T3): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: PH, t3: T3): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2, t3: T3): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3): (t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3, t4: T4): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <TResult extends Function>(func: Function, ...args: any[]): TResult;
    }

    export interface PartialRight {
        <T, TResult>(func: (t1: T) => TResult, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: PH, t1: T): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: T2, t1: T): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: PH, t2: T2, t1: T): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3): (t2: T2, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: PH, t1: T): (t4: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: T2, t1: T): (t4: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t2: T2, t3: PH, t1: T): (t4: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: T2): (t4: T, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t2: T2): (t4: T, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: T3, t2: T2): (t4: T, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: T2): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: T3, t2: T2, t1: T): (t4: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: T2, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t2: T2, t3: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t2: T2): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4): (t5: T5, t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3): (t5: T5, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3): (t4: T4, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3): (t5: T5, t4: T4, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: T2): (t4: T4, t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: T2): (t5: T5, t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: T2): (t5: T5, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: T2): (t5: T5, t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: T2): (t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: PH, t1: T): (t5: T5, t4: T4, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: T2, t1: T): (t5: T5, t4: T4, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: PH, t1: T): (t5: T5, t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: PH, t1: T): (t5: T5, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: PH, t1: T): (t4: T4, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: T2, t1: T): (t5: T5, t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: T2, t1: T): (t5: T5, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: PH, t1: T): (t5: T5, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: T2, t1: T): (t4: T4, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: PH, t1: T): (t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: T2, t1: T): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: T2, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: T2, t1: T): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5): (t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <TResult extends Function>(func: Function, ...args: any[]): TResult;
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
        <TResult extends Function>(func: Function, arity?: number): TResult;
    }

    export interface CurryRight {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T2, T1, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T3, T2, T1, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T4, T3, T2, T1, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T5, T4, T3, T2, T1, R>;
        <TResult extends Function>(func: Function, arity?: number): TResult;
    }

    export interface Rearg {
        <TResult extends Function>(func: Function, indexes: number[]): TResult;
        <TResult extends Function>(func: Function, ...indexes: number[]): TResult;
    }
}

interface IStatic {
    after: Types.AfterMethod;
    ary<T extends Function>(func: T, num?: number): T
    before: Types.AfterMethod;
    bind: Types.Bind;
    bindKey<TResult extends Function>(object: Object, key: string, ...partials: any[]): TResult
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
    partial: Types.Partial;
    partialRight: Types.PartialRight;
    rearg: Types.Rearg;
    rest: Types.Rest;
    spread: Types.Spread;
    throttle<T extends Function>(func: T, wait?: number, options?: Types.ThrottleOptions): T
    unary: Types.Unary;
    wrap<TResult>(value: any, wrapper: Function): TResult
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
        <T, TResult>(value: T, customizer: (value: any, key: string, object: T, stack: any) => any): TResult;
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
    isEqualWith<T>(a: T, b: T, customizer: (valueA: any, valueB: any, key: string, a: T, b: T, stack: any) => any): boolean;
    isError<T extends Error>(value: any): value is T;
    isFinite(value: number): boolean;
    isFunction<T extends Function>(value: any): value is T;
    isInteger(value: number): boolean;
    isLength(value: number): boolean;
    isMap<K, V>(value: any): value is Map<K, V>;
    isMatch<T extends R, R>(value: T, match: R): boolean;
    isMatchWith<T, R>(value: T, source: R, customizer: (valueA: any, valueB: any, key: string, a: T, b: R) => any): boolean;
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
        export interface AggregationBy<T, TWrapper> {
            (): TWrapper;
            (iteratee: Iteratee<(value: T) => number>): TWrapper;
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
        export interface AggregationBy {
            <T>(array: T[]): T;
            <T>(array: T[], iteratee: Iteratee<(value: T) => number>): T;
            <T>(array: T[], iteratee: PathLocation): T;
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
    meanBy: Types.Math.AggregationBy;
    min: Types.Math.Aggregation;
    minBy: Types.Math.AggregationBy;
    multiply: Types.Math.Operation;
    round: Types.Math.Rounding;
    subtract: Types.Math.Operation;
    sum: Types.Math.Aggregation;
    sumBy: Types.Math.AggregationBy;
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
        <TResult>(...otherArgs: any[]): TResult;
    }

   export type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    export interface AssignWith {
        <TObject, TSource, TResult>(object: TObject, source: TSource, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TResult;
        <TObject>(object: TObject): TObject;
        <TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult;
    }

    export interface At {
        <TResult>(obj: { [index: string]: any; }, paths: PathLocation[]): TResult[];
        <TResult>(obj: { [index: string]: any; }, ...paths: PathLocation[]): TResult[];
        <TResult>(obj: { [index: number]: any; }, paths: (number | number[])[]): TResult[];
        <TResult>(obj: { [index: number]: any; }, ...paths: (number | number[])[]): TResult[];
    }

    export interface FindKey {
        <T>(obj: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): string;
        <T>(obj: any, iteratee?: ObjectPredicate<T, _Obj<T>>): string;
    }

    export interface ForIn {
        <T>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
        <T>(obj: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => boolean | void>): _Obj<T>;
    }

    export interface Functions {
        <TResult extends Function>(obj: _Obj<any>): TResult[];
    }

    export interface Get {
        <TResult>(obj: any, path: PathLocation, defaultValue?: TResult): TResult;
    }

    export interface Has {
        (obj: any, path: PathLocation): boolean;
    }

    export interface InvertBy {
        <T>(obj: { [index: string]: T }, iteratee?: ValuePredicate<T>): { [index: string]: string[]; };
        <T>(obj: { [index: number]: T }, iteratee?: ValuePredicate<T>): { [index: string]: number[]; };
        <T>(obj: any, iteratee?: ValuePredicate<T>): { [index: string]: number[]; };
    }

    export interface Invoke {
        <TResult>(obj: any, path: PathLocation, ...args: any[]): TResult[];
    }

    export interface Keys {
        (obj: any): string[];
    }

    export interface MapKeys {
        <T>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => string>): _Obj<T>;
        <T>(obj: any, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => string>): _Obj<T>;
    }

    export interface MapValues {
        <T, TResult>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): _Obj<Rest>;
    }

    export interface Omit {
        <TResult>(obj: Object, props?: string | string[]): TResult;
        <TResult>(obj: Object, ...props: string[]): TResult;
    }

    export interface OmitBy {
        <T, TResult>(obj: _Obj<T>, predicate?: Iteratee<(value: T, key: string) => boolean>): TResult;
        <T, TResult>(obj: any, predicate?: Iteratee<(value: T, key: string) => boolean>): TResult;
    }

    export interface _Set {
        <T, TObj>(obj: TObj, path: PathLocation, value: T): TObj;
    }

    export interface SetWith {
        <T, TObj>(obj: TObj, path: PathLocation, value: T, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface Update {
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any): TObj;
    }

    export interface UpdateWith {
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface ToPairs {
        <T>(obj: { [index: number]: T }): [number, T][];
        <T>(obj: { [index: string]: T }): [string, T][];
        <K, V>(map: Map<K, V>): [K, V][];
        <V>(set: Set<V>): [number, V][];
        <T>(obj: any): [string, T][];
    }

    export interface Transform {
        <T, TObj, TAcc>(obj: TObj, iteratee?: Iteratee<(acc: TAcc, value: any, key: string, obj: TObj) => any>, acc?: TAcc): TAcc;
    }

    export interface Unset {
        (obj: any, path: PathLocation): boolean;
    }

    export interface Values {
        <T>(obj: { [index: string]: T; }): T[];
        <T>(obj: { [index: number]: T; }): T[];
        <T>(obj: any): T[];
    }
}

interface IStatic {
    assign: Types.Assign;
    assignIn: Types.Assign;
    assignWith: Types.AssignWith;
    assignInWith: Types.AssignWith;
    at: Types.At;
    create<T, P>(prototype: T, properties?: P): T & P;
    create<TResult>(prototype: any, properties?: any): TResult;
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
    invert<TResult>(obj: Object): TResult;
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
    pick: Types.Omit;
    pickBy: Types.OmitBy;
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
    export interface Flow {
        <T, V>(func?: (t1: T) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, V>(func?: (t1: T, t2: T2) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, V>(func?: (t1: T, t2: T2, t3: T3) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, T4, V>(func?: (t1: T, t2: T2, t3: T3, t4: T4) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, T4, T5, V>(func?: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => V, ...funcs: ((value: V) => V)[]): V;
        <F extends Function, V>(func?: F, ...funcs: ((value: V) => V)[]): V;
        <V>(func?: Function, ...funcs: ((value: V) => V)[]): V;
        <V>(funcs: ((value: V) => V)[]): V;
    }

    export interface IterateeMethod {
        <T extends Function>(func: T): T;
        <TResult>(value: string): (object: any) => TResult;
        (func: Object): (object: any) => boolean;
        (): Identity;
    }

    export interface Over {
        <TResult>(s1: string): (object: any) => [string];
        <TResult>(s1: string, s2: string): (object: any) => [string, string];
        <TResult>(s1: string, s2: string, s3: string): (object: any) => [string, string, string];
        <TResult>(s1: string, s2: string, s3: string, s4: string): (object: any) => [string, string, string, string];
        <TResult>(s1: string, s2: string, s3: string, s4: string, s5: string): (object: any) => [string, string, string, string, string];
        <TResult>(...funcs: any[]): (...args: any[]) => TResult[];
        <TResult>(funcs: any[]): (...args: any[]) => TResult[];

        (o1: any): (object: any) => [boolean];
        (o1: any, o2: any): (object: any) => [boolean, boolean];
        (o1: any, o2: any, o3: any): (object: any) => [boolean, boolean, boolean];
        (o1: any, o2: any, o3: any, o4: any): (object: any) => [boolean, boolean, boolean, boolean];
        (o1: any, o2: any, o3: any, o4: any, o5: any): (object: any) => [boolean, boolean, boolean, boolean, boolean];

        <TResult>(...funcs: ((...args: any[]) => TResult)[]): (object: any) => TResult[];
        <TResult>(...funcs: string[]): (object: any) => TResult[];

        <TResult>(funcs: ((...args: any[]) => TResult)[]): (object: any) => TResult[];
        <TResult>(funcs: string[]): (object: any) => TResult[];
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
        <T, TResult>(path: PathLocation, t1: T): (obj: any) => TResult;
        <T, T2, TResult>(path: PathLocation, t1: T, t2: T2): (obj: any) => TResult;
        <T, T2, T3, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3): (obj: any) => TResult;
        <T, T2, T3, T4, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => TResult;
        <T, T2, T3, T4, T5, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => TResult;
        <TResult>(path: PathLocation, ...args: any[]): (obj: any) => TResult;
    }

    export interface MethodOf {
        <T, TResult>(obj: any, t1: T): (path: PathLocation) => TResult;
        <T, T2, TResult>(obj: any, t1: T, t2: T2): (path: PathLocation) => TResult;
        <T, T2, T3, TResult>(obj: any, t1: T, t2: T2, t3: T3): (path: PathLocation) => TResult;
        <T, T2, T3, T4, TResult>(obj: any, t1: T, t2: T2, t3: T3, t4: T4): (path: PathLocation) => TResult;
        <T, T2, T3, T4, T5, TResult>(obj: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (path: PathLocation) => TResult;
        <TResult>(obj: any, ...args: any[]): (path: PathLocation) => TResult;
    }
}

interface IStatic {
    attempt<T, TResult>(func: (t1: T) => TResult, t1: T): TResult | Error;
    attempt<T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T, t2: T2): TResult | Error;
    attempt<T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2, t3: T3): TResult | Error;
    attempt<T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3, t4: T4): TResult | Error;
    attempt<T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): TResult | Error;
    attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;

    bindAll<T>(object: T, ...methodNames: Types.PathLocation[]): T;

    cond<T, TResult>(array: [(arg: T) => boolean, (arg: T) => TResult][]): TResult;

    conforms<U, T extends { [index: string]: (obj: U) => boolean }>(arg: T): (arg: U) => boolean;

    constant<T>(value: T): () => T;

    flow: Types.Flow;
    flowRight: Types.Flow;

    identity<T>(value: T): T;

    iteratee: Types.IterateeMethod;

    matches<T, O>(obj: T): (obj: O) => boolean;
    matchesProperty<O>(path: Types.PathLocation, value: any): (obj: O) => boolean;

    method: Types.Method;

    methodOf: Types.MethodOf;

    mixin<TObject, TSource>(obj: TObject, source: TSource, options?: { chain?: boolean }): TObject & TSource;
    mixin<TSource>(source: TSource, options?: { chain?: boolean }): IStatic & TSource;

    noConflict(): IStatic;

    noop(...args: any[]): void;

    nthArg<TResult>(num?: number): TResult;

    over: Types.Over;

    overEvery: Types.OverEveryORSome;
    overSome: Types.OverEveryORSome;

    property<TResult>(path: Types.PathLocation): (object: any) => TResult;
    propertyOf<TResult>(object: any): (path: Types.PathLocation) => TResult;

    range: Types.Range;
    rangeRight: Types.Range;

    runInContext(context?: any): IStatic;

    times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
    times(n: number): number[];

    toPath(value: string): string[];

    uniqueId(prefix?: string): string;

    now(): number;

    stubArray(): any[];
    stubArray<T>(): T[];

    stubFalse(): boolean;
    stubTrue(): boolean;

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
        <T, TResult>(array: ArrayLike<T>, interceptor: (value: T) => TResult): TResult;
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
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        export interface ImplicitArray1<T> extends ImplicitArray<T, ImplicitArray1<T>> { }

        export interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
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
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        export interface ImplicitObject1<T, TObj extends { [index: string]: T }> extends ImplicitObject<T, TObj, ImplicitObject1<T, TObj>> { }

        export interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
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
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitValue1<TResult>;
        }

        export interface ImplicitValue1<T> extends ImplicitValue<T, ImplicitValue1<T>> { }

        export interface ExplicitValue<T, TWrapper extends ExplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitValue1<TResult>;
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

var Static: IStatic;
interface IStatic {
    chain<T>(array: ArrayLike<T>): Types.Wrap.ExplicitArray1<T>;
    chain<T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ExplicitObject1<T, TObj>;
}

export = Static;

