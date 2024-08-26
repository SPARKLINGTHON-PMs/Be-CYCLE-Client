import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/NavBar.module.scss"; // SCSS Module import

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <button
        className={`${styles.footerButton} ${
          router.pathname === "/main/Main" ? styles.active : ""
        }`}
        onClick={() => router.push(`/main/Main`)}
      >
        <span className={styles.icon}>🏠</span>
        <span>메인</span>
      </button>

      <button
        className={`${styles.footerButton} ${
          router.pathname === "/books/exchangeList" ? styles.active : ""
        }`}
        onClick={() => router.push(`/books/exchangeList`)}
      >
        <span className={styles.icon}>🔄</span>
        <span>교환</span>
      </button>

      <button
        className={`${styles.footerButton} ${
          router.pathname === "/notification/notification" ? styles.active : ""
        }`}
        onClick={() => router.push(`/notification/notification`)}
      >
        <span className={styles.icon}>🔔</span>
        <span>알림</span>
      </button>

      <button
        className={`${styles.footerButton} ${
          router.pathname === "/mypage/mybooks" ? styles.active : ""
        }`}
        onClick={() => router.push(`/mypage/mybooks`)}
      >
        <span className={styles.icon}>👤</span>
        <span>마이 페이지</span>
      </button>
    </div>
  );
}
