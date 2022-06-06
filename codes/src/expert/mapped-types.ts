export type Point = {
  x: number;
  y: number;
  z: number;
};

// We can write this with mapped types
// export type ReadonlyPoint = {
//   readonly x: number;
//   readonly y: number;
//   readonly z: number;
// };

// [Item in 'x' | 'y' | 'z'] loops over x, y and z
// export type ReadonlyPoint = {
//   readonly [Item in 'x' | 'y' | 'z']: number;
// };

// Same thing wrote a little bit cleaner
// export type ReadonlyPoint = {
//   readonly [Item in keyof Point]: Point[Item];
// };

// Same thing wrote as generic
// No need for writing this -> Comes with typescript compiler
// export type Readonly<T> = {
//   readonly [Item in keyof T]: T[Item];
// };

const center: Readonly<Point> = {
  x: 0,
  y: 0,
  z: 0,
};

// Gives error
// center.x = 10;
