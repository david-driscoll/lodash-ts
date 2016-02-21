namespace Types {
    type Add = (augend: number, addend: number) => number;
    type Max = (array: number[]) => number;
    type Ceil = (n: number, precision?: number) => number;
    interface MaxBy {
        <T>(array: T[]): T;
        <T>(array: T[], iteratee: (value: T) => number): T;
        <T>(array: T[], iteratee: PathLocation): T;
        <T>(array: T[], iteratee: any): T;
    }
}

interface Static {
    add: Types.Add;
    ceil: Types.Ceil;
    floor: Types.Ceil;
    max: Types.Max;
    maxBy: Types.MaxBy;
    mean: Types.Max;
    min: Types.Max;
    minBy: Types.MaxBy;
    round: Types.Ceil;
    subtract: Types.Add;
    sum: Types.Max;
    sumBy: Types.MaxBy;
    clamp(num: number, upper: number): number;
    clamp(num: number, lower: number, upper: number): number;
    inRange(num: number, end: number): boolean;
    inRange(num: number, start: number, end: number): boolean;
    random(lower?: number, upper?: number, floating?: boolean): number;
}
