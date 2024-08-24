import React from "react";
import { Card, CardHeader, HStack, Image, Text, VStack } from "@chakra-ui/react";

interface Book {
  nickname: string;
  bookId: number;
  title: string;
}

export default function BookExchange({ reqBook, retBook }: { reqBook: Book, retBook: Book }) {

  const handleMatching = (nickname: string) => {
    // 교환 매칭 로직
  }

  return (
    <Card onClick={() => handleMatching(reqBook.nickname)}>
      <CardHeader>{reqBook.nickname}님과의 교환</CardHeader>
      <HStack>
        <VStack>
          <Image src="https://via.placeholder.com/150" alt={reqBook.title} />
          <Text>요청할 책: {reqBook.title}</Text>
        </VStack>

        <VStack>
          <Image src="https://via.placeholder.com/150" alt={retBook.title} />
          <Text>나의 책: {retBook.title}</Text>
        </VStack>
      </HStack>
    </Card>
  );
}
