namespace Types {
    interface Tap {
        <T, TIn extends ArrayLike<T>>(array: TIn, interceptor: (value: T) => void): TIn;
    }

    interface Thru {
        <T, TIn extends ArrayLike<T>, TResult>(array: TIn, interceptor: (value: T) => TResult): TResult;
    }

    namespace Wrap {
        interface Value<T> {
            (): T;
        }

        interface BaseWrapper<T, TWrapper> { }
        interface ImplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }
        interface ExplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }

        interface ArrayWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            plant(array: T[]): TWrapper;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T[]>;
            valueOf: Value<T[]>;
            value: Value<T[]>;
        }

        interface ImplicitArray<T, TWrapper extends ImplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitArray1<T>;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        interface ImplicitArray1<T> extends ImplicitArray<T, ImplicitArray1<T>> { }

        interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
        }

        interface ExplicitArray1<T> extends ExplicitArray<T, ExplicitArray1<T>> { }

        interface ObjectWrapper<T, TObj extends { [index: string]: T }, TWrapper> extends BaseWrapper<TObj, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<TObj>;
            valueOf: Value<TObj>;
            value: Value<TObj>;
        }

        interface ImplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ImplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitObject1<T, TObj>;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        interface ImplicitObject1<T, TObj extends { [index: string]: T }> extends ImplicitObject<T, TObj, ImplicitObject1<T, TObj>> { }

        interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
        }

        interface ExplicitObject1<T, TObj extends { [index: string]: T }> extends ExplicitObject<T, TObj, ExplicitObject1<T, TObj>> { }

        interface ValueWrapper<T, TWrapper> {
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T>;
            valueOf: Value<T>;
            value: Value<T>;
        }

        interface ImplicitValue<T, TWrapper extends ImplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitValue1<TResult>;
        }

        interface ImplicitValue1<T> extends ExplicitArray<T, ImplicitValue1<T>> { }

        interface ExplicitValue<T, TWrapper extends ExplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitValue1<TResult>;
        }

        interface ExplicitValue1<T> extends ExplicitArray<T, ExplicitValue1<T>> { }

        interface StringWrapper extends ValueWrapper<string, StringWrapper> {
            tap(interceptor: (value: string) => void): StringWrapper;
            toJSON: Value<string>;
            valueOf: Value<string>;
            value: Value<string>;
        }

        interface ExplicitString extends ExplicitValue<string, ExplicitString> { }
    }
}

interface IStatic extends Types.PH {
    <T>(array: ArrayLike<T>): Types.Wrap.ImplicitArray1<T>;
    <T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ImplicitObject1<T, TObj>;
}

var Static: IStatic;
namespace Static {
    function chain<T>(array: ArrayLike<T>): Types.Wrap.ExplicitArray1<T>;
    function chain<T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ExplicitObject1<T, TObj>;
}

export = Static;
