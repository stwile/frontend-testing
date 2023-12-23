import type { ChangeEventHandler } from 'react';

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Agreement = ({ onChange }: Props) => {
  const checkBoxName = 'check';

  return (
    <fieldset>
      <legend>利用規約の同意</legend>
      <label htmlFor={checkBoxName}>
        <input type="checkbox" name={checkBoxName} onChange={onChange} />
        当サービスの<a href="/terms">利用規約</a>を確認し、これに同意します
      </label>
    </fieldset>
  );
};

export { Agreement };
