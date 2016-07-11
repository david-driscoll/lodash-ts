namespace Types.Wrap {
    export interface ForEach<T, TWrapper> {
        (iteratee?: Iteratee): TWrapper;
        (iteratee?: (value: T, index: number) => boolean | void): TWrapper;
    }

    export interface ForEachObject<T, TWrapper> {
        (iteratee?: Iteratee): TWrapper;
        (iteratee?: (value: T, index: string) => boolean | void): TWrapper;
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
        every(iteratee?:Iteratee): boolean;
        filter(iteratee?: ArrayPredicate<T>): TWrapper;
        filter(iteratee?:Iteratee): TWrapper;
        find(iteratee?: ArrayPredicate<T>, fromIndex?: number): T;
        find(iteratee?:Iteratee, fromIndex?: number): T;
        findLast(iteratee?: ArrayPredicate<T>, fromIndex?: number): T;
        findLast(iteratee?:Iteratee, fromIndex?: number): T;
        flatMap<TResult>(iteratee?: (value: T, index: number) => TResult[]): ImplicitArray1<TResult>;
        flatMap<TResult>(iteratee?: Iteratee): ImplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: (value: T, index: number) => TResult[]): ImplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: Iteratee): ImplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: (value: T, index: number) => TResult[], depth?: number): ImplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: Iteratee, depth?: number): ImplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): boolean;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ImplicitArray1<TResult>;
        keyBy(iteratee?: ValuePredicate<T>): ImplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee?: (value: T, index: number) => TResult): ImplicitArray1<TResult>;
        map<TResult>(iteratee?: Iteratee): ImplicitArray1<TResult>;
        groupBy(iteratee: ValuePredicate<T>): ImplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee?: BooleanPredicate<T>): ImplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reduce<TAcc>(iteratee?: Iteratee): TAcc;
        reduceRight<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): TAcc;
        reduceRight<TAcc>(iteratee?: Iteratee): TAcc;
        reject(iteratee?: ArrayPredicate<T>): TWrapper;
        reject(iteratee?:Iteratee): TWrapper;
        sample(): T;
        size(): number;
        some(iteratee?: ArrayPredicate<T>): boolean;
        some(iteratee?:Iteratee): boolean;
    }

    export interface ExplicitWrapper<T, TWrapper> {
        countBy(iteratee: ValuePredicate<T>): ExplicitValue1<{ [index: string]: number; }>;
        every(iteratee?: ArrayPredicate<T>): ExplicitValue1<boolean>;
        every(iteratee?:Iteratee): ExplicitValue1<boolean>;
        filter(iteratee?: ArrayPredicate<T>): TWrapper;
        filter(iteratee?:Iteratee): TWrapper;
        find(iteratee?: ArrayPredicate<T>): ExplicitValue1<T>;
        find(iteratee?:Iteratee): ExplicitValue1<T>;
        findLast(iteratee?: ArrayPredicate<T>): ExplicitValue1<T>;
        findLast(iteratee?:Iteratee): ExplicitValue1<T>;
        flatMap<TResult>(iteratee?: (value: T, index: number) => TResult[]): ExplicitArray1<TResult>;
        flatMap<TResult>(iteratee?: Iteratee): ExplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: (value: T, index: number) => TResult[]): ExplicitArray1<TResult>;
        flatMapDeep<TResult>(iteratee?: Iteratee): ExplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: (value: T, index: number) => TResult[], depth?: number): ExplicitArray1<TResult>;
        flatMapDepth<TResult>(iteratee?: Iteratee, depth?: number): ExplicitArray1<TResult>;
        includes(value: T, fromIndex?: number): ExplicitValue1<boolean>;
        invokeMap<TResult>(path: PathLocation | Function, ...args: any[]): ExplicitArray1<TResult>;
        keyBy(iteratee?: ValuePredicate<T>): ExplicitValue1<{ [index: string]: T; }>;
        map<TResult>(iteratee?: (value: T, index: number) => TResult): ExplicitArray1<TResult>;
        map<TResult>(iteratee?: Iteratee): ExplicitArray1<TResult>;
        groupBy(iteratee: ValuePredicate<T>): ExplicitValue1<{ [index: string]: T[]; }>;
        partition(iteratee?: BooleanPredicate<T>): ExplicitValue1<[T[], T[]]>;
        reduce<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reduce<TAcc>(iteratee?: Iteratee): ExplicitValue1<TAcc>;
        reduceRight<TAcc>(iteratee?: AccumulatorArrayPredicate<T, TAcc>): ExplicitValue1<TAcc>;
        reduceRight<TAcc>(iteratee?: Iteratee): ExplicitValue1<TAcc>;
        reject(iteratee?: ArrayPredicate<T>): TWrapper;
        reject(iteratee?:Iteratee): TWrapper;
        sample(): ExplicitValue1<T>;
        size(): ExplicitValue1<number>;
        some(iteratee?: ArrayPredicate<T>): ExplicitValue1<boolean>;
        some(iteratee?:Iteratee): ExplicitValue1<boolean>;
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
