import React from "react";
import { useRouter } from "next/router";
import { Badge, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Header from "../Common/Header";
import Profile from "../Common/Profile";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  const reqMode = router.query.reqMode;

  // 책 정보를 가져오는 로직 (API 요청)
  const book = {
    id,
    title: "디자인 구구단",
    publisher: "길벗",
    published_date: "2023-05-01",
    description: "디자인이 필요한 순간, '툭' 튀어나오는 디자인 공식",
    categories: ["컴퓨터/IT", "과학"],
    status: ["거의 새것"],
    methods: ["직거래"],
    imageUrl: "/images/book2.png", // 이미지 경로
  };

  // 책 주인 정보를 가져오는 로직 (예: API 요청)
  const owner = { nickname: "홍길동", location: "충청남도 공주시 거주" };

  const handleRequest = () => {
    // 교환 신청 로직
    console.log("교환 신청");
  };

  const handleSelect = () => {
    // 교환할 책 선택 로직
    console.log("이 책이랑 교환하기");
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="16px"
      bg="white"
      height="100vh"
    >
      {/* Header */}
      <Header text="책 상세" />

      {/* Book Image */}
      <Image
        src={book.imageUrl}
        alt={book.title}
        borderRadius="md"
        width="100%"
        maxHeight="300px"
        objectFit="cover"
        mb="16px"
      />

      {/* Profile */}
      <Profile nickname={owner.nickname} location={owner.location} />

      {/* Book Information */}
      <Text fontSize="lg" fontWeight="bold" mt="16px">
        {book.title}
      </Text>
      <Text fontSize="md" color="gray.600" mt="4px">
        저자: 에이햇
      </Text>
      <Text fontSize="md" color="gray.600">
        출판사: {book.publisher}
      </Text>

      {/* Categories */}
      <HStack mt="12px" spacing="8px">
        <Text fontSize="md" fontWeight="bold">
          카테고리:
        </Text>
        {book.categories.map((category, index) => (
          <Badge key={index} colorScheme="gray" borderRadius="full" px="2">
            {category}
          </Badge>
        ))}
      </HStack>

      {/* Book Status */}
      <HStack mt="12px" spacing="8px">
        <Text fontSize="md" fontWeight="bold">
          책 상태:
        </Text>
        {book.status.map((stat, index) => (
          <Badge key={index} colorScheme="gray" borderRadius="full" px="2">
            {stat}
          </Badge>
        ))}
      </HStack>

      {/* Trade Methods */}
      <HStack mt="12px" spacing="8px">
        <Text fontSize="md" fontWeight="bold">
          거래 방식:
        </Text>
        {book.methods.map((method, index) => (
          <Badge key={index} colorScheme="gray" borderRadius="full" px="2">
            {method}
          </Badge>
        ))}
      </HStack>

      {/* Request Button */}
      <Button
        mt="24px"
        colorScheme="teal"
        size="lg"
        width="100%"
        borderRadius="full"
        onClick={reqMode === "true" ? handleRequest : handleSelect}
      >
        {reqMode === "true" ? "교환 신청" : "이 책이랑 교환하기"}
      </Button>
    </Flex>
  );
}
