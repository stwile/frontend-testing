const wait = (duration: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });

const timeout = (duration: number): Promise<unknown> =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });

export { wait, timeout };
