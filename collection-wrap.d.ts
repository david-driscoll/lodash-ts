declare namespace Types.Wrap {
    interface ForEach<T, TWrapper> {
        (iteratee?: Iteratee<(value: T, index: number) => boolean | void>): TWrapper;
    }

    interface ForEachObject<T, TWrapper> {
        (iteratee?: Iteratee<(value: T, index: string) => boolean | void>): TWrapper;
    }

    interface OrderBy<T, TWrapper> {
        (iteratee?: ValuePredicate<T>[], orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>, iteratee5: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
        (iteratee1: ValuePredicate<T>, iteratee2: ValuePredicate<T>, iteratee3: ValuePredicate<T>, iteratee4: ValuePredicate<T>, iteratee5: ValuePredicate<T>, iteratee6: ValuePredicate<T>,  orders?: ("asc" | "desc") | ("asc" | "desc")[]): TWrapper;
    }

    interface Shuffle<TWrapper> {
        (): TWrapper;
    }

    interface SortBy<T, TWrapper> {
        (iteratee?: ValuePredicate<T>[]): TWrapper;
        (...iteratees: ValuePredicate<T>[]): TWrapper;
    }

    interface ArrayWrapper<T, TWrapper> {
        forEach: ForEach<T, TWrapper>;
        forEachRight: ForEach<T, TWrapper>;
        each: ForEach<T, TWrapper>;
        eachRight: ForEach<T, TWrapper>;
        orderBy: OrderBy<T, TWrapper>;
        sampleSize(n?: number): TWrapper;
        shuffle: Shuffle<TWrapper>;
        sortBy: SortBy<T, TWrapper>;
    }

    interface ImplicitWrapper<T, TWrapper> {
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

    interface ExplicitWrapper<T, TWrapper> {
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

    interface ObjectWrapper<T, TObj extends { [index: string]: T }, TWrapper> {
        forEach: ForEachObject<T, TWrapper>;
        forEachRight: ForEachObject<T, TWrapper>;
        each: ForEachObject<T, TWrapper>;
        eachRight: ForEachObject<T, TWrapper>;
    }

    interface ImplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ImplicitObject<T, TObj, TWrapper>> {
        orderBy: OrderBy<T, ImplicitArray1<T>>;
        shuffle: Shuffle<ImplicitArray1<T>>;
        sampleSize(n?: number): ImplicitArray1<T>;
        sortBy: SortBy<T, ImplicitArray1<T>>;
    }

    interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> {
        orderBy: OrderBy<T, ExplicitArray1<T>>;
        shuffle: Shuffle<ExplicitArray1<T>>;
        sampleSize(n?: number): ExplicitArray1<T>;
        sortBy: SortBy<T, ExplicitArray1<T>>;
    }
}
