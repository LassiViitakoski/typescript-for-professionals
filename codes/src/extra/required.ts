// Typescript offers this
// export type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

type PartialPoint = { x?: number; y?: number };
export type Point = Required<PartialPoint>;

export type CircleConfig = {
  color?: string;
  radius?: number;
};

export class Circle {
  // Required: Internally all members will always be present
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    const { color, radius } = config;

    this.config = {
      color: color ?? 'green',
      radius: radius ?? 0,
    };
  }

  draw() {
    // No null checking needed!
    console.log(
      'Drawing a circle.',
      'Color:',
      this.config.color,
      'Radius',
      this.config.radius
    );
  }
}
