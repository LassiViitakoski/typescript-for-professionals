type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
};

export const Point: PointCreator = class {
  constructor(public x: number, public y: number) {}
};
