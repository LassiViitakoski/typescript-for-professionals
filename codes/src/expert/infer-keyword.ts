export type IsArray<T> = T extends Array<any> ? 'array' : 'other';
export type WithArray = IsArray<string[]>;
export type WithNotArray = IsArray<number>;

export type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

export type UnboxedStringArray = UnboxArray<string[]>;
export type UnboxedNumberArray = UnboxArray<number[]>;
export type AnythingElse = UnboxArray<string>;

// Typescript already provides 'ReturnType' type so we don't have to write is ourselves
// export type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
// export type Person = ReturnType<typeof createPerson>;

export const createPerson = (firstName: string, lastName: string) => {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };
};

// const logPerson = (person: Person) => {
//   console.log('Person:', person.firstName, person.lastName, person.fullName);
// };

const logPerson = (person: ReturnType<typeof createPerson>) => {
  console.log('Person:', person.firstName, person.lastName, person.fullName);
};
