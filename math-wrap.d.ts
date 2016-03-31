declare namespace Types.Wrap {
    namespace Math {
        type Aggregation<T> = () => T;
        interface AggregationBy<T, TWrapper> {
            (): TWrapper;
            (iteratee: (value: T) => number): TWrapper;
            (iteratee: PathLocation): TWrapper;
            (iteratee: any): TWrapper;
        }
    }

    interface ImplicitWrapper<T, TWrapper> {
        max: Math.Aggregation<number>;
        mean: Math.Aggregation<number>;
        min: Math.Aggregation<number>;
        sum: Math.Aggregation<number>;
        maxBy: Math.AggregationBy<T, T>;
        meanBy: Math.AggregationBy<T, T>;
        minBy: Math.AggregationBy<T, T>;
        sumBy: Math.AggregationBy<T, T>;
    }

    interface ExplicitWrapper<T, TWrapper> {
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
