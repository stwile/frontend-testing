import type { Article, ArticleInput, Articles, Profile } from './type';

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

const postMyArticle = (input: ArticleInput): Promise<Article> => {
  const result = fetch(`${HOST}/article`, {
    method: 'POST',
    body: JSON.stringify(input),
  })
    .then<Article>((res) => {
      const data = res.json();
      if (!res.ok) {
        throw data;
      }

      return data;
    })
    .catch();

  return result;
};

export { getMyProfile, getMyArticles, postMyArticle };
