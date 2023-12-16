import { ArticleListItem, type ItemProps } from './ArticleListItem';

type Props = {
  items: ItemProps[];
};

const ArticleList = ({ items }: Props) => (
  <div>
    <h2>記事一覧</h2>
    {items.length ? (
      <ul>
        {items.map((item) => (
          <ArticleListItem id={item.id} title={item.title} body={item.body} />
        ))}
      </ul>
    ) : (
      <p>投稿記事がありません</p>
    )}
  </div>
);

export { ArticleList };
