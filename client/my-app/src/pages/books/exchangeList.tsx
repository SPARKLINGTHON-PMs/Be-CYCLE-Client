import React  from "react";
import styles from "@/styles/Main.module.scss";
import { Text, Stack } from "@chakra-ui/react";
import BookExchange from "@/components/Books/BookExchange";
import NavBar from "@/components/Common/NavBar";

export default function ExchangeList() {

  // 교환 테이블 호출
  const exchangeList = [
    { id: 1, req: { nickname: "User A", bookId: 1, title: "Book A" }, ret: { nickname: "User B", bookId: 2, title: "Book B" } },
    { id: 2, req: { nickname: "User C", bookId: 3, title: "Book C" }, ret: { nickname: "User D", bookId: 4, title: "Book D" } },
    { id: 3, req: { nickname: "User E", bookId: 5, title: "Book E" }, ret: { nickname: "User F", bookId: 6, title: "Book F" } },
  ];

  return (
    <div className={styles.container}>
      <Text>교환 목록</Text>
      <Stack>
        {exchangeList.map((book) => (
          <BookExchange reqBook={book.req} retBook={book.ret} />
        ))}
      </Stack>
      <NavBar />
    </div>
  );
}