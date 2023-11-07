import { getMyProfile } from './fetcher';

const greet = (name: string): string => `Hello! ${name}.`;

const sayGoodBye = (name: string): string => {
  throw new Error(`未実装 ${name}`);
};

const getGreet = async (): Promise<`Hello, ${string}!`> => {
  const data = await getMyProfile();
  if (!data.name) {
    return `Hello, anonymous user!`;
  }

  return `Hello, ${data.name}!`;
};

export { greet, sayGoodBye, getGreet };
