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
        (iteratee: MatchesProperty<T>): TWrapper;
    }

    export interface ImplicitFindIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>, fromIndex?: number): TWrapper;
        (iteratee: Property<T>, fromIndex?: number): TWrapper;
        (iteratee: Matches<T>, fromIndex?: number): TWrapper;
        (iteratee: MatchesProperty<T>, fromIndex?: number): TWrapper;
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
        (iteratee: MatchesProperty<T>): TWrapper;
    }

    export interface ExplicitFindIteratee<T, TWrapper> {
        (iteratee: ArrayPredicate<T>, fromIndex?: number): TWrapper;
        (iteratee: Property<T>, fromIndex?: number): TWrapper;
        (iteratee: Matches<T>, fromIndex?: number): TWrapper;
        (iteratee: MatchesProperty<T>, fromIndex?: number): TWrapper;
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
