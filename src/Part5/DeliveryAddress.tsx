type Props = {
  title?: string;
};

const DeliveryAddress = ({ title = 'お届け先' }: Props) => (
  <fieldset>
    <legend>{title}</legend>
    <div>
      <label htmlFor="postalCode">
        郵便番号
        <input type="text" name="postalCode" placeholder="167-0051" />
      </label>
    </div>
    <div>
      <label htmlFor="prefectures">
        都道府県
        <input type="text" name="prefectures" placeholder="東京都" />
      </label>
    </div>
    <div>
      <label htmlFor="municipalities">
        市区町村
        <input type="text" name="municipalities" placeholder="杉並区荻窪1" />
      </label>
    </div>
    <div>
      <label htmlFor="streetNumber">
        番地番号
        <input type="text" name="streetNumber" placeholder="00-00" />
      </label>
    </div>
  </fieldset>
);

export { DeliveryAddress };
