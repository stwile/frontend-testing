class ValidationError extends Error {}

const checkLength = (value: string): void => {
  if (value.length === 0) {
    throw new ValidationError('1文字以上にしてください');
  }
};

export { checkLength };
