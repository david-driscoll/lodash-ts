namespace Types {
    export interface Attempt {
        <T, R>(func: (t1: T) => R, t1: T): R | Error;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T, t2: T2): R | Error;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2, t3: T3): R | Error;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3, t4: T4): R | Error;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): R | Error;
        <R>(func: (...args: any[]) => R, ...args: any[]): R | Error;
    }

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
        <R extends Function>(...funcs: Function[]): R;
    }

    export interface IterateeMethod {
        <T extends Function>(func: T): (arg: T) => boolean;
        (): (arg: any) => boolean;
        <T>(matches: Property<T>): (arg: T) => boolean;
        <T>(matches: Matches<T>): (arg: T) => boolean;
        <T, K extends keyof T>(matchesProperty: MatchesProperty<T, K>): (arg: T) => boolean;
    }

    export interface Over {
        <T, R>(...funcs: ((t1: T) => R)[]): (t1: T) => R[];
        <T, T2, R>(...funcs: ((t1: T, t2: T2) => R)[]): (t1: T, t2: T2) => R[];
        <T, T2, T3, R>(...funcs: ((t1: T, t2: T2, t3: T3) => R)[]): (t1: T, t2: T2, t3: T3) => R[];
        <T, T2, T3, T4, R>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4) => R[];
        <T, T2, T3, T4, T5, R>(...funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R[];
        <T, R>(funcs: ((t1: T) => R)[]): (t1: T) => R[];
        <T, T2, R>(funcs: ((t1: T, t2: T2) => R)[]): (t1: T, t2: T2) => R[];
        <T, T2, T3, R>(funcs: ((t1: T, t2: T2, t3: T3) => R)[]): (t1: T, t2: T2, t3: T3) => R[];
        <T, T2, T3, T4, R>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4) => R[];
        <T, T2, T3, T4, T5, R>(funcs: ((t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R)[]): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R[];
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
        <T, R>(path: keyof T, t1: T): (obj: any) => R;
        <T, R>(path: PathLocation, t1: T): (obj: any) => R;
        <T, T2, R>(path: keyof T, t1: T, t2: T2): (obj: any) => R;
        <T, T2, R>(path: PathLocation, t1: T, t2: T2): (obj: any) => R;
        <T, T2, T3, R>(path: keyof T, t1: T, t2: T2, t3: T3): (obj: any) => R;
        <T, T2, T3, R>(path: PathLocation, t1: T, t2: T2, t3: T3): (obj: any) => R;
        <T, T2, T3, T4, R>(path: keyof T, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => R;
        <T, T2, T3, T4, R>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4): (obj: any) => R;
        <T, T2, T3, T4, T5, R>(path: keyof T, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => R;
        <T, T2, T3, T4, T5, R>(path: PathLocation, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (obj: any) => R;
        <T, R>(path: keyof T, ...args: any[]): (obj: any) => R;
        <R>(path: PathLocation, ...args: any[]): (obj: any) => R;
    }

    export interface MethodOf {
        <T, R>(obj: any, t1: T): (path: keyof T | PathLocation) => R;
        <T, T2, R>(obj: any, t1: T, t2: T2): (path: keyof T | PathLocation) => R;
        <T, T2, T3, R>(obj: any, t1: T, t2: T2, t3: T3): (path: keyof T | PathLocation) => R;
        <T, T2, T3, T4, R>(obj: any, t1: T, t2: T2, t3: T3, t4: T4): (path: keyof T | PathLocation) => R;
        <T, T2, T3, T4, T5, R>(obj: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): (path: keyof T | PathLocation) => R;
        <R>(obj: any, ...args: any[]): (path: PathLocation) => R;
    }
}

interface IStatic {
    attempt: Types.Attempt;

    bindAll<T>(object: T, ...methodNames: Types.Property<T>[]): T;

    cond<T, R>(array: [(arg: T) => boolean, (arg: T) => R][]): R;

    conforms<U>(arg: {[P in keyof U]?: (obj: U) => boolean }): (arg: U) => boolean;

    constant<T>(value: T): () => T;

    flow: Types.Flow;
    flowRight: Types.Flow;

    identity<T>(value: T, ...args: any[]): T;

    iteratee: Types.IterateeMethod;

    matches<T, O>(obj: T): (obj: O) => boolean;
    matchesProperty<O>(path: Types.PathLocation, value: any): (obj: O) => boolean;

    method: Types.Method;

    methodOf: Types.MethodOf;

    mixin<TObject, TSource>(obj: TObject, source: TSource, options?: { chain?: boolean }): TObject & TSource;
    mixin<TSource>(source: TSource, options?: { chain?: boolean }): IStatic & TSource;

    noConflict(): IStatic;

    noop(...args: any[]): void;

    nthArg<R>(num?: number): R;

    over: Types.Over;

    overEvery: Types.OverEveryORSome;
    overSome: Types.OverEveryORSome;

    property<R>(path: Types.PathLocation): (object: any) => R;
    property<T, K extends keyof T>(path: K): (object: T) => T[K];
    propertyOf<T, K extends keyof T>(object: T): {
        (path: K): T[K];
        <R>(path: Types.PathLocation): R;
    };

    range: Types.Range;
    rangeRight: Types.Range;

    runInContext(context?: any): IStatic;

    times<R>(n: number, iteratee: (num: number) => R): R[];
    times(n: number): number[];

    toPath(value: string): string[];

    uniqueId(prefix?: string): string;

    now(): number;

    stubArray(): any[];
    stubArray<T>(): T[];

    stubFalse(): false;
    stubTrue(): true;

    stubObject(): {};
    stubObject<T extends Object>(): T;

    stubString(): "";
}
