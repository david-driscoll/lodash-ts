type MemoizedFunction = { cache: {
    delete(key: string): boolean;
    get(key: string): any;
    has(key: string): boolean;
    set(key: string, value: any): any;
} };

declare namespace Types {
    type AfterMethod = <T extends Function>(num: number, func: T) => T;
    type ReturnMethod = <T extends Function>(func: T) => T;
    interface PH {
        _placeholder: any;
    }
    interface ReplacementPlaceholder {
        placeholder: PH;
    }

    interface DebounceOptions {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }

    interface ThrottleOptions {
        leading?: boolean;
        trailing?: boolean;
    }

    interface Defer {
        <T>(func: (t1: T) => any, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, ...args: any[]): number;
    }

    interface Delay {
        <T>(func: (t1: T) => any, wait: number, t1: T): number;
        <T, T2>(func: (t1: T, t2: T2) => any, wait: number, t1: T, t2: T2): number;
        <T, T2, T3>(func: (t1: T, t2: T2, t3: T3) => any, wait: number, t1: T, t2: T2, t3: T3): number;
        <T, T2, T3, T4>(func: (t1: T, t2: T2, t3: T3, t4: T4) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4): number;
        <T, T2, T3, T4, T5>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => any, wait: number, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): number;
        <T extends Function>(func: T, wait?: number, ...args: any[]): number;
    }

    interface Flip {
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t2: T2, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t5: T5, t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <TResult extends Function>(func: Function): TResult;
    }

    interface Memoize {
        Cache: {
            delete(key: string): boolean;
            get(key: string): any;
            has(key: string): boolean;
            set(key: string, value: any): any;
        };
        <T extends Function>(func: T, resolver?: Function): T & MemoizedFunction;
    }

    interface Negate {
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => boolean;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t1: T, t2: T2) => boolean;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t1: T, t2: T2, t3: T3) => boolean;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t1: T, t2: T2, t3: T3, t4: T4) => boolean;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => boolean;
        (func: (...args: any[]) => any): (...args: any[]) => boolean;
    }

    interface OverArgs {
        <T, TResult>(func: (t1: T) => TResult, t1: (t1: T) => T): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: (t1: T) => T, t2: (t2: T2) => T2, t3: (t3: T3) => T3, t4: (t4: T4) => T4, t5: (t5: T5) => T5): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <T extends Function>(func: T, ...args: any[]): T;
    }

    interface Rest {
        <T, TArg, TResult>(func: (t1: T, args: TArg[]) => TResult): (t1: T, ...args: TArg[]) => TResult;
        <T, T2, TArg, TResult>(func: (t1: T, t2: T2, args: TArg[]) => TResult): (t1: T, t2: T2, ...args: TArg[]) => TResult;
        <T, T2, T3, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, ...args: TArg[]) => TResult;
        <T, T2, T3, T4, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, ...args: TArg[]) => TResult;
        <T, T2, T3, T4, T5, TArg, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, args: TArg[]) => TResult): (t1: T, t2: T2, t3: T3, t4: T4, t5: T5, ...args: TArg[]) => TResult;
        <T extends Function>(func: Function, start?: number): T;
    }

    interface Spread {
        <T, TResult>(func: (args: T[]) => TResult): (...args: T[]) => TResult;
        <T extends Function>(func: Function, start?: number): T;
    }

    interface Unary {
        <T, TResult>(func: (t1: T) => TResult): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult): (t1: T) => TResult;
        <TResult extends Function>(func: Function): TResult;
    }

    interface Bind {
        <T, TResult>(func: (t1: T) => TResult, thisArg: any): (t1: T) => TResult;
        <T, TResult>(func: (t1: T) => TResult, thisArg: any, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any): (t1: T, t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: T): (t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, thisArg: any, t1: T, t2: T2): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, thisArg: any, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <TResult extends Function>(func: Function, thisArg: any, ...args: any[]): TResult;
    }

    interface Partial {
        <T, TResult>(func: (t1: T) => TResult, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: PH, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T): (t2: T2) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t1: T, t2: T2): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2): (t1: T, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2, t3: T3): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: PH, t3: T3): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: T, t2: T2, t3: T3): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3): (t4: T4) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t1: T, t2: T2, t3: T3, t4: T4): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2): (t1: T, t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3): (t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3): (t1: T, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3): (t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3): (t1: T, t2: T2, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: T4): (t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: T4): (t1: T, t2: T2, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: T4): (t1: T, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: T4): (t1: T, t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: T4): (t1: T, t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: T4): (t2: T2, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: T4): (t3: T3, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4): (t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: PH, t5: T5): (t1: T, t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: PH, t4: T4, t5: T5): (t1: T, t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: PH, t5: T5): (t1: T, t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: PH, t5: T5): (t1: T, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: PH, t5: T5): (t2: T2, t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: PH, t3: T3, t4: T4, t5: T5): (t1: T, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: PH, t4: T4, t5: T5): (t1: T, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: PH, t5: T5): (t1: T, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: PH, t4: T4, t5: T5): (t2: T2, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: PH, t5: T5): (t2: T2, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: PH, t5: T5): (t3: T3, t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: PH, t2: T2, t3: T3, t4: T4, t5: T5): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: PH, t3: T3, t4: T4, t5: T5): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: PH, t4: T4, t5: T5): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: PH, t5: T5): (t4: T4) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2, t3: T3, t4: T4, t5: T5): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T, t2: T2): (t3: T3, t4: T4, t5: T5) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t1: T): (t2: T2, t3: T3, t4: T4, t5: T5) => TResult;
        <TResult extends Function>(func: Function, ...args: any[]): TResult;
    }

    interface PartialRight {
        <T, TResult>(func: (t1: T) => TResult, t1: T): () => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: PH, t1: T): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: T2): (t1: T) => TResult;
        <T, T2, TResult>(func: (t1: T, t2: T2) => TResult, t2: T2, t1: T): () => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t1: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: PH, t2: T2, t1: T): (t3: T3) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3): (t2: T2, t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, TResult>(func: (t1: T, t2: T2, t3: T3) => TResult, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: PH, t1: T): (t4: T, t2: T2, t3: PH) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: T2, t1: T): (t4: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t2: T2, t3: PH, t1: T): (t4: T, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: PH, t2: T2): (t4: T, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t2: T2): (t4: T, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: T3, t2: T2): (t4: T, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: T2): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: PH, t3: T3, t2: T2, t1: T): (t4: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: PH, t2: T2, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t2: T2, t3: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t2: T2): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, T4, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4) => TResult, t4: T, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4): (t5: T5, t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3): (t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3): (t5: T5, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3): (t4: T4, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3): (t5: T5, t4: T4, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: T2): (t4: T4, t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: T2): (t5: T5, t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: T2): (t5: T5, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: T2): (t5: T5, t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: T2): (t4: T4, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: T2): (t3: T3, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: T2): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: PH, t1: T): (t5: T5, t4: T4, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: PH, t2: T2, t1: T): (t5: T5, t4: T4, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: PH, t1: T): (t5: T5, t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: PH, t1: T): (t5: T5, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: PH, t1: T): (t4: T4, t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: PH, t3: T3, t2: T2, t1: T): (t5: T5, t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: PH, t2: T2, t1: T): (t5: T5, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: PH, t1: T): (t5: T5, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: PH, t2: T2, t1: T): (t4: T4, t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: PH, t1: T): (t4: T4, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: PH, t1: T): (t3: T3, t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: PH, t4: T4, t3: T3, t2: T2, t1: T): (t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: PH, t3: T3, t2: T2, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: PH, t2: T2, t1: T): (t3: T3) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: PH, t1: T): (t2: T2) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4, t3: T3, t2: T2, t1: T): () => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5, t4: T4): (t3: T3, t2: T2, t1: T) => TResult;
        <T, T2, T3, T4, T5, TResult>(func: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => TResult, t5: T5): (t4: T4, t3: T3, t2: T2, t1: T) => TResult;
        <TResult extends Function>(func: Function, ...args: any[]): TResult;
    }

    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }

    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }

    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }

    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }

    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }

    interface Curry {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        <TResult extends Function>(func: Function, arity?: number): TResult;
    }

    interface CurryRight {
        <T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T2, T1, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T3, T2, T1, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): CurriedFunction4<T4, T3, T2, T1, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R): CurriedFunction5<T5, T4, T3, T2, T1, R>;
        <TResult extends Function>(func: Function, arity?: number): TResult;
    }

    interface Rearg {
        <TResult extends Function>(func: Function, indexes: number[]): TResult;
        <TResult extends Function>(func: Function, ...indexes: number[]): TResult;
    }
}

interface IStatic {
    after: Types.AfterMethod;
    ary<T extends Function>(func: T, num?: number): T
    before: Types.AfterMethod;
    bind: Types.Bind;
    bindKey<TResult extends Function>(object: Object, key: string, ...partials: any[]): TResult
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
    partial: Types.Partial;
    partialRight: Types.PartialRight;
    rearg: Types.Rearg;
    rest: Types.Rest;
    spread: Types.Spread;
    throttle<T extends Function>(func: T, wait?: number, options?: Types.ThrottleOptions): T
    unary: Types.Unary;
    wrap<TResult>(value: any, wrapper: Function): TResult
}
