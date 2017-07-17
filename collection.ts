namespace Types {
    export interface CountBy {
        <T, R extends string>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, R>): { [ P in R ]: number; };
        <T extends object, R extends string, K extends keyof T>(collection: T | undefined | null, iteratee: (value: ValuePredicate<T[K], R>) => R): { [ P in R ]: number; };
    }

    export interface GroupBy {
        <T, R extends string>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, R>): { [ P in R ]: T[]; };
        <T extends object, R extends string, K extends keyof T>(collection: T | undefined | null, iteratee: ValuePredicate<T[K], R>): { [ P in R ]: T[K][]; };
    }

    export interface ByBooleanPredicate {
        <T>(collection: ArrayLike<T> | undefined | null): boolean;
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: ArrayPredicate<T>): boolean;
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Property<T>): boolean;
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Matches<T>): boolean;
        <T, K extends keyof T>(collection: ArrayLike<T> | undefined | null, iteratee: MatchesProperty<T, K>): boolean;
        <T extends object>(collection: T): boolean;
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: ObjectPredicate<T, K>): boolean;
        <T extends object>(collection: T | undefined | null, iteratee: Property<T>): boolean;
        // <T extends object>(collection: T | undefined | null, iteratee: Matches<T[keyof T]>): boolean;
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: MatchesProperty<T, K>): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: ArrayPredicate<T>): T[];
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Property<T>): T[];
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Matches<T>): T[];
        <T, K extends keyof T>(collection: ArrayLike<T> | undefined | null, iteratee: MatchesProperty<T, K>): T[];
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: ObjectPredicate<T, K>): T[K][];
        <T extends object, K extends Property<T>>(collection: T | undefined | null, iteratee: K): T[K][];
        // <T extends object, K extends keyof T, M extends Pick<T, K>>(collection: T | undefined | null, iteratee: M): T[K][];
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: MatchesProperty<T, K>): T[K][];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: ArrayPredicate<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Property<T>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: Matches<T>, fromIndex?: number): T;
        <T, K extends keyof T>(collection: ArrayLike<T> | undefined | null, iteratee: MatchesProperty<T, K>, fromIndex?: number): T;
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: ObjectPredicate<T, K>, fromIndex?: number): T[K];
        <T extends object, K extends Property<T>>(collection: T | undefined | null, iteratee: Property<T>, fromIndex?: number): T[K];
        // <T>(collection: T | undefined | null, iteratee: Matches<T>, fromIndex?: number): T;
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: MatchesProperty<T, K>, fromIndex?: number): T[K];
    }

    export type FlatMapIteratorArray<T, R> = (value: T, index: number, collection: T[]) => R[];
    export type FlatMapIteratorObject<T, R> = (value: T, index: keyof T, collection: T) => R[];

    export interface FlatMap {
        <T>(collection: ArrayLike<ArrayLike<T>>): T[];
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: FlatMapIteratorArray<T, R>): R[];
        <T extends object, R>(collection: T | undefined | null, iteratee: FlatMapIteratorObject<T, R>): R[];
    }

    export interface FlatMapDepth {
        <T>(collection: ArrayLike<ArrayLike<T>>, depth?: number): T[];
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: FlatMapIteratorArray<T, R>, depth?: number): R[];
        <T extends object, R>(collection: T | undefined | null, iteratee: FlatMapIteratorObject<T, R>, depth?: number): R[];
    }

    export type ForEachIteratorArray<T> = (value: T, index: number, collection: Array<T>) => boolean | void;
    export type ForEachIteratorObject<T> = (value: T[keyof T], index: string, collection: T) => boolean | void;

    export interface ForEach {
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: ForEachIteratorArray<T>): ArrayLike<T>;
        <T extends object>(collection: T | undefined | null, iteratee: ForEachIteratorObject<T>): T;
    }

    export interface Includes {
        (collection: string | undefined | null, value: string, fromIndex?: number): boolean;
        <T>(collection: ArrayLike<T> | undefined | null, value: T, fromIndex?: number): boolean;
        <T extends object, K extends Property<T>>(collection: T | undefined | null, value: T[K], fromIndex?: number): boolean;
    }

    export interface InvokeMap {
        <T, R>(collection: ArrayLike<T> | undefined | null, path: PathLocation, ...args: any[]): R[];
        <T, A1, R, F extends ((this: T, a1: A1) => R)>(collection: ArrayLike<T> | undefined | null, func: F, a1: A1): R[];
        <T, A1, A2, R, F extends ((this: T, a1: A1, a2: A2) => R)>(collection: ArrayLike<T> | undefined | null, func: F, a1: A1, a2: A2): R[];
        <T, A1, A2, A3, R, F extends ((this: T, a1: A1, a2: A2, a3: A3) => R)>(collection: ArrayLike<T> | undefined | null, func: F, a1: A1, a2: A2, a3: A3): R[];
        <T, A1, A2, A3, A4, R, F extends ((this: T, a1: A1, a2: A2, a3: A3, a4: A4) => R)>(collection: ArrayLike<T> | undefined | null, func: F, a1: A1, a2: A2, a3: A3, a4: A4): R[];
        <T, A1, A2, A3, A4, A5, R, F extends ((this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => R)>(collection: ArrayLike<T> | undefined | null, func: F, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): R[];
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
    export type MapIteratorObject<T, R, K extends keyof T> = (value: T[K], index: K, collection: T) => R;

    export interface _Map {
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: MapIteratorArray<T, R>): R[];
        <T, K extends keyof T>(collection: ArrayLike<T> | undefined | null, iteratee: K): T[K][];
        <T extends object, R, K extends keyof T>(collection: T | undefined | null, iteratee: MapIteratorObject<T, R, K>): R[];
    }

    export interface OrderBy {
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, R>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T extends object, R, K extends keyof T>(collection: T | undefined | null, iteratee: ValuePredicate<T, R>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[K][];
        <T extends object, R, K extends keyof T>(collection: T | undefined | null, iteratee: ValuePredicate<T, R>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[K][];
    }

    export interface Partition {
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: BooleanPredicate<T>): [T[], T[]];
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: BooleanPredicate<T>): [T[K][], T[K][]];
    }

    export interface Reduce {
        <T, TAcc>(collection: ArrayLike<T> | undefined | null, iteratee: AccumulatorArrayPredicate<T, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc, K extends keyof T>(collection: T | undefined | null, iteratee: AccumulatorObjectPredicate<T, TAcc, K>, acc?: TAcc): TAcc;
    }

    export interface Sample {
        <T>(collection: ArrayLike<T>): T;
        <T extends object, K extends keyof T>(collection: T): T[K];
    }

    export interface SampleSize {
        <T>(collection: ArrayLike<T>, n?: number): T[];
        <T extends object, K extends keyof T>(collection: T, n?: number): T[K][];
    }

    export interface Shuffle {
        <T>(collection: ArrayLike<T>): T[];
        <T extends object, K extends keyof T>(collection: T): T[K][];
    }

    export interface Size {
        <T>(collection: ArrayLike<T>): number;
        <T extends object, K extends keyof T>(collection: T): number;
    }

    export interface SortBy {
        <T>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: ArrayLike<T> | undefined | null, iteratee: ValuePredicate<T, R>[]): T[];
        <T>(collection: ArrayLike<T> | undefined | null, ...iteratees: ValuePredicate<T, any>[]): T[];
        <T, R>(collection: ArrayLike<T> | undefined | null, ...iteratees: ValuePredicate<T, R>[]): T[];
        <T extends object, K extends keyof T>(collection: T | undefined | null, iteratee: ValuePredicate<T[K], any>[]): T[K][];
        <T extends object, R, K extends keyof T>(collection: T | undefined | null, iteratee: ValuePredicate<T[K], R>[]): T[K][];
        <T extends object, K extends keyof T>(collection: T | undefined | null, ...iteratees: ValuePredicate<T[K], any>[]): T[K][];
        <T extends object, R, K extends keyof T>(collection: T | undefined | null, ...iteratees: ValuePredicate<T[K], R>[]): T[K][];
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
