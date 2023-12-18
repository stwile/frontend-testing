type Props = { onChange: (flag: boolean) => void };

const RegisterDeliveryAddress = ({ onChange }: Props) => (
  <fieldset>
    <legend>新しいお届け先を登録しますか？</legend>
    <label htmlFor="registerDeliveryAddress">
      <input
        type="radio"
        name="registerDeliveryAddress"
        value={0}
        onChange={() => {
          onChange(false);
        }}
      />
      いいえ
    </label>
    <label htmlFor="registerDeliveryAddress">
      <input
        type="radio"
        name="registerDeliveryAddress"
        value={1}
        onChange={() => {
          onChange(true);
        }}
      />
      はい
    </label>
  </fieldset>
);

export { RegisterDeliveryAddress };
