import React from "react";
import styles from "../../styles/Main.module.scss"; // SCSS Module import
import {Input} from "@chakra-ui/react";
import NavBar from "@/components/Common/NavBar";

export default function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Input
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
      <NavBar/>
    </div>
  );
}
