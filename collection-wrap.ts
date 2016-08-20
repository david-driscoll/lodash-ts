namespace Types.Wrap {
    export interface ForEach<T, TWrapper> {
        (iteratee: ((value: T, index: number) => boolean | void) | Iteratee): TWrapper;
    }

    export interface ForEachObject<T, TWrapper> {
        (iteratee: ((value: T, index: string) => boolean | void) | Iteratee): TWrapper;
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

    export interface ImplicitWrapper<T, TWrapper> {
        countBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: number; }>;
        every(): boolean;
        every(iteratee: ArrayPredicate<T> | Iteratee): boolean;
        filter(iteratee: ArrayPredicate<T> | Iteratee): TWrapper;
        find(iteratee: ArrayPredicate<T> | Iteratee, fromIndex?: number): T;
        findLast(iteratee: ArrayPredicate<T> | Iteratee, fromIndex?: number): T;
        flatMap<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee): ImplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee): ImplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee, depth?: number): ImplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): boolean;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ImplicitArray1<TResult>;
        keyBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee: ((value: T, index: number) => TResult)|Iteratee): ImplicitArray1<TResult>;
        groupBy<R>(iteratee: ValuePredicate<T, R>): ImplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee: BooleanPredicate<T>): ImplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc> | Iteratee): TAcc;
        reduceRight<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc> | Iteratee): TAcc;
        reject(iteratee: ArrayPredicate<T> | Iteratee): TWrapper;
        sample(): T;
        size(): number;
        some(): boolean;
        some(iteratee: ArrayPredicate<T> | Iteratee): boolean;
    }

    export interface ExplicitWrapper<T, TWrapper> {
        countBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: number; }>;
        every(): ExplicitValue1<boolean>;
        every(iteratee: ArrayPredicate<T> | Iteratee): ExplicitValue1<boolean>;
        filter(iteratee: ArrayPredicate<T> | Iteratee): TWrapper;
        find(iteratee: ArrayPredicate<T> | Iteratee): ExplicitValue1<T>;
        findLast(iteratee: ArrayPredicate<T> | Iteratee): ExplicitValue1<T>;
        flatMap<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee): ExplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee: (value: T, index: number) => TResult[]): ExplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee): ExplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee: ((value: T, index: number) => TResult[]) | Iteratee, depth?: number): ExplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): ExplicitValue1<boolean>;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ExplicitArray1<TResult>;
        keyBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee: ((value: T, index: number) => TResult) | Iteratee): ExplicitArray1<TResult>;
        groupBy<R>(iteratee: ValuePredicate<T, R>): ExplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee: BooleanPredicate<T>): ExplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc> | Iteratee): ExplicitValue1<TAcc>;
        reduceRight<TAcc>(iteratee: AccumulatorArrayPredicate<T, TAcc> | Iteratee): ExplicitValue1<TAcc>;
        reject(iteratee: ArrayPredicate<T> | Iteratee): TWrapper;
        sample(): ExplicitValue1<T>;
        size(): ExplicitValue1<number>;
        some(): ExplicitValue1<boolean>;
        some(iteratee: ArrayPredicate<T> | Iteratee): ExplicitValue1<boolean>;
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
