type IsNumber<T> = T extends number ? 'number' : 'other';
type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

const withNumber: WithNumber = 'number';
const withOther: WithOther = 'other';

export type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends symbol
  ? 'symbol'
  : T extends bigint
  ? 'bigint'
  : T extends Function
  ? 'function'
  : T extends null
  ? 'null'
  : 'object';

const typeName = <T>(t: T): TypeName<T> => {
  if (t === null) return 'null' as TypeName<T>;

  // typeof null returns 'object'
  return typeof t as TypeName<T>;
};

const x = typeName(true);
