namespace Types {
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

namespace Static {
    var castArray: Types.CastArray;
    var clone: Types.Clone;
    var cloneDeep: Types.Clone;
    var cloneWith: Types.CloneWith;
    var cloneDeepWith: Types.CloneWith;
    var eq: Types.Comparison;
    var gt: Types.Comparison;
    var gte: Types.Comparison;
    var lt: Types.Comparison;
    var lte: Types.Comparison;
    function isArguments(value: any): value is IArguments;
    function isArray(value: any): value is any[];
    function isArray<T>(value: any): value is T[];
    function isArrayBuffer(value: any): value is ArrayBuffer;
    function isArrayLike(value: any): value is ArrayLike<any>;
    function isArrayLike<T>(value: any): value is ArrayLike<T>;
    function isArrayLikeObject(value: any): value is ArrayLike<any>;
    function isArrayLikeObject<T>(value: any): value is ArrayLike<T> & Object;
    function isBoolean(value: any): value is boolean | Boolean;
    function isBuffer(value: any): boolean; // buffer signature?
    function isDate(value: any): value is Date;
    function isElement<T extends Element>(value: any): value is T;
    function isEmpty(value: any): boolean;
    var isEqual: Types.Comparison;
    function isEqualWith<T>(a: T, b: T, customizer: (valueA: any, valueB: any, key: string, a: T, b: T, stack: any) => any): boolean;
    function isError<T extends Error>(value: any): value is T;
    function isFinite(value: number): boolean;
    function isFunction<T extends Function>(value: any): value is T;
    function isInteger(value: number): boolean;
    function isLength(value: number): boolean;
    function isMap<K, V>(value: any): value is Map<K, V>;
    function isMatch<T extends R, R>(value: T, match: R): boolean;
    function isMatchWith<T, R>(value: T, source: R, customizer: (valueA: any, valueB: any, key: string, a: T, b: R) => any): boolean;
    function isNaN(value: number): boolean;
    function isNative<T extends Function>(value: T): boolean;
    function isNil(value: any): boolean;
    function isNull(value: any): boolean;
    function isNumber(value: any): value is number;
    function isObject<T extends Object>(value: any): value is T;
    function isObjectLike<T extends Object>(value: any): value is T;
    function isPlainObject<T extends Object>(value: any): value is T;
    function isRegExp(value: any): value is RegExp;
    function isSafeInteger(value: number): boolean;
    function isSet<T>(value: any): value is Set<T>;
    function isString(value: any): value is string;
    function isSymbol(value: any): value is Symbol;
    function isTypedArray(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isWeakMap<K, V>(value: any): value is WeakMap<K, V>;
    function isWeakSet<T>(value: any): value is WeakSet<T>;
    function toArray<T>(value: { [index: string]: T }): T[];
    function toArray(value: string): string[];
    function toArray<T>(value: T[]): T[];
    function toArray<T>(value: any): T[];
    function toInteger(value: number | string): number;
    function toLength(value: number): number;
    function toNumber(value: any): number;
    function toPlainObject<T extends Object>(value: any): T;
    function toSafeInteger(value: number | string): number;
    function toString(value: any): string;
}
