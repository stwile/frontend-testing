const ContactNumber = () => (
  <fieldset>
    <legend>連絡先</legend>
    <div>
      <label htmlFor="phoneNumber">
        電話番号
        <input type="text" name="phoneNumber" />
      </label>
    </div>
    <div>
      <label htmlFor="name">
        お名前
        <input type="text" name="name" />
      </label>
    </div>
  </fieldset>
);

export { ContactNumber };
