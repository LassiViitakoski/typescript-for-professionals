type Person2 = {
  name: string;
  dateOfBirth?: Date;
};

function loadPerson(): Person2 | undefined {
  return { name: 'Lassi' };
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;

  throw new TypeError('Value is not a Date');
}

const maybePerson = loadPerson();
assert(maybePerson != null, 'could not load person');
assertDate(maybePerson.dateOfBirth);

console.log('Name:', maybePerson.name);
console.log('Date of Birth:', maybePerson.dateOfBirth.toISOString());

// In Application code use
// * User Defined Type Guards

// In Application tests
// * Assertion functions because unhandled errors cause test to fail
