import { getMyArticle, getMyProfile } from './fetcher';

const greet = (name: string, callback?: (message: string) => void): void =>
  callback?.(`Hello! ${name}.`);

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

const getMyArticleLinksByCategory = async (
  category: string,
): Promise<{ title: string; link: string }[]> => {
  // データを取得する関数(Web APIクライアント)
  const data = await getMyArticle();

  // 取得したデータのうち、指定したタグが含まれる記事のに絞り込む
  const articles = data.articles.filter((article) =>
    article.tags.includes(category),
  );

  if (!articles.length) {
    // 該当記事がない場合は空配列を返す
    return [];
  }

  return articles.map((article) => ({
    title: article.title,
    link: `/articles/${article.id}`,
  }));
};

export { greet, sayGoodBye, getGreet, getMyArticleLinksByCategory };
