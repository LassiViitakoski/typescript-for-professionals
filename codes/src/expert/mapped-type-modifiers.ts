import { ClassificationType } from 'typescript';

export type Point = {
  readonly x: number;
  y?: number;
};

// + mark just helps us to read code easier
// - mark deletes example optional demans or readonly demand
// We can add ? mark and every property turns into optional
export type Mapped<T> = {
  +readonly [P in keyof T]-?: T[P];
};

export type Result = Mapped<Point>;

// Don't need to write this by ourselves
// export type Partial<T> = { [P in keyof T]?: T[P] };

export class State<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });

// Partial -> No need to provide x
state.update({ y: 123 });
