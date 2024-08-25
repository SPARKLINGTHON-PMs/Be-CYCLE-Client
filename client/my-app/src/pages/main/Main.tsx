import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  HStack,
  Flex,
  Image as ChakraImage,
  SimpleGrid,
} from "@chakra-ui/react";
import NavBar from "@/components/Common/NavBar";

// Book 인터페이스 정의
interface Book {
  id: number;
  title: string;
  status: string;
  author: string;
  publisher: string;
  imageId: number;
  imageUrl?: string; // Blob URL로 변환된 이미지 URL
}

export default function Main() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // 서버에서 책 데이터를 가져오는 함수
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/book");
        if (!response.ok) {
          throw new Error("서버로부터 데이터를 가져오는데 실패했습니다.");
        }
        const data = await response.json();

        // 각 책의 이미지 데이터를 가져오는 함수
        const fetchImageData = async (book: Book) => {
          const imageResponse = await fetch(
            `http://localhost:8080/api/a1/image/${book.imageId}`
          );
          if (!imageResponse.ok) {
            throw new Error("이미지를 가져오는데 실패했습니다.");
          }
          const imageBlob = await imageResponse.blob();
          const imageUrl = URL.createObjectURL(imageBlob);
          return { ...book, imageUrl };
        };

        // 모든 책의 이미지 데이터를 가져와 병합
        const booksWithImages = await Promise.all(
          data.map((book: Book) => fetchImageData(book))
        );

        setBooks(booksWithImages);
      } catch (error) {
        console.error("책 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Flex direction="column" height="100vh" bg="#F9F9F9">
      {/* 헤더와 검색 바 */}
      <Box bg="" p="16px" borderBottomRadius="20px">
        <Flex justifyContent="center" mb="12px">
          <ChakraImage src="/images/image.png" alt="Be:CYCLE" width="120px" />
        </Flex>
        <Input
          placeholder="검색어를 입력하세요"
          variant="outline"
          borderColor="#1DAD8E"
          bg="white"
          borderRadius="26.5px"
          _placeholder={{ color: "#898989" }}
          _focus={{ borderColor: "#1DAD8E" }}
        />
      </Box>

      {/* 관심 책 목록 */}
      <Box flex="1" p="16px">
        <Text fontSize="lg" fontWeight="bold" mb="16px">
          김홍자님이 관심이 있을 만한 책들
        </Text>

        {/* 필터 버튼 */}
        <HStack spacing="8px" mb="16px">
          <Button
            variant="outline"
            borderColor="#F0F0F0"
            borderRadius="full"
            fontSize="sm"
            color="#898989"
            _hover={{ bg: "#F0F0F0" }}
          >
            관심있는
          </Button>
          <Button
            variant="outline"
            borderColor="#F0F0F0"
            borderRadius="full"
            fontSize="sm"
            color="#898989"
            _hover={{ bg: "#F0F0F0" }}
          >
            근처인
          </Button>
          <Button
            variant="outline"
            borderColor="#F0F0F0"
            borderRadius="full"
            fontSize="sm"
            color="#898989"
            _hover={{ bg: "#F0F0F0" }}
          >
            새것의
          </Button>
        </HStack>

        {/* 책 목록 */}
        <SimpleGrid columns={2} spacing={4}>
          {books.map((book) => (
            <Flex key={book.id} direction="column" alignItems="center">
              {book.imageUrl && (
                <ChakraImage
                  src={book.imageUrl} // Blob URL로 변환된 이미지 URL 사용
                  alt={book.title}
                  boxSize="150px"
                  objectFit="cover"
                  borderRadius="15px"
                  mb="8px"
                />
              )}
              <Text fontSize="md" fontWeight="medium" isTruncated>
                {book.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                저자: {book.author}
              </Text>
              <Text fontSize="sm" color="gray.600">
                출판사: {book.publisher}
              </Text>
              <Text fontSize="sm" color="gray.600">
                상태: {book.status === "GOOD" ? "좋음" : book.status}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* 하단 네비게이션 바 */}
      <NavBar />
    </Flex>
  );
}
