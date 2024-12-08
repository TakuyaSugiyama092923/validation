document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('form'); // フォーム全体を取得
  const email = document.getElementById('email'); // Eメール入力欄
  const emailConfirm = document.getElementById('email_confirm'); // 確認用Eメール入力欄

  // リアルタイムバリデーション
  emailConfirm.addEventListener('input', () => {
    validateEmails(); // 入力のたびにチェック
  });

  // フォーム送信時の最終チェック
  form.addEventListener('submit', (e) => {
    if (!validateEmails()) {
      e.preventDefault(); // フォーム送信を防ぐ
    }
  });

  // バリデーション関数
  function validateEmails() {
    // 既存のエラーメッセージを取得
    let errorMessage = document.querySelector('.error-message');
    if (email.value !== emailConfirm.value) {
      // メッセージがまだ存在しない場合は作成
      if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.textContent = 'Eメールが一致しません';
        errorMessage.classList.add('error-message');
        emailConfirm.parentElement.appendChild(errorMessage); // 確認用Eメールの直下に追加
      }

      // 背景色を変更
      emailConfirm.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';
      return false;
    } else {
      // メッセージが存在すれば削除
      if (errorMessage) {
        errorMessage.remove();
      }

      // 背景色をリセット
      emailConfirm.style.backgroundColor = '';
      return true;
    }
  }
});
