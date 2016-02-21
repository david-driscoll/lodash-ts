namespace Types {
    type StringMethod = (str?: string) => string;
    type WithStringMethod = (str?: string, target?: string, position?: number) => boolean;
    type PadStringMethod = (str?: string, length?: number, chars?: string) => string;
    type TrimStringMethod = (str?: string, chars?: string) => string;

    interface TemplateSettings {
        escape?: RegExp;
        evaluate?: RegExp;
        imports?: { [index: string]: any; };
        interpolate?: RegExp;
        variable?: string;
    }

    interface TemplateOptions extends TemplateSettings {
        sourceURL?: string;
    }

    interface TruncateOptions {
        length?: number;
        omission?: string;
        separator?: string | RegExp;
    }
}

namespace Static {
    var templateSettings: Types.TemplateSettings;
    VERSION: string;

    var camelCase: Types.StringMethod;
    var capitalize: Types.StringMethod;
    var deburr: Types.StringMethod;
    var endsWith: Types.WithStringMethod;
    var escape: Types.StringMethod;
    var escapeRegExp: Types.StringMethod;
    var kebabCase: Types.StringMethod;
    var lowerCase: Types.StringMethod;
    var lowerFirst: Types.StringMethod;
    var pad: Types.PadStringMethod;
    var padEnd: Types.PadStringMethod;
    var padStart: Types.PadStringMethod;
    function parseInt(str: string, radix?: number): number;
    function repeat(str?: string, num?: number): string;
    function replace(str: string, pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string;
    function replace(pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string;
    var snakeCase: Types.StringMethod;
    function split(str: string, separator: string | RegExp, limit?: number): string[];
    function split(separator: string | RegExp, limit?: number): string[];
    var startCase: Types.StringMethod;
    var startsWith: Types.WithStringMethod;
    function template<T>(str?: string, options?: Types.TemplateOptions): (ctx: T) => string;
    var toLower: Types.StringMethod;
    var toUpper: Types.StringMethod;
    var trim: Types.TrimStringMethod;
    var trimEnd: Types.TrimStringMethod;
    var trimStart: Types.TrimStringMethod;
    function truncate(str?: string, options?: Types.TruncateOptions): string;
    var unescape: Types.StringMethod;
    var upperCase: Types.StringMethod;
    var upperFirst: Types.StringMethod;
    function words(str?: string, pattern?: string | RegExp): string[];
}
