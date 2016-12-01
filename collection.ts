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
        <T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T>): boolean;
        <T>(collection: T): boolean;
        <T>(collection: T, iteratee: ObjectPredicate<T>): boolean;
        <T>(collection: T, iteratee: Property<T>): boolean;
        <T>(collection: T, iteratee: Matches<T[keyof T]>): boolean;
        <T>(collection: T, iteratee: MatchesProperty<T[keyof T]>): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T>): T[];
        <T>(collection: ArrayLike<T>, iteratee: Property<T>): T[];
        <T>(collection: ArrayLike<T>, iteratee: Matches<T>): T[];
        <T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T>): T[];
        <T>(collection: T, iteratee: ObjectPredicate<T>): T[];
        <T>(collection: T, iteratee: Property<T>): T[];
        <T>(collection: T, iteratee: Matches<T>): T[];
        <T>(collection: T, iteratee: MatchesProperty<T>): T[];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T>, iteratee: ArrayPredicate<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee: Property<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee: Matches<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee: MatchesProperty<T>, fromIndex?: number): T;
        <T>(collection: T, iteratee: ObjectPredicate<T>, fromIndex?: number): T;
        <T>(collection: T, iteratee: Property<T>, fromIndex?: number): T;
        <T>(collection: T, iteratee: Matches<T>, fromIndex?: number): T;
        <T>(collection: T, iteratee: MatchesProperty<T>, fromIndex?: number): T;
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
        <T, TAcc>(collection: T, iteratee: AccumulatorObjectPredicate<T, TAcc>, acc?: TAcc): TAcc;
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
