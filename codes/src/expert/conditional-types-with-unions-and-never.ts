const error = (message: string): never => {
  throw new Error(message);
};

// Error
// const notAllowed: never = 'some string';

const allowed: never = error('this is okay');
const example: string = error('I will not return');

// Gets considered as type string
type Verbose = string | never;

/**
 * Exclude null and undefined from T
 */
export type NoEmpty<T> = T extends null | undefined ? never : T;

// type 'string | never' is type string
// string
export type Example = NoEmpty<string | null>;
// string
export type Expanded0 = NoEmpty<string> | NoEmpty<null>;
// Expanded0 opened how typescript treats that syntax
export type Expanded1 =
  | (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string);
