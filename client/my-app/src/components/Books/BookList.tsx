import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

interface Book {
  id: number;
  title: string;
}

export default function BookList({
  books,
  reqMode,
}: {
  books: Book[];
  reqMode: boolean;
}) {
  const router = useRouter();
  const handleView = (book: Book) => {
    // 책 상세보기 로직
    router.push({ pathname: `/books/${book.id}`, query: { reqMode: reqMode } });
  };

  return (
    <Flex>
      {books.map((book, index) => (
        <VStack px={5} onClick={() => handleView(book)}>
          <Box width={"90px"} height={"120px"} overflow={"hidden"}>
            <Image
              src="https://via.placeholder.com/300"
              alt="Book A"
              width={"100%"}
              height={"auto"}
              objectFit={"cover"}
            />
          </Box>
          <Text key={book.id}>{book.title}</Text>
        </VStack>
      ))}
    </Flex>
  );
}
