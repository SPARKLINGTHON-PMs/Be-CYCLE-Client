import React from "react";
import styles from "../../styles/Main.module.scss"; // SCSS Module import

export default function NavBar() {
  return (
    <div>
      <footer className={styles.footer}>
        <button className={styles.footerButton}>메인</button>
        <button className={styles.footerButton}>교환</button>
        <button className={styles.footerButton}>알림</button>
        <button className={styles.footerButton}>마이 페이지</button>
      </footer>
    </div>
  );
}

