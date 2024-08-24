import React from "react";
import BookExchange from "@/components/Books/BookExchange";
import Header from "@/components/Common/Header";
import { Button, Flex, Text } from "@chakra-ui/react";
import BookList from "@/components/Books/BookList";

export default function BookExchangePage() {

  // 교환 요청한 책 데이터
  const requestBook = { nickname: "User A", bookId: 1, title: "Book A" };

  const requesterBooks = [
    { id: 1, title: "Book A" },
    { id: 2, title: "Book B" },
    { id: 3, title: "Book C" },
  ];

  // 교환할 책 데이터
  const returnBook = { nickname: "User B", bookId: 2, title: "Book B" };

  return (
    <Flex direction={'column'}>
      <Header text={'교환할 책 고르기'} />
      <BookExchange reqBook={requestBook} retBook={returnBook} />

      <Text>{requestBook.nickname}님의의 책장</Text>
      <BookList books={requesterBooks} />
      <Button>교환하고 싶은 책이 없어요</Button>
    </Flex>
  );
}
