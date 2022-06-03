function reverse(string: string): string;
function reverse(stringArray: string[]): string[];

function reverse(stringOrArray: string | string[]) {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join('');
  } else {
    return stringOrArray.slice().reverse();
  }
}

type MakeDate = {
  (timestamp: number): Date;
  (year: number, month: number, day: number): Date;
};

const makeDate: MakeDate = (
  timestampOrYear: number,
  month?: number,
  day?: number
): Date => {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
};

const hello = reverse('hello');
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']);

const firstDate = makeDate(2000, 1, 1);
const secondDate = makeDate(1999);
// const compileTimeError = makeDate(2000, 12);
