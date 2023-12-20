import { useState, type ComponentProps, type FormEvent } from 'react';

import { ContactNumber } from './ContactNumber';
import { DeliveryAddress } from './DeliveryAddress';
import { PastDeliveryAddress } from './PastDeliveryAddress';
import { RegisterDeliveryAddress } from './RegisterDeliveryAddress';

type AddressOption = ComponentProps<'option'> & {
  id: string;
};

type Props = {
  deliveryAddress?: AddressOption[];
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ deliveryAddress, onSubmit }: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined,
  );

  return (
    <form onSubmit={onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {deliveryAddress?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress title="新しいお届け先" />
          ) : (
            <PastDeliveryAddress
              disabled={registerNew === undefined}
              options={deliveryAddress}
            />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
    </form>
  );
};

export { Form, type AddressOption };
