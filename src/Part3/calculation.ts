const MIN = 0;
const MAX = 100;

const checkRange = (value: number): void => {
  if (value < MIN || value > MAX) {
    throw new RangeError(`入力値は${MIN}~${MAX}の間で入力してください`);
  }
};

const add = (a: number, b: number): number => {
  checkRange(a);
  checkRange(b);

  const sum = a + b;
  if (sum > MAX) {
    return MAX;
  }

  return sum;
};

const sub = (a: number, b: number): number => {
  const sum = a - b;
  if (sum < MIN) {
    return MIN;
  }

  return sum;
};

export { add, sub };
