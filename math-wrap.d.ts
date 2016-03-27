declare namespace Types.Wrap {
    type Max<T> = () => T;
    interface MaxBy<T, TWrapper> {
        (): TWrapper;
        (iteratee: (value: T) => number): TWrapper;
        (iteratee: PathLocation): TWrapper;
        (iteratee: any): TWrapper;
    }

    interface ImplicitWrapper<T, TWrapper> {
        max: Max<number>;
        mean: Max<number>;
        min: Max<number>;
        sum: Max<number>;
        maxBy: MaxBy<T, T>;
        minBy: MaxBy<T, T>;
        sumBy: MaxBy<T, T>;
    }

    interface ExplicitWrapper<T, TWrapper> {
        max: Max<ExplicitValue1<number>>;
        mean: Max<ExplicitValue1<number>>;
        min: Max<ExplicitValue1<number>>;
        sum: Max<ExplicitValue1<number>>;
        maxBy: MaxBy<T, ExplicitValue1<T>>;
        minBy: MaxBy<T, ExplicitValue1<T>>;
        sumBy: MaxBy<T, ExplicitValue1<T>>;
    }
}
