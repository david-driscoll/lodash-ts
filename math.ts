namespace Types {
    export namespace Math {
       export type Operation = (augend: number, addend: number) => number;
       export type Aggregation = (array: number[]) => number;
       export type Rounding = (n: number, precision?: number) => number;
        export interface AggregationBy {
            <T>(array: T[]): T;
            <T>(array: T[], iteratee: Iteratee | PathLocation | ((value: T) => number)): T;
        }
    }
}

interface IStatic {
    add: Types.Math.Operation;
    ceil: Types.Math.Rounding;
    divide: Types.Math.Operation;
    floor: Types.Math.Rounding;
    max: Types.Math.Aggregation;
    maxBy: Types.Math.AggregationBy;
    mean: Types.Math.Aggregation;
    meanBy: Types.Math.AggregationBy;
    min: Types.Math.Aggregation;
    minBy: Types.Math.AggregationBy;
    multiply: Types.Math.Operation;
    round: Types.Math.Rounding;
    subtract: Types.Math.Operation;
    sum: Types.Math.Aggregation;
    sumBy: Types.Math.AggregationBy;
    clamp(num: number, upper: number): number
    clamp(num: number, lower: number, upper: number): number
    inRange(num: number, end: number): boolean
    inRange(num: number, start: number, end: number): boolean
    random(lower?: number, upper?: number, floating?: boolean): number
}
