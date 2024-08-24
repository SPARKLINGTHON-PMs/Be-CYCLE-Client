import React from "react";
import { useRouter } from "next/router";
import { Card, Flex, Text, VStack } from "@chakra-ui/react";
import Header from "@/components/Common/Header";
import BookCard from "@/components/Common/BookCard";

interface Book {
  id: number;
  title: string;
  publisher: string;
  author: string;
}


// db에서 유사한 책 정보 가져오기
const searchedBooks = [
  {
    id: 1,
    title: "책 제목",
    publisher : "출판사",
    author : "저자",
  },
  {
    id: 2,
    title: "책 제목",
    publisher : "출판사",
    author : "저자",
  }
];


export default function SelectBook() {
  const router = useRouter();

  const handleSelectBook = ( book : Book ) => {
    // 책 선택 로직
    router.push('/addBook/addDetails');

  }

  return (
    <Flex direction={'column'}>
      <Header text={'책 등록하기'} />
      <VStack>
        <Text>검색된 유사한 책들</Text>
        {searchedBooks.map((book, index) => (
          <Card onClick={() => handleSelectBook(book)}>
            <BookCard key={index} book={book} />
          </Card>

        ))}
      </VStack>
    </Flex>
  );
}