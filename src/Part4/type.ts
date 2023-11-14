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

export { type Profile, type Articles };
