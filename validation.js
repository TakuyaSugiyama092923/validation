function emailValidation() {
    const form = document.getElementById('form'); //<form>タグで指定した要素をjavaScriptで操作する為に取得
    const email = form.email;
    const emailConfirm = form.email_confirm;
　　　　
    // リアルタイムで入力の変更を監視する
    emailConfirm.addEventListener('input', () => {
      const existingAlert = document.querySelector('.alert');
      if (email.value !== emailConfirm.value) { //Eメール欄の入力値==Eメール（確認）欄の入力  結果：値が異なる場合（不一致）、エラーを表示する
        if (!existingAlert) {
           //エラーメッセージの作成
            const element = document.createElement('p'); //Pタグの作成
          const message = document.createTextNode("Eメールが一致しません");//メッセージテキストの作成
          element.appendChild(message);//Pタグにメッセージを挿入
          element.classList.add("alert");//pタグに(alert)を追加
          form.appendChild(element);
        }
        emailConfirm.style.borderColor = "red";
      } else {
        if (existingAlert) {
          form.removeChild(existingAlert);
        }
        emailConfirm.style.borderColor = "";
      }
    });
  
    // フォーム送信時のバリデーション
    form.addEventListener('submit', e => {   //submit:イベントはフォーム送信時に発生する
      e.preventDefault();//e.preventdefault()はフォームのデフォルト動作（ページ遷移）を無効化する。
      if (email.value !== emailConfirm.value) { //form.email.value:Eメールの値を入力値　form.emeil_confim.value:「Eメール（確認用）」欄の入力値
        const existingAlert = document.querySelector('.alert');d
        if (!existingAlert) {
          const element = document.createElement('p');
          const message = document.createTextNode("Eメールが一致しません");
          element.appendChild(message);
          element.classList.add("alert");
          form.appendChild(element);
        }
        setTimeout(() => {
          const alertToRemove = document.querySelector('.alert');//3000msec後にエラーメッセージ(element)をフォームから削除する
          if (alertToRemove) {
            form.removeChild(alertToRemove);
          }
        }, 3000);
      } else {
        alert("フォームが正常に送信されました");
        form.submit();//バリデーションが成功した場合フォームを送信する
      }
    });
  }
  
  window.onload = emailValidation;   //ページが読み込まれたらemailvalidation関数を実行する様にしている
  