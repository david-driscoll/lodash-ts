type MemoizedFunction = {
    cache: {
        delete(key: string): boolean;
        get(key: string): any;
        has(key: string): boolean;
        set(key: string, value: any): any;
    }
};

namespace Types {
    export type AfterMethod = <T extends Function>(num: number, func: T) => T;
    export type ReturnMethod = <T extends Function>(func: T) => T;
    export interface PH {
        _placeholder: any;
    }
    export interface ReplacementPlaceholder {
        placeholder: PH;
    }

    export interface DebounceOptions {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    export interface ThrottleOptions {
        leading?: boolean;
        trailing?: boolean;
    }

    export interface Defer {
        <T>(func: (t1: T) => any, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, ...args: any[]): number;
    }

    export interface Delay {
        <T>(func: (t1: T) => any, wait: number, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, wait: number, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, wait: number, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, wait?: number, ...args: any[]): number;
    }

    export interface Flip {
        <T, R>(func: (t1: T) => R): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t2: T2, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t4: T4, t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t5: T5, t4: T4, t3: T3, t2: T2, t1: T) => R;
        <R extends Function>(func: Function): R;
    }

    export interface Memoize {
        Cache: {
            delete(key: string): boolean;
            get(key: string): any;
            has(key: string): boolean;
            set(key: string, value: any): any;
        };
        <T extends Function>(func: T, resolver?: Function): T & MemoizedFunction;
    }

    export interface Negate {
        <T, R>(func: (t1: T) => R): (t1: T) => boolean;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t1: T, t2: T2) => boolean;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (func: (...args: any[]) => any): (...args: any[]) => boolean;
    }

    export interface OverArgs {
        <T, R>(func: (t1: T) => R, t1: (t1: T) => T): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: (t1: T) => T, t2: (t2: T2) => T2): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4, t5: (t5: T5) => T5): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <T extends Function>(func: T, ...args: any[]): T;
    }

    export interface Rest {
        <T, TArg, R>(func: (t1: T, args: TArg[]) => R): (t1: T, ...args: TArg[]) => R;
        <T, T2, TArg, R>(func: (t1: T, t2: T2, args: TArg[]) => R): (t1: T, t2: T2, ...args: TArg[]) => R;
        <T, T2, T3, TArg, R>(func: (t1: T, t2: T2, t3: T3, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, ...args: TArg[]) => R;
        <T, T2, T3, T4, TArg, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, t4: T4, ...args: TArg[]) => R;
        <T, T2, T3, T4, T5, TArg, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, args: TArg[]) => R): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, ...args: TArg[]) => R;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Spread {
        <T, R>(func: (args: T[]) => R): (...args: T[]) => R;
        <T extends Function>(func: Function, start?: number): T;
    }

    export interface Unary {
        <T, R>(func: (t1: T) => R): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R): (t1: T) => R;
        <R extends Function>(func: Function): R;
    }

    export interface Bind {
        <R>(func: () => R, thisArg: any): () => R;
        <T, R>(func: (t1: T) => R, thisArg: any): (t1: T) => R;
        <T, R>(func: (t1: T) => R, thisArg: any, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any): (t1: T, t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: PH, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: T): (t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, thisArg: any, t1: T, t2: T2): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T): (t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: T2): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, thisArg: any, t1: T, t2: T2, t3: T3): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <R extends Function>(func: Function, thisArg: any, ...args: any[]): R;
    }

    export interface Partial1 {
        <T, R>(func: (t1: T) => R, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: PH, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T): (t2: T2) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t1: T, t2: T2): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2): (t1: T, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2, t3: T3): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: PH, t3: T3): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T): (t2: T2, t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: T, t2: T2, t3: T3): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3): (t4: T4) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t1: T, t2: T2, t3: T3, t4: T4): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => R;
        <R extends Function>(func: Function, ...args: any[]): R;
    }

    export interface PartialRight {
        <T, R>(func: (t1: T) => R, t1: T): () => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: PH, t1: T): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: T2): (t1: T) => R;
        <T, T2, R>(func: (t1: T, t2: T2) => R, t2: T2, t1: T): () => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t1: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: PH, t2: T2, t1: T): (t3: T3) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3): (t2: T2, t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, R>(func: (t1: T, t2: T2, t3: T3) => R, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: PH, t1: T): (t4: T, t2: T2, t3: PH) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: T2, t1: T): (t4: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t2: T2, t3: PH, t1: T): (t4: T, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: PH, t2: T2): (t4: T, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t2: T2): (t4: T, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: T3, t2: T2): (t4: T, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: T2): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: PH, t3: T3, t2: T2, t1: T): (t4: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: PH, t2: T2, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t2: T2, t3: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t2: T2): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, T4, R>(func: (t1: T, t2: T2, t3: T3, t4: T4) => R, t4: T, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4): (t5: T5, t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3): (t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3): (t5: T5, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3): (t4: T4, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3): (t5: T5, t4: T4, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: T2): (t4: T4, t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: T2): (t5: T5, t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: T2): (t5: T5, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: T2): (t5: T5, t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: T2): (t4: T4, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: T2): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: PH, t1: T): (t5: T5, t4: T4, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: PH, t2: T2, t1: T): (t5: T5, t4: T4, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: PH, t1: T): (t5: T5, t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: PH, t1: T): (t5: T5, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: PH, t1: T): (t4: T4, t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: PH, t3: T3, t2: T2, t1: T): (t5: T5, t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: PH, t2: T2, t1: T): (t5: T5, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: PH, t1: T): (t5: T5, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: PH, t2: T2, t1: T): (t4: T4, t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: PH, t1: T): (t4: T4, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: PH, t4: T4, t3: T3, t2: T2, t1: T): (t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: PH, t3: T3, t2: T2, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: PH, t2: T2, t1: T): (t3: T3) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: PH, t1: T): (t2: T2) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4, t3: T3, t2: T2, t1: T): () => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5, t4: T4): (t3: T3, t2: T2, t1: T) => R;
        <T, T2, T3, T4, T5, R>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, t5: T5): (t4: T4, t3: T3, t2: T2, t1: T) => R;
        <R extends Function>(func: Function, ...args: any[]): R;
    }

    export interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    export interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    export interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    export interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    export interface Curry {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        <R extends Function>(func: Function, arity?: number): R;
    }

    export interface CurryRight {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T2, T1, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T3, T2, T1, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T4, T3, T2, T1, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T5, T4, T3, T2, T1, R>;
        <R extends Function>(func: Function, arity?: number): R;
    }

    export interface Rearg {
        <R extends Function>(func: Function, indexes: number[]): R;
        <R extends Function>(func: Function, ...indexes: number[]): R;
    }
}

interface IStatic {
    after: Types.AfterMethod;
    ary<T extends Function>(func: T, num?: number): T
    before: Types.AfterMethod;
    bind: Types.Bind;
    bindKey<R extends Function>(object: Object, key: string, ...partials: any[]): R
    curry: Types.Curry;
    curryRight: Types.CurryRight;
    debounce<T extends Function>(func: T, wait?: number, options?: Types.DebounceOptions): T
    defer: Types.Defer;
    delay: Types.Delay;
    flip: Types.Flip;
    memoize: Types.Memoize;
    negate: Types.Negate;
    once: Types.ReturnMethod;
    overArgs: Types.OverArgs;
    partial: Types.Partial1;
    partialRight: Types.PartialRight;
    rearg: Types.Rearg;
    rest: Types.Rest;
    spread: Types.Spread;
    throttle<T extends Function>(func: T, wait?: number, options?: Types.ThrottleOptions): T
    unary: Types.Unary;
    wrap<T, R>(value: T, wrapper: (value: T) => R): () => R;
    wrap<T, R, A1>(value: T, wrapper: (value: T, arg1: A1) => R): (arg1: A1) => R;
    wrap<T, R, A1, A2>(value: T, wrapper: (value: T, arg1: A1, arg2: A2) => R): (arg1: A1, arg2: A2) => R;
    wrap<T, R, A1, A2, A3>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3) => R): (arg1: A1, arg2: A2, arg3: A3) => R;
    wrap<T, R, A1, A2, A3, A4>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3, arg4: A4) => R): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => R;
    wrap<T, R, A1, A2, A3, A4, A5>(value: T, wrapper: (value: T, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => R): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => R;

}
