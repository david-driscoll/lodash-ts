namespace Types {
    export interface Assign {
        <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        <TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        <TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        <TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        <TObject>(object: TObject): TObject;
        <R>(...otherArgs: any[]): R;
    }

   export type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;

    export interface AssignWith {
        <TObject, TSource, R>(object: TObject, source: TSource, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, R>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, TSource3, R>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): R;
        <TObject, TSource1, TSource2, TSource3, TSource4, R>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): R;
        <TObject>(object: TObject): TObject;
        <TObject, R>(object: TObject, ...otherArgs: any[]): R;
    }

    export interface At {
        <R>(obj: { [index: number]: any; }, paths: (number | number[])[]): R[];
        <R>(obj: { [index: number]: any; }, ...paths: (number | number[])[]): R[];
        <R>(obj: { [index: string]: any; }, paths: PathLocation[]): R[];
        <R>(obj: { [index: string]: any; }, ...paths: PathLocation[]): R[];
    }

    export interface FindKey {
        <T>(obj: T, iteratee: ObjectPredicate<T>): string;
        <T>(obj: T, iteratee: Property<T>): string;
        <T>(obj: T, iteratee: Matches<T>): string;
        <T>(obj: T, iteratee: MatchesProperty<T>): string;
    }

    export interface ForIn {
        <T>(obj: T, iteratee: (value: T, index: string, collection: T) => boolean | void): T;
    }

    export interface Functions {
        <R extends Function>(obj: any): R[];
    }

    export interface Get {
        <T, K extends keyof T>(obj: T, path: K): T[K];
        <R>(obj: any, path: PathLocation, defaultValue?: R): R;
    }

    export interface Has {
        <T, K extends keyof T>(obj: T, path: K): boolean;
        <T>(obj: T, path: PathLocation): boolean;
    }

    export interface Invert {
        <T>(obj: T): { [P in keyof T]: T[P] };
    }

    export interface InvertBy {
        <T, R extends string>(obj: T, iteratee?: ValuePredicate<T[keyof T], R>): { [p in R]: R[] };
    }

    export interface Invoke {
        <R>(obj: any, path: PathLocation, ...args: any[]): R[];
    }

    export interface Keys {
        <T>(obj: T): keyof T;
    }

    export interface MapKeys {
        <T, R>(obj: T, iteratee: ((value: T[keyof T], index: keyof T, collection: T) => R)): { [x: string]: T[keyof T] };
    }

    export interface MapValues {
        <T, R>(obj: T, iteratee: (value: T[keyof T], index: keyof T, collection: T) => R): { [P in keyof T]: R };
        <T, R>(obj: T, iteratee: string);
    }

    export interface _Pick {
        <T, K extends keyof T>(obj: Object, props?: K[]): Pick<T, K>;
        <R>(obj: Object, props?: PathLocation): R;
        <T, K extends keyof T>(obj: Object, ...props: K[]): Pick<T, K>;
        <R>(obj: Object, ...props: PathLocation[]): R;
    }

    export interface PickBy {
        <T, R>(obj: T, predicate: (value: T, key: string) => boolean): R;
    }

    export interface Omit {
        <R>(obj: Object, props?: PathLocation): R;
        <R>(obj: Object, ...props: PathLocation[]): R;
    }

    export interface OmitBy {
        <T, R>(obj: T, predicate: (value: T, key: string) => boolean): R;
    }

    export interface _Set {
        <T, K extends keyof T>(obj: T, path: K, value: T[K]): T;
        <T, TObj>(obj: TObj, path: PathLocation, value: T): TObj;
    }

    export interface SetWith {
        <T, K extends keyof T>(obj: T, path: K, value: T[K], customizer?: (nsValue: T[K], key: K, nsObject: T) => any): T;
        <T, TObj>(obj: TObj, path: PathLocation, value: T, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface Update {
        <T, K extends keyof T>(obj: T, path: K, updater: (value: T[K]) => T[K]): T;
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any): TObj;
    }

    export interface UpdateWith {
        <T, K extends keyof T>(obj: T, path: K, updater: (value: T[K]) => any, customizer?: (nsValue: T[K], key: K, nsObject: T) => any): T;
        <T, TObj>(obj: TObj, path: PathLocation, updater: (value: T) => any, customizer?: (nsValue: T, key: string, nsObject: TObj) => any): TObj;
    }

    export interface ToPairs {
        <T, K extends keyof T>(obj: T): [K, T[K]][];
        <T>(obj: { [index: number]: T }): [number, T][];
        <K, V>(map: Map<K, V>): [K, V][];
        <V>(set: Set<V>): [number, V][];
    }

    export interface Transform {
        <T, TAcc>(obj: T, iteratee: ((acc: TAcc, value: T[keyof T], key: keyof T, obj: T) => any), acc?: TAcc): TAcc;
    }

    export interface Unset {
        <T, K extends keyof T>(obj: T, path: K): boolean;
        <T>(obj: T, path: PathLocation): boolean;
    }

    export interface Values {
        <T>(obj: { [index: number]: T; }): T[];
        <T>(obj: T): (keyof T)[];
    }
}

interface IStatic {
    assign: Types.Assign;
    assignIn: Types.Assign;
    assignWith: Types.AssignWith;
    assignInWith: Types.AssignWith;
    at: Types.At;
    create<T, P>(prototype: T, properties?: P): T & P;
    create<R>(prototype: any, properties?: any): R;
    defaults: Types.Assign;
    defaultsDeep: Types.Assign;
    entires: Types.ToPairs;
    entiresIn: Types.ToPairs;
    extend: Types.Assign;
    extendWith: Types.AssignWith;
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
    invert: Types.Invert;
    invertBy: Types.InvertBy;
    invoke: Types.Invoke;
    keys: Types.Keys;
    keysIn: Types.Keys;
    mapKeys: Types.MapKeys;
    mapValues: Types.MapValues;
    merge: Types.Assign;
    mergeWith: Types.AssignWith;
    omit: Types.Omit;
    omitBy: Types.OmitBy;
    pick: Types._Pick;
    pickBy: Types.PickBy;
    result: Types.Get;
    set: Types._Set;
    setWith: Types.SetWith;
    toPairs: Types.ToPairs;
    toPairsIn: Types.ToPairs;
    transform: Types.Transform;
    unset: Types.Unset;
    update: Types.Update;
    updateWith: Types.UpdateWith;
    values: Types.Values;
    valuesIn: Types.Values;
}
