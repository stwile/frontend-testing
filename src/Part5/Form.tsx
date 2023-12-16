type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Form = ({ name, onSubmit }: Props) => (
  <form>
    <input
      type="text"
      value={name}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    />
    <h2>アカウント情報</h2>
    <p>{name}</p>
    <div>
      <button type="submit">編集する</button>
    </div>
  </form>
);

export { Form };
