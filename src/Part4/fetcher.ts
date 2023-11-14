import type { Articles, Profile } from './type';

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

const getMyArticles = (): Promise<Articles> =>
  fetcher<Articles>(`${HOST}/article`);

export { getMyProfile, getMyArticles as getMyArticle };
