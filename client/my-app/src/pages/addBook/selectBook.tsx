import React from "react";
import { Box, Flex, Image, Text, HStack, VStack } from "@chakra-ui/react";
import Header from "@/components/Common/Header";
import BookCard from "@/components/Common/BookCard";

// db에서 유사한 책 정보 가져오기
const searchedBooks = [
  {
    title: "책 제목",
    publisher : "출판사",
    author : "저자",
  },
  {
    title: "책 제목",
    publisher : "출판사",
    author : "저자",
  }
];


export default function SelectBook() {

  const handleSelectBook = () => {
    // 책 선택 로직
  }

  return (
    <Flex direction={'column'}>
      <Header text={'책 등록하기'} />
      <VStack>
        <Text>검색된 유사한 책들</Text>
        {searchedBooks.map((book, index) => (
          <Box onClick={handleSelectBook}>
            <BookCard key={index} book={book} />
          </Box>

        ))}
      </VStack>
    </Flex>
  );
}