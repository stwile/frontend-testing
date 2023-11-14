type Profile = {
  id: string;
  name?: string;
  age: number;
  email: string;
};

const fetcher = <T>(endpoint: string): Promise<T> => {
  const result = fetch(endpoint)
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

const HOST = 'https://myapi.testing.com';

const getMyProfile = (): Promise<Profile> =>
  fetcher<Profile>(`${HOST}/profile`);

export { getMyProfile };
