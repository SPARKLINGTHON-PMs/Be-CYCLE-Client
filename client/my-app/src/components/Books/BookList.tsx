import React from "react";
import { Box, Flex, Image, Text, VStack} from "@chakra-ui/react";

// 내 책 데이터 호출
const books = [
  { id: 1, title: "Book A" },
  { id: 2, title: "Book B" },
  // 추가 책 데이터
];

export default function BookList() {
  return (
    <Flex>
      {books.map((book) => (
        <VStack px={5}>
          <Box width={'90px'} height={'120px'} overflow={'hidden'}>
            <Image src="https://via.placeholder.com/300" alt="Book A" width={'100%'} height={'auto'} objectFit={'cover'}/>
          </Box>
          <Text key={book.id}>{book.title}</Text>
        </VStack>
      ))}
    </Flex>
  );
}