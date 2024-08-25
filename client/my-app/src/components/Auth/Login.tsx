import React, { useState } from "react";
import styles from "../../styles/Login.module.scss"; // SCSS Module import
import Link from "next/link"; // Next.js Link import
import Image from "next/image"; // Next.js Image import
import { useRouter } from "next/router"; // Next.js useRouter import
import { loginUser } from "@/lib/api"; // API 함수 import

export default function Login() {
  const [phone, setPhone] = useState("010-"); // 초기값을 "010-"으로 설정
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter(); // useRouter hook 사용

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

  const handleSubmit = async () => {
    // 전화번호에서 하이픈(-)을 제거
    const loginId = phone.replace(/-/g, "");

    console.log("Login submitted:", {
      loginId,
      password,
    });

    try {
      // loginUser 함수 호출
      await loginUser({ loginId: loginId, pwd: password });
      router.push("/main/Main"); // /main/Main 리다이렉트
    } catch (error) {
      // 로그인 실패 시 에러 처리 로직
      console.error("Login failed:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/images/image.png" alt="Be:CYCLE" width={150} height={50} />
      </div>
      <div className={styles.form}>
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
      </div>
      <div className={styles.footer}>
        <span>계정이 없으신가요? </span>
        <Link href="/account/signup" className={styles.signupLink}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
