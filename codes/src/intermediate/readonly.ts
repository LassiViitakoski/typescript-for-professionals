type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 0,
  y: 0,
};

/** This is not allowed because of readonly property */
// @ts-ignore
point.x = 1;
point.y = 1;

class Animal {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal('sheep');

/** This is not allowed with readonly keyword */
// @ts-ignore
sheep.name = 'wolf';
