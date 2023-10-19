const greet = (name: string): string => `Hello! ${name}.`;

const sayGoodBye = (name: string): string => {
  throw new Error(`未実装 ${name}`);
};

export { greet, sayGoodBye };
