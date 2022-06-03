export type Person = {
  displayName: string;
  email: string;
};

export type PersonDictionary = {
  [username: string]: Person;
};

const persons: PersonDictionary = {
  jane: { displayName: 'Jane Doe', email: 'jane@example.com' },
};

persons['john'] = { displayName: 'John Doe', email: 'john@example.com' };

delete persons['john'];
