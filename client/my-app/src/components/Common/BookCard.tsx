// src/components/Common/BookCard.tsx
import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

interface BookCardProps {
  title: string;
  publisher: string;
  author: string;
  categories: string[];
  imageUrl: string;
}

export default function BookCard({
  title,
  publisher,
  author,
  categories,
  imageUrl,
}: BookCardProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={imageUrl} alt={title} />
      <Box p="6">
        <Text fontWeight="bold" as="h4" lineHeight="tight">
          {title}
        </Text>
        <Text>{publisher}</Text>
        <Text>{author}</Text>
        <Box>
          {categories.map((category) => (
            <Badge
              key={category}
              borderRadius="full"
              px="2"
              colorScheme="teal"
              m={1}
            >
              {category}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
