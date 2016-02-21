declare namespace Types {
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

interface Static {
    templateSettings: Types.TemplateSettings;
    VERSION: string;

    camelCase: Types.StringMethod;
    capitalize: Types.StringMethod;
    deburr: Types.StringMethod;
    endsWith: Types.WithStringMethod;
    escape: Types.StringMethod;
    escapeRegExp: Types.StringMethod;
    kebabCase: Types.StringMethod;
    lowerCase: Types.StringMethod;
    lowerFirst: Types.StringMethod;
    pad: Types.PadStringMethod;
    padEnd: Types.PadStringMethod;
    padStart: Types.PadStringMethod;
    parseInt(str: string, radix?: number): number;
    repeat(str?: string, num?: number): string;
    replace(str: string, pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string;
    replace(pattern: RegExp | string, replacement: string | ((substring: string, ...args: any[]) => string)): string;
    snakeCase: Types.StringMethod;
    split(str: string, separator: string | RegExp, limit?: number): string[];
    split(separator: string | RegExp, limit?: number): string[];
    startCase: Types.StringMethod;
    startsWith: Types.WithStringMethod;
    template<T>(str?: string, options?: Types.TemplateOptions): (ctx: T) => string;
    toLower: Types.StringMethod;
    toUpper: Types.StringMethod;
    trim: Types.TrimStringMethod;
    trimEnd: Types.TrimStringMethod;
    trimStart: Types.TrimStringMethod;
    truncate(str?: string, options?: Types.TruncateOptions): string;
    unescape: Types.StringMethod;
    upperCase: Types.StringMethod;
    upperFirst: Types.StringMethod;
    words(str?: string, pattern?: string | RegExp): string[];
}