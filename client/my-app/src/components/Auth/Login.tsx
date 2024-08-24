import React, { useState } from "react";
import styles from "../../styles/Login.module.scss"; // SCSS Module import
import Link from "next/link"; // Next.js Link import

export default function Login() {
  const [phone, setPhone] = useState("010-"); // 초기값을 "010-"으로 설정
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남기고 필터링

    if (value.length > 3 && value.length <= 7) {
      value = value.slice(0, 3) + "-" + value.slice(3); // "010-XXXX" 형식
    } else if (value.length > 7) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7); // "010-XXXX-XXXX" 형식
    } else {
      value = value.slice(0, 3); // "010" 고정
    }

    setPhone("010" + value.slice(3)); // 앞의 "010-" 고정
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    // 커서를 항상 끝으로 이동
    requestAnimationFrame(() => {
      input.selectionStart = input.selectionEnd = input.value.length;
    });
  };

  const handleSubmit = () => {
    // 로그인 처리 로직
    console.log("Login submitted:", { phone, password, rememberMe });
    // 이후 API 호출 등을 수행
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoPlaceholder}>logo</div>
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        onFocus={handleFocus} // 포커스 시 커서 위치 조정
        required
        className={styles.input}
        placeholder="전화번호"
        maxLength={13} // 최대 길이 제한
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
        placeholder="비밀번호"
      />

      <div className={styles.options}>
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className={styles.checkbox}
          />
          <span className={styles.checkmark}></span>
          자동 로그인
        </label>
      </div>
      <button type="button" onClick={handleSubmit} className={styles.button}>
        로그인
      </button>
      <div className={styles.footer}>
        <Link href="/account/signup" className={styles.signupLink}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
