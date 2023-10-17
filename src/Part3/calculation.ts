const MIN = 0;
const MAX = 100;

const add = (a: number, b: number): number => {
  if (a < MIN || a > MAX) {
    throw new Error(`入力値は${MIN}~${MAX}の間で入力してください`);
  }

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
