import { getMyArticles, getMyProfile } from './fetcher';

import type { Greet } from './type';

const greet = (
  name: string,
  callback?: (message: string) => string,
): string => {
  if (callback) {
    return callback(`Hello! ${name}.`);
  }

  return `Hello! ${name}.`;
};

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
  const data = await getMyArticles();

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

const greetByTime = (): Greet => {
  const hour = new Date().getHours();
  if (hour < 12) {
    return 'おはよう';
  }
  if (hour < 18) {
    return 'こんにちは';
  }

  return 'こんばんは';
};

export {
  greet,
  sayGoodBye,
  getGreet,
  getMyArticleLinksByCategory,
  greetByTime,
};
