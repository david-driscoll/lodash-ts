namespace Types {
    export interface Tap {
        <T>(array: Array<T>, interceptor: (value: T) => void): Array<T>;
        <T>(array: ArrayLike<T>, interceptor: (value: T) => void): ArrayLike<T>;
    }

    export interface Thru {
        <T, TResult>(array: ArrayLike<T>, interceptor: (value: T) => TResult): TResult;
    }

    export namespace Wrap {
        export interface Value<T> {
            (): T;
        }

        export interface BaseWrapper<T, TWrapper> { }
        export interface ImplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }
        export interface ExplicitWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> { }

        export interface ArrayWrapper<T, TWrapper> extends BaseWrapper<T, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            plant(array: T[]): TWrapper;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T[]>;
            valueOf: Value<T[]>;
            value: Value<T[]>;
        }

        export interface ImplicitArray<T, TWrapper extends ImplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitArray1<T>;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        export interface ImplicitArray1<T> extends ImplicitArray<T, ImplicitArray1<T>> { }

        export interface ExplicitArray<T, TWrapper extends ExplicitArray<T, TWrapper>> extends ArrayWrapper<T, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
        }

        export interface ExplicitArray1<T> extends ExplicitArray<T, ExplicitArray1<T>> { }

        export interface ObjectWrapper<T, TObj extends { [index: string]: T }, TWrapper> extends BaseWrapper<TObj, TWrapper> {
            [Symbol.iterator](): IterableIterator<T>;
            next(): IteratorResult<T>;
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<TObj>;
            valueOf: Value<TObj>;
            value: Value<TObj>;
        }

        export interface ImplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ImplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ImplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            chain(): ExplicitObject1<T, TObj>;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitArray1<TResult>;
        }

        export interface ImplicitObject1<T, TObj extends { [index: string]: T }> extends ImplicitObject<T, TObj, ImplicitObject1<T, TObj>> { }

        export interface ExplicitObject<T, TObj extends { [index: string]: T }, TWrapper extends ExplicitObject<T, TObj, TWrapper>> extends ObjectWrapper<T, TObj, TWrapper>, ExplicitWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitArray1<TResult>;
        }

        export interface ExplicitObject1<T, TObj extends { [index: string]: T }> extends ExplicitObject<T, TObj, ExplicitObject1<T, TObj>> { }

        export interface ValueWrapper<T, TWrapper> {
            tap(interceptor: (value: T) => void): TWrapper;
            toJSON: Value<T>;
            valueOf: Value<T>;
            value: Value<T>;
        }

        export interface ImplicitValue<T, TWrapper extends ImplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ImplicitValue1<TResult>;
        }

        export interface ImplicitValue1<T> extends ImplicitValue<T, ImplicitValue1<T>> { }

        export interface ExplicitValue<T, TWrapper extends ExplicitValue<T, TWrapper>> extends ValueWrapper<T, TWrapper> {
            commit(): TWrapper;
            thru<TResult>(interceptor: (value: T) => TResult): ExplicitValue1<TResult>;
        }

        export interface ExplicitValue1<T> extends ExplicitValue<T, ExplicitValue1<T>> { }

        export interface StringWrapper extends ValueWrapper<string, StringWrapper> {
            tap(interceptor: (value: string) => void): StringWrapper;
            toJSON: Value<string>;
            valueOf: Value<string>;
            value: Value<string>;
        }

        export interface ExplicitString extends ExplicitValue<string, ExplicitString> { }
    }
}

interface IStatic extends Types.PH {
    <T>(array: ArrayLike<T>): Types.Wrap.ImplicitArray1<T>;
    <T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ImplicitObject1<T, TObj>;
}

var Types: IStatic;
interface IStatic {
    chain<T>(array: ArrayLike<T>): Types.Wrap.ExplicitArray1<T>;
    chain<T, TObj extends { [index: string]: T }>(obj: T): Types.Wrap.ExplicitObject1<T, TObj>;
}
