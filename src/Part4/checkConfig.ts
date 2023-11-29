const config = {
  mock: true,
  feature: {
    spy: true,
  },
};

const checkConfig = (callback?: (payload: object) => void): void => {
  callback?.(config);
};

export { checkConfig };
