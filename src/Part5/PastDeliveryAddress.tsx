import type { AddressOption } from './Form';

export const PastDeliveryAddress = ({
  disabled,
  options,
}: {
  disabled?: boolean;
  options: AddressOption[];
}) => (
  <fieldset disabled={disabled} style={{ opacity: disabled ? 0.3 : 1 }}>
    <legend>過去のお届け先</legend>
    <select name="pastDeliveryAddress">
      {options.map(({ id, ...opt }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <option key={id} {...opt} />
      ))}
    </select>
  </fieldset>
);
