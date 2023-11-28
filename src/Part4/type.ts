type Profile = {
  id: string;
  name?: string;
  age: number;
  email: string;
};

type Article = {
  id: string;
  createdAt: string;
  tags: string[];
  title: string;
  body: string;
};

type Articles = {
  articles: Article[];
};

type ArticleInput = {
  tags: string[];
  title: string;
  body: string;
};

export { type Profile, type Articles, type ArticleInput, type Article };
