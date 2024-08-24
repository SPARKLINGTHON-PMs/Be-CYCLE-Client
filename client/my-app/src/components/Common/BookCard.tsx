import React from "react";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function BookCard({ book } : { book: { title: string, publisher: string, author: string } }) {
  return (
    <HStack>
      <Image src="https://via.placeholder.com/150" alt={book.title} />
      <VStack>
        <Text>책 제목: {book.title}</Text>
        <Text>출판사: {book.publisher}</Text>
        <Text>저자: {book.author}</Text>
      </VStack>
    </HStack>

  );
}