import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Main.module.scss"; // SCSS Module import

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <footer className={styles.footer}>
        <button className={styles.footerButton}
                onClick={() => router.push(`/main/Main`)}
        >메인</button>
        <button className={styles.footerButton}
                onClick={() => router.push(`/books/exchangeList`)}
        >교환</button>
        <button className={styles.footerButton}
                onClick={() => router.push(`/notification/notification`)}
        >알림</button>
        <button className={styles.footerButton}
                 onClick={() => router.push(`/mypage/mybooks`)}
        >마이 페이지</button>
      </footer>
    </div>
  );
}

