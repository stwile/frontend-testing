import { useId, useState } from 'react';

import { Agreement } from './Agreement';
import { InputAccount } from './InputAccount';

const Form = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();

  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>新規アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <div>
        <button type="submit" disabled={!checked}>
          サインアップ
        </button>
      </div>
    </form>
  );
};

export { Form };
