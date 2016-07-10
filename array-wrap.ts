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
        (values?: ArrayLike<T>, iteratee?: (value: T) => any): TWrapper;
        (values?: ArrayLike<T>, iteratee?: Iteratee): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, iteratee?: (value: T) => any): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, iteratee?: Iteratee): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: (value: T) => any): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, iteratee?: Iteratee): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: (value: T) => any): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, iteratee?: Iteratee): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, iteratee?: (value: T) => any): TWrapper;
        (values1?: ArrayLike<T>, values2?: ArrayLike<T>, values3?: ArrayLike<T>, values4?: ArrayLike<T>, values5?: ArrayLike<T>, iteratee?: Iteratee): TWrapper;
        (...values: (ArrayLike<T> | Iteratee | ((value: T) => any))[]): TWrapper;
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
        (predicate?: Iteratee): TWrapper;
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
        (predicate?: Iteratee): TWrapper;
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
        (predicate?: Iteratee): TWrapper;
    }

    export interface ZipWith<T, TWrapper> {
        <TResult>(...arrays: (ArrayLike<any> | Iteratee | ((...args: any[]) => TResult))[]): TWrapper;
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
        findIndex(predicate?: Iteratee, fromIndex?: number): number;
        findLastIndex(predicate?: ArrayPredicate<T>, fromIndex?: number): number;
        findLastIndex(predicate?: Iteratee, fromIndex?: number): number;
        join(separator?: string): string;
        indexOf(value: T, fromIndex?: number): number;
        lastIndexOf(value: T, fromIndex?: number): number;
        sortedIndex(value: T): number;
        sortedIndexOf(value: T): number;
        sortedLastIndexOf(value: T): number;
        sortedIndexBy(value: T, predicate?: ValuePredicate<T>): number;
        sortedLastIndexBy(value: T, predicate?: ValuePredicate<T>): number;
        unzipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee | ((...args: any[]) => TResult))[]): ImplicitArray1<TResult>;
        zipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee | ((...args: any[]) => TResult))[]): ImplicitArray1<TResult>;
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
        findIndex(predicate?: Iteratee): ExplicitValue1<number>;
        findLastIndex(predicate?: ArrayPredicate<T>): ExplicitValue1<number>;
        findLastIndex(predicate?: Iteratee): ExplicitValue1<number>;
        join(separator?: string): ExplicitString;
        indexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        lastIndexOf(value: T, fromIndex?: number): ExplicitValue1<number>;
        sortedIndex(value: T): ExplicitValue1<number>;
        sortedIndexOf(value: T): ExplicitValue1<number>;
        sortedLastIndexOf(value: T): ExplicitValue1<number>;
        sortedIndexBy(value: T, predicate?: ValuePredicate<T>): ExplicitValue1<number>;
        sortedLastIndexBy(value: T, predicate?: ValuePredicate<T>): ExplicitValue1<number>;
        unzipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee | ((...args: any[]) => TResult))[]): ExplicitArray1<TResult>;
        zipWith<TResult>(...arrays: (ArrayLike<any> | Iteratee | ((...args: any[]) => TResult))[]): ExplicitArray1<TResult>;
    }
}
