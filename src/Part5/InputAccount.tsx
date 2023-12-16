const InputAccount = () => (
  <fieldset>
    <div>
      <legend>アカウント情報の入力</legend>
      <label htmlFor="email">
        メールアドレス
        <input type="email" name="email" placeholder="example@test.com" />
      </label>
      <label htmlFor="password">
        パスワード
        <input type="password" name="password" placeholder="8文字以上で入力" />
      </label>
    </div>
  </fieldset>
);

export { InputAccount };
