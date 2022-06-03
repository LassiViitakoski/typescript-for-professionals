const reverseSorted = (input: readonly number[]): number[] => {
  // If we call this -> the original array will mutate too
  // readonly keyword makes that to raise error
  // return input.sort().reverse()

  // slice()-method created copy of array -> original won't be mutated
  return input.slice().sort().reverse();
};

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

export type Point = readonly [number, number];

const move = (point: Point, x: number, y: number): Point => {
  // Same thing here with mutation
  // point[0] += x;
  // point[1] += y;
  // return point;

  return [point[0] + x, point[1] + y];
};

const point: Point = [0, 0];
const moved = move(point, 10, 10);
