export type Person = {
  name: string;
  age: number;
  location: string;
};

const john: Person = {
  name: 'John',
  age: 35,
  location: 'Melbourne',
};

const logGet = <Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key] => {
  const value = obj[key];

  console.log('Getting:', key, value);

  return value;
};

const logSet = <Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) => {
  console.log('Setting', key, value);

  obj[key] = value;
};

logGet(john, 'age');
logSet(john, 'name', 'FakeJohn');
