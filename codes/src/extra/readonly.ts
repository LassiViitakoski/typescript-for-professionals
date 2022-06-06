const makeReadonly = <T>(object: T): Readonly<T> => {
  return Object.freeze({ ...object });
};

const editablePoint = { x: 10 };

const readonlyPoint = makeReadonly(editablePoint);
