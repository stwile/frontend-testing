const wait = (duration: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });

export { wait };
