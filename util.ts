namespace Types {
    export interface Flow {
        <A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
        <A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
        <A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
        <A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
        <A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
        <A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
        <A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
        <A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
        <A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
        <A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
        <A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
        <A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
        <A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
        <A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
        <A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
        <A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
        <A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
        <A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
        <A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        <A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        <A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        <A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        <TResult extends Function>(...funcs: Function[]): TResult;
    }

    export interface IterateeMethod {
        <T extends Function>(func: T): T;
        <TResult>(value: string): (object: any) => TResult;
        (func: Object): (object: any) => boolean;
        (): Identity;
    }

    export interface Over {
        <T, TResult>(...funcs: ((t1: T) => TResult)[]): (t1: T) => TResult[];
        <T, T2, TResult>(...funcs: ((t1: T, t2: T2) => TResult)[]): (t1: T, t2: T2) => TResult[];
        <T, T2, T3, TResult>(...funcs: ((t1: T, t2: T2, t3: T3) => TResult)[]): (t1: T, t2: T2, t3: T3) => TResult[];
        <T, T2, T3, T4, TResult>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => TResult)[]): (t1: T, t2: T2, t3: T3, t4: T4) => TResult[];
        <T, T2, T3, T4, T5, TResult>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult[];
        <T, TResult>(funcs: ((t1: T) => TResult)[]): (t1: T) => TResult[];
        <T, T2, TResult>(funcs: ((t1: T, t2: T2) => TResult)[]): (t1: T, t2: T2) => TResult[];
        <T, T2, T3, TResult>(funcs: ((t1: T, t2: T2, t3: T3) => TResult)[]): (t1: T, t2: T2, t3: T3) => TResult[];
        <T, T2, T3, T4, TResult>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => TResult)[]): (t1: T, t2: T2, t3: T3, t4: T4) => TResult[];
        <T, T2, T3, T4, T5, TResult>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult[];
    }

    export interface OverEveryORSome {
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

    export interface Range {
        (start: number, end: number, step?: number): number[];
        (end: number, step?: number): number[];
    }

    export interface Method {
        <T, TResult>(path: PathLocation, t1: T): (obj: any) => TResult;
        <T, T2, TResult>(path: PathLocation, t1: T, t2: T2): (obj: any) => TResult;
        <T, T2, T3, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3): (obj: any) => TResult;
        <T, T2, T3, T4, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => TResult;
        <T, T2, T3, T4, T5, TResult>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => TResult;
        <TResult>(path: PathLocation, ...args: any[]): (obj: any) => TResult;
    }

    export interface MethodOf {
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
