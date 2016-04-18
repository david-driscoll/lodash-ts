declare namespace Types {
    interface CastArray {
        <T>(value: T[]): T[];
        <T>(value: T): T[];
    }

    interface Clone {
        <T>(value: T): T;
    }

    interface CloneWith {
        <T>(value: T): T;
        <T, TResult>(value: T, customizer: (value: any, key: string, object: T, stack: any) => any): TResult;
    }

    interface Comparison {
        <T>(a: T, b: T): boolean;
    }
}

interface IStatic {
    castArray: Types.CastArray;
    clone: Types.Clone;
    cloneDeep: Types.Clone;
    cloneWith: Types.CloneWith;
    cloneDeepWith: Types.CloneWith;
    eq: Types.Comparison;
    gt: Types.Comparison;
    gte: Types.Comparison;
    lt: Types.Comparison;
    lte: Types.Comparison;
    isArguments(value: any): value is IArguments;
    isArray(value: any): value is any[];
    isArray<T>(value: any): value is T[];
    isArrayBuffer(value: any): value is ArrayBuffer;
    isArrayLike(value: any): value is ArrayLike<any>;
    isArrayLike<T>(value: any): value is ArrayLike<T>;
    isArrayLikeObject(value: any): value is ArrayLike<any>;
    isArrayLikeObject<T>(value: any): value is ArrayLike<T> & Object;
    isBoolean(value: any): value is boolean | Boolean;
    isBuffer(value: any): boolean // buffer signature?
    isDate(value: any): value is Date;
    isElement<T extends Element>(value: any): value is T;
    isEmpty(value: any): boolean;
    isEqual: Types.Comparison;
    isEqualWith<T>(a: T, b: T, customizer: (valueA: any, valueB: any, key: string, a: T, b: T, stack: any) => any): boolean;
    isError<T extends Error>(value: any): value is T;
    isFinite(value: number): boolean;
    isFunction<T extends Function>(value: any): value is T;
    isInteger(value: number): boolean;
    isLength(value: number): boolean;
    isMap<K, V>(value: any): value is Map<K, V>;
    isMatch<T extends R, R>(value: T, match: R): boolean;
    isMatchWith<T, R>(value: T, source: R, customizer: (valueA: any, valueB: any, key: string, a: T, b: R) => any): boolean;
    isNaN(value: number): boolean;
    isNative<T extends Function>(value: T): boolean;
    isNil(value: any): boolean;
    isNull(value: any): boolean;
    isNumber(value: any): value is number;
    isObject<T extends Object>(value: any): value is T;
    isObjectLike<T extends Object>(value: any): value is T;
    isPlainObject<T extends Object>(value: any): value is T;
    isRegExp(value: any): value is RegExp;
    isSafeInteger(value: number): boolean;
    isSet<T>(value: any): value is Set<T>;
    isString(value: any): value is string;
    isSymbol(value: any): value is Symbol;
    isTypedArray(value: any): boolean;
    isUndefined(value: any): boolean;
    isWeakMap<K, V>(value: any): value is WeakMap<K, V>;
    isWeakSet<T>(value: any): value is WeakSet<T>;
    toArray<T>(value: { [index: string]: T }): T[];
    toArray(value: string): string[];
    toArray<T>(value: ArrayLike<T> | Iterable<T> | Iterator<T>): T[];
    toArray<T>(value: any): T[];
    toInteger(value: number | string): number;
    toLength(value: number): number;
    toNumber(value: any): number;
    toPlainObject<T extends Object>(value: any): T;
    toSafeInteger(value: number | string): number;
    toString(value: any): string;
}
