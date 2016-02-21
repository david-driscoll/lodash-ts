declare namespace Types {
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
        <T, TResult>(obj: _Obj<T>, iteratee?: Iteratee<(value: T, index: string, collection: _Obj<T>) => TResult>): _Obj<RestSignature>;
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

interface Static {
    assign: Types.Assign;
    assignIn: Types.Assign;
    assignWith: Types.AssignWith;
    assignInWith: Types.AssignWith;
    at: Types.At;
    create<T, P>(prototype: T, properties?: P): T & P;
    create<TResult>(prototype: any, properties?: any): TResult;
    defaults: Types.Assign;
    defaultsDeep: Types.Assign;
    extend: Types.Assign;
    findKey: Types.FindKey;
    findLastKey: Types.FindKey;
    forIn: Types.ForIn;
    forInRight: Types.ForIn;
    forOwn: Types.ForIn;
    forOwnRight: Types.ForIn;
    functions: Types.Functions;
    functionsIn: Types.Functions;
    get: Types.Get;
    has: Types.Has;
    hasIn: Types.Has;
    invert<TResult>(obj: Object): TResult;
    invoke: Types.Invoke;
    keys: Types.Keys;
    keysIn: Types.Keys;
    mapKeys: Types.MapKeys;
    merge: Types.Assign;
    mergeWith: Types.AssignWith;
    omit: Types.Omit;
    omitBy: Types.OmitBy;
    pick: Types.Omit;
    pickBy: Types.OmitBy;
    result: Types.Get;
    set: Types.Set;
    setWith: Types.SetWith;
    toPairs: Types.ToPairs;
    toPairsIn: Types.ToPairs;
    transform: Types.Transform;
    unset: Types.Unset;
    values: Types.Values;
    valuesIn: Types.Values;
}