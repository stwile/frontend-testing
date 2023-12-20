const handleSubmit =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (callback: (values: any) => void) =>
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const values: { [k: string]: unknown } = {};
      formData.forEach((value, key) => {
        values[key] = value;
      });

      return callback(values);
    };

export { handleSubmit };
