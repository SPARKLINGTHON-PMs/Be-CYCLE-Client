import React from "react";
import { Box, Flex, Text, VStack, Image, Button } from "@chakra-ui/react";
import Header from "@/components/Common/Header";

export default function SelectExchangeBook() {
  const exchange = {
    myBook: { title: "미완료", cover: "/images/book-placeholder.png" },
    otherBook: { title: "불안한 세대", cover: "/images/book2.png" },
  };

  const userBooks = [
    { id: 1, title: "일상으로서의 명상", cover: "/images/book3.png" },
    { id: 2, title: "죽이고 싶은 아이들", cover: "/images/book4.png" },
  ];

  return (
    <Flex direction="column" minH="100vh">
      <Header text="OOO님과 교환할 책 고르기" />
      <Box flex="1" p="16px">
        <Flex
          bg="#F9F9F9"
          borderRadius="12px"
          p="16px"
          justifyContent="space-between"
          mb="24px"
        >
          <Flex direction="column" align="center">
            <Image src={exchange.myBook.cover} boxSize="100px" alt="My Book" />
            <Text>{exchange.myBook.title}</Text>
          </Flex>
          <Text fontSize="3xl" align="center">
            ➔
          </Text>
          <Flex direction="column" align="center">
            <Image
              src={exchange.otherBook.cover}
              boxSize="100px"
              alt="Other Book"
            />
            <Text>{exchange.otherBook.title}</Text>
          </Flex>
        </Flex>

        <Text mb="16px" fontWeight="bold">
          OOO님의 책장
        </Text>

        <VStack spacing="16px">
          {userBooks.map((book) => (
            <Flex
              key={book.id}
              bg="#F9F9F9"
              borderRadius="12px"
              p="16px"
              justifyContent="space-between"
              w="100%"
            >
              <Image src={book.cover} boxSize="100px" alt="Book" />
              <Text>{book.title}</Text>
            </Flex>
          ))}
        </VStack>
      </Box>
      <Button colorScheme="teal" size="lg" mx="16px" mb="24px">
        교환하고 싶은 책이 없어요
      </Button>
    </Flex>
  );
}
