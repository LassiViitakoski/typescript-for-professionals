type CardinalDirection = 'North' | 'East' | 'South' | 'West';

const move = (distanceMeters: number, direction: CardinalDirection) => {
  console.log(`Moving ${distanceMeters} meters towards ${direction}`);
};

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

const rollDice = () => {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
};

move(10, 'West');
