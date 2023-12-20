import { ValidationError } from './ValidationError';

const checkPhoneNumber = (value: string) => {
  if (!value.match(/^[0-9-]+$/)) {
    throw new ValidationError();
  }
};

export { checkPhoneNumber };
