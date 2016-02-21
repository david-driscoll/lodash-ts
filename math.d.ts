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

namespace Static {
    var add: Types.Add;
    var ceil: Types.Ceil;
    var floor: Types.Ceil;
    var max: Types.Max;
    var maxBy: Types.MaxBy;
    var mean: Types.Max;
    var min: Types.Max;
    var minBy: Types.MaxBy;
    var round: Types.Ceil;
    var subtract: Types.Add;
    var sum: Types.Max;
    var sumBy: Types.MaxBy;
    function clamp(num: number, upper: number): number;
    function clamp(num: number, lower: number, upper: number): number;
    function inRange(num: number, end: number): boolean;
    function inRange(num: number, start: number, end: number): boolean;
    function random(lower?: number, upper?: number, floating?: boolean): number;
}
