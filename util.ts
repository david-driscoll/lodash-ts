namespace Types {
    interface Flow {
        <T, V>(func?: (t1: T) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, V>(func?: (t1: T, t2: T2) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, V>(func?: (t1: T, t2: T2, t3: T3) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, T4, V>(func?: (t1: T, t2: T2, t3: T3, t4: T4) => V, ...funcs: ((value: V) => V)[]): V;
        <T, T2, T3, T4, T5, V>(func?: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => V, ...funcs: ((value: V) => V)[]): V;
        <F extends Function, V>(func?: F, ...funcs: ((value: V) => V)[]): V;
        <V>(func?: Function, ...funcs: ((value: V) => V)[]): V;
        <V>(funcs: ((value: V) => V)[]): V;
    }

    interface IterateeMethod {
        <T extends Function>(func: T): T;
        <TResult>(value: string): (object: any) => TResult;
        (func: Object): (object: any) => boolean;
        (): Identity;
    }

    interface Over {
        <TResult>(s1: string): (object: any) => [string];
        <TResult>(s1: string, s2: string): (object: any) => [string, string];
        <TResult>(s1: string, s2: string, s3: string): (object: any) => [string, string, string];
        <TResult>(s1: string, s2: string, s3: string, s4: string): (object: any) => [string, string, string, string];
        <TResult>(s1: string, s2: string, s3: string, s4: string, s5: string): (object: any) => [string, string, string, string, string];
        <TResult>(...funcs: any[]): (...args: any[]) => TResult[];
        <TResult>(funcs: any[]): (...args: any[]) => TResult[];

        (o1: any): (object: any) => [boolean];
        (o1: any, o2: any): (object: any) => [boolean, boolean];
        (o1: any, o2: any, o3: any): (object: any) => [boolean, boolean, boolean];
        (o1: any, o2: any, o3: any, o4: any): (object: any) => [boolean, boolean, boolean, boolean];
        (o1: any, o2: any, o3: any, o4: any, o5: any): (object: any) => [boolean, boolean, boolean, boolean, boolean];

        <TResult>(...funcs: ((...args: any[]) => TResult)[]): (object: any) => TResult[];
        <TResult>(...funcs: string[]): (object: any) => TResult[];

        <TResult>(funcs: ((...args: any[]) => TResult)[]): (object: any) => TResult[];
        <TResult>(funcs: string[]): (object: any) => TResult[];
    }

    interface OverEveryORSome {
        <T>(...funcs: ((t1: T) => boolean)[]): (t1: T) => boolean;
        <T, T2>(...funcs: ((t1: T, t2: T2) => boolean)[]): (t1: T, t2: T2) => boolean;
        <T, T2, T3>(...funcs: ((t1: T, t2: T2, t3: T3) => boolean)[]): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => boolean)[]): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (...funcs: ((...args: any[]) => boolean)[]): (object: any) => boolean;
        (...funcs: string[]): (object: any) => boolean;
        (...funcs: any[]): (object: any) => boolean;
        (funcs: ((...args: any[]) => boolean)[]): (object: any) => boolean;
        (funcs: string[]): (object: any) => boolean;
        (funcs: any[]): (object: any) => boolean;
    }

    interface Range {
        (start: number, end: number, step?: number): number[];
        (end: number, step?: number): number[];
    }

    interface Method {
        <T, TResult>(path: PathLocation, t1: T): (obj: any) => TResult;
        <T, T2, TResult>(path: PathLocation, t1: T, t2: T2): (obj: any) => TResult;
        <T, T2, T3, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3): (obj: any) => TResult;
        <T, T2, T3, T4, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => TResult;
        <T, T2, T3, T4, T5, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => TResult;
        <TResult>(path: PathLocation, ...args: any[]): (obj: any) => TResult;
    }

    interface MethodOf {
        <T, TResult>(obj: any, t1: T): (path: PathLocation) => TResult;
        <T, T2, TResult>(obj: any, t1: T, t2: T2): (path: PathLocation) => TResult;
        <T, T2, T3, TResult>(obj: any, t1: T, t2: T2, t3: T3): (path: PathLocation) => TResult;
        <T, T2, T3, T4, TResult>(obj: any, t1: T, t2: T2, t3: T3, t4: T4): (path: PathLocation) => TResult;
        <T, T2, T3, T4, T5, TResult>(obj: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (path: PathLocation) => TResult;
        <TResult>(obj: any, ...args: any[]): (path: PathLocation) => TResult;
    }
}

interface IStatic {
    attempt<T, TResult>(func: (t1: T) => TResult, t1: T): TResult | Error;
    attempt<T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T, t2: T2): TResult | Error;
    attempt<T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2, t3: T3): TResult | Error;
    attempt<T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3, t4: T4): TResult | Error;
    attempt<T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): TResult | Error;
    attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;

    bindAll<T>(object: T, ...methodNames: Types.PathLocation[]): T;

    cond<T, TResult>(array: [(arg: T) => boolean, (arg: T) => TResult][]): TResult;

    conforms<U, T extends { [index: string]: (obj: U) => boolean }>(arg: T): (arg: U) => boolean;

    constant<T>(value: T): () => T;

    flow: Types.Flow;
    flowRight: Types.Flow;

    identity<T>(value: T): T;

    iteratee: Types.IterateeMethod;

    matches<T, O>(obj: T): (obj: O) => boolean;
    matchesProperty<O>(path: Types.PathLocation, value: any): (obj: O) => boolean;

    method: Types.Method;

    methodOf: Types.MethodOf;

    mixin<TObject, TSource>(obj: TObject, source: TSource, options?: { chain?: boolean }): TObject & TSource;
    mixin<TSource>(source: TSource, options?: { chain?: boolean }): IStatic & TSource;

    noConflict(): IStatic;

    noop(...args: any[]): void;

    nthArg<TResult>(num?: number): TResult;

    over: Types.Over;

    overEvery: Types.OverEveryORSome;
    overSome: Types.OverEveryORSome;

    property<TResult>(path: Types.PathLocation): (object: any) => TResult;
    propertyOf<TResult>(object: any): (path: Types.PathLocation) => TResult;

    range: Types.Range;
    rangeRight: Types.Range;

    runInContext(context?: any): IStatic;

    times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
    times(n: number): number[];

    toPath(value: string): string[];

    uniqueId(prefix?: string): string;

    now(): number;

    stubArray(): any[];
    stubArray<T>(): T[];

    stubFalse(): boolean;
    stubTrue(): boolean;

    stubObject(): {};
    stubObject<T extends Object>(): T;

    stubString(): "";
}
