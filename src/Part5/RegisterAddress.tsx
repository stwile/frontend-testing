import { useState } from 'react';

import { Form } from './Form';
import { ValidationError } from './ValidationError';
import { postMyAddress } from './fetchers/fetcher';
import { handleSubmit } from './handleSubmit';
import { checkPhoneNumber } from './validations';

import type { PostNewDeliveryAddress } from './fetchers/types';

const RegisterAddress = () => {
  const [postResult, setPostResult] = useState<string>('');

  return (
    <div>
      <Form
        onSubmit={handleSubmit((values: PostNewDeliveryAddress): void => {
          try {
            checkPhoneNumber(values.contactAddress.phoneNumber);
            postMyAddress(values)
              .then(() => {
                setPostResult('登録しました');
              })
              .catch(() => {
                setPostResult('登録に失敗しました');
              });
          } catch (err) {
            if (err instanceof ValidationError) {
              setPostResult('不正な入力値が含まれています');

              return;
            }
            setPostResult('不明なエラーが発生しました');
          }
        })}
      />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};

export { RegisterAddress };
