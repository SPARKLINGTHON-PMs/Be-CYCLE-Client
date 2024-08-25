// src/pages/books/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Image, Text, Button, Badge } from "@chakra-ui/react";
import Header from "@/components/Common/Header";
import Profile from "@/components/Common/Profile";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  const book = {
    id,
    title: "디자인 구구단",
    publisher: "출판사 C",
    author: "저자 C",
    categories: ["디자인", "컴퓨터/IT"],
    status: "거의 새것",
    methods: "직거래",
    imageUrl: "/images/book3.png",
  };

  const owner = { nickname: "홍길동", location: "충청남도 공주시" };

  return (
    <Flex direction="column">
      <Header text="책 상세" />
      <Image src={book.imageUrl} alt={book.title} width="100%" />
      <Profile nickname={owner.nickname} location={owner.location} />
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold">
          {book.title}
        </Text>
        <Text>{book.publisher}</Text>
        <Text>{book.author}</Text>
        <Flex wrap="wrap" mt="2">
          {book.categories.map((category, index) => (
            <Badge key={index} colorScheme="gray" mr="2" mb="2">
              {category}
            </Badge>
          ))}
        </Flex>
        <Button colorScheme="teal" mt="4" width="100%">
          교환 신청
        </Button>
      </Box>
    </Flex>
  );
}
