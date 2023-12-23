import type { PostNewDeliveryAddress } from './types';

const fetcher = <T>(endpoint: string, option?: RequestInit): Promise<T> => {
  const result = fetch(endpoint, { ...option })
    .then<T>((res) => {
      const data = res.json();
      if (!res.ok) {
        throw data;
      }

      return data;
    })
    .catch();

  return result;
};

const host = (path: string) => `https://myapi.testing.com${path}`;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const postMyAddress = (
  values: PostNewDeliveryAddress,
): Promise<{ result: string }> =>
  fetcher<{ result: string }>(host('/address'), {
    method: 'POST',
    headers,
    body: JSON.stringify(values),
  });

export { postMyAddress };
