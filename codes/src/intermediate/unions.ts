const formatComandLine = (input: string | string[]) => {
  let line = '';

  if (typeof input === 'string') {
    line = input.trim();
  } else {
    line = input.map((x: string) => x.trim()).join('');
  }

  return line;
};

type Padding = number | string;

const padLeft = (value: string, padding: Padding) => {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }

  if (typeof padding === 'string') {
    return padding + value;
  }
};
