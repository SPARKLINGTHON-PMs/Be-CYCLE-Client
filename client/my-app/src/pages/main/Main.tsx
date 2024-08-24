import React from "react";
import styles from "../../styles/Main.module.scss"; // SCSS Module import

export default function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="검색어를 입력하세요"
        />
      </header>
      <main className={styles.mainContent}>
        <h2>OOO님이 관심이 있을 만한 책들</h2>
        <div className={styles.filters}>
          <button className={styles.filterButton}>관심있는</button>
          <button className={styles.filterButton}>근처인</button>
          <button className={styles.filterButton}>새것의</button>
        </div>
        <div className={styles.bookList}>
          <div className={styles.bookItem}>책 이름</div>
          <div className={styles.bookItem}>책 이름</div>
          <div className={styles.bookItem}>책 이름</div>
          <div className={styles.bookItem}>책 이름</div>
          <div className={styles.bookItem}>책 이름</div>
          <div className={styles.bookItem}>책 이름</div>
        </div>
      </main>
      <footer className={styles.footer}>
        <button className={styles.footerButton}>메인</button>
        <button className={styles.footerButton}>교환</button>
        <button className={styles.footerButton}>알림</button>
        <button className={styles.footerButton}>마이 페이지</button>
      </footer>
    </div>
  );
}
