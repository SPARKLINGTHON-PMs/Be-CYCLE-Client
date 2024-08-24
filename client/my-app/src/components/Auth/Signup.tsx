import React, { useState } from "react";
import styles from "../../styles/Signup.module.scss"; // SCSS Module import
import { useRouter } from "next/router"; // Next.js 라우팅 사용

export default function Signup() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직
    console.log("Signup submitted:", {
      name,
      nickname,
      phone,
      location,
      interests,
    });

    // 회원가입 후 메인 페이지로 이동
    router.push("/main");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          이름
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
            placeholder="이름 입력"
          />
        </label>
        <label className={styles.label}>
          닉네임
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            className={styles.input}
            placeholder="닉네임 입력"
          />
        </label>
        <label className={styles.label}>
          전화번호
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={styles.input}
            placeholder="전화번호 입력"
          />
        </label>
        <label className={styles.label}>
          거주지
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className={styles.input}
            placeholder="거주지 입력"
          />
        </label>
        <label className={styles.label}>
          관심사
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className={styles.input}
            placeholder="관심사 입력"
          />
        </label>
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
    </div>
  );
}
