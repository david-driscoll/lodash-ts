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
        <T>(collection: ArrayLike<T>, iteratee?:Iteratee): boolean;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
        <T>(collection: _Obj<T>, iteratee?:Iteratee): boolean;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): boolean;
        <T>(collection: any, iteratee?:Iteratee): boolean;
    }

    export interface ByArrayPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>): T[];
        <T>(collection: ArrayLike<T>, iteratee?:Iteratee): T[];
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
        <T>(collection: _Obj<T>, iteratee?:Iteratee): T[];
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>): T[];
        <T>(collection: any, iteratee?:Iteratee): T[];
    }

    export interface FindPredicate {
        <T>(collection: ArrayLike<T>, iteratee?: ArrayPredicate<T, ArrayLike<T>>, fromIndex?: number): T;
        <T>(collection: ArrayLike<T>, iteratee?:Iteratee, fromIndex?: number): T;
        <T>(collection: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>, fromIndex?: number): T;
        <T>(collection: _Obj<T>, iteratee?:Iteratee, fromIndex?: number): T;
        <T>(collection: any, iteratee?: ObjectPredicate<T, _Obj<T>>, fromIndex?: number): T;
        <T>(collection: any, iteratee?:Iteratee, fromIndex?: number): T;
    }

    export interface FlatMap {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: (value: T, index: number, collection: ArrayLike<T>) => TResult[]): TResult[];
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult[]): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee): TResult[];
        <T, TResult>(collection: any, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult[]): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee): TResult[];
    }

    export interface FlatMapDepth {
        <T, TResult>(collection: ArrayLike<T>, iteratee?: (value: T, index: number, collection: ArrayLike<T>, depth?: number) => TResult[]): TResult[];
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult[], depth?: number): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee, depth?: number): TResult[];
        <T, TResult>(collection: any, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult[], depth?: number): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee, depth?: number): TResult[];
    }

    export interface ForEach {
        <T>(collection: Array<T>, iteratee?: (value: T, index: number, collection: Array<T>) => boolean | void): Array<T>;
        <T>(collection: Array<T>, iteratee?: Iteratee): Array<T>;
        <T>(collection: ArrayLike<T>, iteratee?: (value: T, index: number, collection: ArrayLike<T>) => boolean | void): ArrayLike<T>;
        <T>(collection: ArrayLike<T>, iteratee?: Iteratee): ArrayLike<T>;
        <T>(collection: _Obj<T>, iteratee?: (value: T, index: string, collection: _Obj<T>) => boolean | void): _Obj<T>;
        <T>(collection: _Obj<T>, iteratee?: Iteratee): _Obj<T>;
        <T>(collection: any, iteratee?: (value: T, index: string, collection: _Obj<T>) => boolean | void): _Obj<T>;
        <T>(collection: any, iteratee?: Iteratee): _Obj<T>;
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
        <T, TResult>(collection: ArrayLike<T>, iteratee?: (value: T, index: number, collection: ArrayLike<T>) => TResult): TResult[];
        <T, TResult>(collection: ArrayLike<T>, iteratee?: Iteratee): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult): TResult[];
        <T, TResult>(collection: _Obj<T>, iteratee?: Iteratee): TResult[];
        <T, TResult>(collection: any, iteratee?: (value: T, index: string, collection: _Obj<T>) => TResult): TResult[];
        <T, TResult>(collection: any, iteratee?: Iteratee): TResult[];
    }

    export interface OrderBy {
        <T>(collection: ArrayLike<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: _Obj<T>, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
        <T>(collection: any, iteratee?: ValuePredicate<T> | ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): T[];
    }

    export interface Partition {
        <T>(collection: ArrayLike<T>, iteratee?: BooleanPredicate<T>): [T[], T[]];
        <T>(collection: _Obj<T>, iteratee?: BooleanPredicate<T>): [T[], T[]];
        <T>(collection: any, iteratee?: BooleanPredicate<T>): [T[], T[]];
    }

    export interface Reduce {
        <T, TAcc>(collection: ArrayLike<T>, iteratee?: AccumulatorArrayPredicate<T, ArrayLike<T>, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc>(collection: ArrayLike<T>, iteratee?: Iteratee, acc?: TAcc): TAcc;
        <T, TAcc>(collection: _Obj<T>, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc>(collection: _Obj<T>, iteratee?: Iteratee, acc?: TAcc): TAcc;
        <T, TAcc>(collection: any, iteratee?: AccumulatorObjectPredicate<T, _Obj<T>, TAcc>, acc?: TAcc): TAcc;
        <T, TAcc>(collection: any, iteratee?: Iteratee, acc?: TAcc): TAcc;
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
