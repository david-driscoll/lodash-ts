namespace Types {
    interface Assign {
        <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        <TObject>(object: TObject): TObject;
        <TResult>(...otherArgs: any[]): TResult;
    }

    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    interface AssignWith {
        <TObject, TSource, TResult>(object: TObject, source: TSource, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TResult>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TSource3, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TResult;
        <TObject, TSource1, TSource2, TSource3, TSource4, TResult>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TResult;
        <TObject>(object: TObject): TObject;
        <TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult;
    }

    interface At {
        <TResult>(obj: { [index: string]: any; }, paths: PathLocation[]): TResult[];
        <TResult>(obj: { [index: string]: any; }, ...paths: PathLocation[]): TResult[];
        <TResult>(obj: { [index: number]: any; }, paths: (number | number[])[]): TResult[];
        <TResult>(obj: { [index: number]: any; }, ...paths: (number | number[])[]): TResult[];
    }

    interface FindKey {
        <T>(obj: _Obj<T>, iteratee?: ObjectPredicate<T, _Obj<T>>): string;
    }

    interface ForIn {
        <T>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: number, collection: _Obj<T>) => boolean | void>): _Obj<T>;
    }

    interface Functions {
        <TResult extends Function>(obj: _Obj<any>): TResult[];
    }

    interface Get {
        <TResult>(obj: Object, path: PathLocation, defaultValue?: TResult): TResult;
    }

    interface Has {
        (obj: Object, path: PathLocation): boolean;
    }

    interface InvertBy {
        <T>(obj: { [index: string]: T }, iteratee?: ValuePredicate<T>): { [index: string]: string[]; };
        <T>(obj: { [index: number]: T }, iteratee?: ValuePredicate<T>): { [index: string]: number[]; };
    }

    interface Invoke {
        <TResult>(obj: Object, path: PathLocation, ...args: any[]): TResult[];
    }

    interface Keys {
        (obj: Object): string[];
    }

    interface MapKeys {
        <T>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => string>): _Obj<T>;
    }

    interface MapValues {
        <T, TResult>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): _Obj<Rest>;
    }

    interface Omit {
        <TResult>(obj: Object, props?: string | string[]): TResult;
        <TResult>(obj: Object, ...props: string[]): TResult;
    }

    interface OmitBy {
        <T, TResult>(obj: _Obj<T>, predicate?: Iteratee<(value: T, key: string) => boolean>): TResult;
    }

    interface Set {
        <T, TObj>(obj: TObj, path: PathLocation, value: T): TObj;
    }

    interface SetWith {
        <T, TObj>(obj: TObj, path: PathLocation, value: T, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    interface ToPairs {
        <T>(obj: { [index: number]: T }): [number, T][];
        <T>(obj: { [index: string]: T }): [string, T][];
    }

    interface Transform {
        <T, TObj, TAcc>(obj: TObj, iteratee?: Iteratee<(acc: TAcc, value: any, key: string, obj: TObj) => any>): TAcc;
    }

    interface Unset {
        (obj: Object, path: PathLocation): boolean;
    }

    interface Values {
        <T>(obj: { [index: string]: T; }): T[];
        <T>(obj: { [index: number]: T; }): T[];
    }
}

namespace Static {
    var assign: Types.Assign;
    var assignIn: Types.Assign;
    var assignWith: Types.AssignWith;
    var assignInWith: Types.AssignWith;
    var at: Types.At;
    function create<T, P>(prototype: T, properties?: P): T & P;
    function create<TResult>(prototype: any, properties?: any): TResult;
    var defaults: Types.Assign;
    var defaultsDeep: Types.Assign;
    var extend: Types.Assign;
    var findKey: Types.FindKey;
    var findLastKey: Types.FindKey;
    var forIn: Types.ForIn;
    var forInRight: Types.ForIn;
    var forOwn: Types.ForIn;
    var forOwnRight: Types.ForIn;
    var functions: Types.Functions;
    var functionsIn: Types.Functions;
    var get: Types.Get;
    var has: Types.Has;
    var hasIn: Types.Has;
    function invert<TResult>(obj: Object): TResult;
    var invoke: Types.Invoke;
    var keys: Types.Keys;
    var keysIn: Types.Keys;
    var mapKeys: Types.MapKeys;
    var merge: Types.Assign;
    var mergeWith: Types.AssignWith;
    var omit: Types.Omit;
    var omitBy: Types.OmitBy;
    var pick: Types.Omit;
    var pickBy: Types.OmitBy;
    var result: Types.Get;
    var set: Types.Set;
    var setWith: Types.SetWith;
    var toPairs: Types.ToPairs;
    var toPairsIn: Types.ToPairs;
    var transform: Types.Transform;
    var unset: Types.Unset;
    var values: Types.Values;
    var valuesIn: Types.Values;
}
