export type Persons = Record<string, { name: string; role: string }>;

const persons: Persons = {};

persons['000'] = { name: 'John', role: 'admin' };
persons['111'] = { name: 'Jane', role: 'owner' };

export type Roles = 'admin' | 'owner';

export const peopleWithRoles: Record<Roles, string[]> = {
  owner: ['Jane', 'June'],
  admin: ['John'],
};

// Good use case
// export type PageInfo = {
//   id: string;
//   title: string;
// };

// type PagesVerbose = {
//   home: PageInfo;
//   services: PageInfo;
//   about: PageInfo;
//   contact: PageInfo;
// };

// We can write the same like this
export type Pages = Record<
  'home' | 'services' | 'about' | 'contact',
  { id: string; title: string }
>;
