type NameFields = { firstName: string; lastName: string };

const addFullName = <T extends NameFields>(
  obj: T
): T & { fullName: string } => {
  return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
};

const john = addFullName({
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
});
