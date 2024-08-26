import React, { useEffect, useState } from "react";
import { Box, Flex, Text, VStack, Image } from "@chakra-ui/react";
import NavBar from "@/components/Common/NavBar";
import Header from "@/components/Common/Header";

// Book 인터페이스 정의
interface Book {
  id: number;
  title: string;
  imageUrl?: string;
}

export default function ExchangeList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // 전체 게시글 데이터를 가져오는 함수
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/book"); // 전체 게시글 조회 API
        console.log(response);
        if (!response.ok) {
          throw new Error("게시글 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();

        // 이미지 URL 생성 및 책 데이터 설정
        const mappedBooks = await Promise.all(
          data.map(async (post: any) => {
            const imageResponse = await fetch(
              `http://localhost:8080/api/a1/image/${post.imageId}`
            );
            if (!imageResponse.ok) {
              throw new Error("이미지를 가져오는 데 실패했습니다.");
            }
            const imageBlob = await imageResponse.blob();
            const imageUrl = URL.createObjectURL(imageBlob);

            return {
              id: post.id,
              title: post.title,
              imageUrl,
            };
          })
        );

        setBooks(mappedBooks);
      } catch (error) {
        console.error("책 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Flex direction="column" minH="100vh" bg="#F9F9F9">
      <Header text="교환들" />
      <Box flex="1" p="16px">
        <VStack spacing="16px">
          {books.map((book, index) => (
            <Flex
              key={book.id}
              bg="#FFF5E5"
              borderRadius="12px"
              p="16px"
              w="100%"
              justifyContent="space-between"
              alignItems="center"
              boxShadow="lg"
            >
              <Flex direction="column" align="center" flex="1">
                <Image
                  src={book.imageUrl}
                  boxSize="100px"
                  alt="책 이미지"
                  borderRadius="8px"
                  objectFit="cover"
                />
                <Text mt="8px" fontWeight="medium" fontSize="sm">
                  내가 고른 책
                </Text>
                <Text fontSize="md" mt="2px">
                  {book.title}
                </Text>
              </Flex>
              <Text fontSize="2xl" fontWeight="bold" color="gray.500">
                ↔
              </Text>
              <Flex direction="column" align="center" flex="1">
                {books[index + 1] && (
                  <>
                    <Image
                      src={books[index + 1].imageUrl}
                      boxSize="100px"
                      alt="책 이미지"
                      borderRadius="8px"
                      objectFit="cover"
                    />
                    <Text mt="8px" fontWeight="medium" fontSize="sm">
                      상대가 고른 책
                    </Text>
                    <Text fontSize="md" mt="2px">
                      {books[index + 1].title}
                    </Text>
                  </>
                )}
              </Flex>
            </Flex>
          ))}
        </VStack>
      </Box>
      <NavBar />
    </Flex>
  );
}
